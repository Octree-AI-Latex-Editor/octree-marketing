import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
  EXPERIMENTAL_TableFeature,
  UnorderedListFeature,
  LinkFeature,
  BoldFeature,
  ItalicFeature,
  UnderlineFeature,
  StrikethroughFeature,
  OrderedListFeature,
  ChecklistFeature,
  convertMarkdownToLexical,
  convertLexicalToMarkdown,
  editorConfigFactory,
  InlineCodeFeature,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { populateAuthors } from './hooks/populateAuthors'
import { revalidateDeleteBlog, revalidateBlog } from './hooks/revalidatePost'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Blogs: CollectionConfig<'blogs'> = {
  slug: 'blogs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a post is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'blogs'>
  defaultPopulate: {
    title: true,
    slug: true,
    categories: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'blogs',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'blogs',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'heroImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4', 'h5'] }),
                    BoldFeature(),
                    ItalicFeature(),
                    UnderlineFeature(),
                    StrikethroughFeature(),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                    EXPERIMENTAL_TableFeature(),
                    UnorderedListFeature(),
                    OrderedListFeature(),
                    ChecklistFeature(),
                    LinkFeature(),
                    InlineCodeFeature(),
                  ]
                },
              }),
              label: false,
              required: true,
            },
            {
              name: 'markdown',
              type: 'textarea',
              admin: {
                description:
                  'Write your content in Markdown. It will be converted to rich text automatically. Note: Blocks (Banner, Code, Media) cannot be represented in Markdown and will be lost if you edit via Markdown.',
                rows: 20,
              },
              hooks: {
                afterRead: [
                  async ({ siblingData, siblingFields }) => {
                    const data = siblingData['content']
                    if (!data) {
                      return ''
                    }
                    try {
                      const contentField = siblingFields.find(
                        (field) => 'name' in field && field.name === 'content',
                      )
                      if (!contentField || contentField.type !== 'richText') {
                        return ''
                      }
                      const markdown = convertLexicalToMarkdown({
                        data,
                        editorConfig: editorConfigFactory.fromField({
                          field: contentField,
                        }),
                      })
                      return markdown
                    } catch (error) {
                      console.error('Error converting to markdown:', error)
                      return ''
                    }
                  },
                ],
                beforeChange: [
                  async ({ value, originalDoc, siblingData, siblingFields }) => {
                    // Only convert markdown to content if:
                    // 1. Markdown field has content
                    // 2. The markdown value has actually changed from what was previously stored
                    if (!value) {
                      return undefined
                    }

                    // Get the previous markdown representation to check if it changed
                    const previousContent = originalDoc?.content
                    if (previousContent) {
                      try {
                        const contentField = siblingFields.find(
                          (field) => 'name' in field && field.name === 'content',
                        )
                        if (contentField && contentField.type === 'richText') {
                          const previousMarkdown = convertLexicalToMarkdown({
                            data: previousContent,
                            editorConfig: editorConfigFactory.fromField({
                              field: contentField,
                            }),
                          })

                          // If markdown hasn't changed, don't overwrite content
                          // This prevents losing blocks when saving without editing markdown
                          if (previousMarkdown === value) {
                            return undefined
                          }
                        }
                      } catch (error) {
                        console.error('Error checking previous markdown:', error)
                      }
                    }

                    // If we got here, markdown has changed - convert it
                    try {
                      const contentField = siblingFields.find(
                        (field) => 'name' in field && field.name === 'content',
                      )
                      if (!contentField || contentField.type !== 'richText') {
                        return undefined
                      }
                      const lexicalJSON = convertMarkdownToLexical({
                        markdown: value,
                        editorConfig: editorConfigFactory.fromField({
                          field: contentField,
                        }),
                      })
                      // Update the content field with converted rich text
                      siblingData['content'] = lexicalJSON
                    } catch (error) {
                      console.error('Error converting markdown:', error)
                    }

                    // Don't save the markdown field to database
                    return undefined
                  },
                ],
              },
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'relatedPosts',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              filterOptions: ({ id }) => {
                return {
                  id: {
                    not_in: [id],
                  },
                }
              },
              hasMany: true,
              relationTo: 'blogs',
            },
            {
              name: 'categories',
              type: 'relationship',
              admin: {
                position: 'sidebar',
              },
              hasMany: true,
              relationTo: 'categories',
            },
          ],
          label: 'Meta',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
    {
      name: 'authors',
      type: 'relationship',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      relationTo: 'users',
    },
    // This field is only used to populate the user data via the `populateAuthors` hook
    // This is because the `user` collection has access control locked to protect user privacy
    // GraphQL will also not return mutated user data that differs from the underlying schema
    {
      name: 'populatedAuthors',
      type: 'array',
      access: {
        update: () => false,
      },
      admin: {
        disabled: true,
        readOnly: true,
      },
      fields: [
        {
          name: 'id',
          type: 'text',
        },
        {
          name: 'name',
          type: 'text',
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidateBlog],
    afterRead: [populateAuthors],
    afterDelete: [revalidateDeleteBlog],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 1000, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
