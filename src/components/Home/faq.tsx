import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg">Is my data private?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            Absolutely. Octree uses only <strong>Claude Haiku 4.5</strong> for AI generation. Your
            files and inputs are <strong>never stored, shared, or used for model training</strong>.
            All compilation happens securely on our own servers.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-lg">Is Octree free to use?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            Yes — you get <strong>15 free AI credits every day</strong>, no card required. You can
            upgrade later for more usage and faster compile times.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-lg">How are documents compiled?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            All documents are compiled using a{' '}
            <strong>fully hosted TeXLive 2025 environment</strong> running on our servers, ensuring
            consistent and accurate LaTeX output.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className="text-lg">What can Octree generate?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            Octree can build <strong>any kind of LaTeX or structured document</strong> — including{' '}
            <strong>TikZ diagrams, flowcharts, resumes, research reports, presentations</strong>,
            and more. Just describe what you need, and the AI handles the rest.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className="text-lg">Is Octree open source?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            Yes. Octree is open source — explore the codebase and contribute here:{' '}
            <a
              href="https://github.com/octree-labs/octree"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://github.com/octree-labs/octree
            </a>
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger className="text-lg">Do I need to install anything?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            No installation required. Octree is <strong>completely web-based</strong>, so you can
            access your projects from any browser, anywhere.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger className="text-lg">
          How can I request a refund or support?
        </AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            Simply email{' '}
            <a
              href="mailto:basil@useoctree.online"
              className="text-primary hover:underline font-medium"
            >
              basil@useoctree.online
            </a>{' '}
            — we&apos;ll respond within 24 hours.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger className="text-lg">Does it support images and figures?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
          <p>
            Yes. Octree supports <strong>image uploads, figure embedding</strong>, and even{' '}
            <strong>AI-assisted image-to-LaTeX conversion</strong> for math and diagrams.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
