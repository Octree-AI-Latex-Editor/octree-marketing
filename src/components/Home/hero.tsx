'use client'

import React from 'react'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { PrimaryButton } from '@/components/Home/primary-button'
import { CreditCard } from 'lucide-react'
import {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
} from '@/components/ui/shadcn-io/video-player'

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring' as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-[600px] blur-[20px] rounded-full overflow-hidden z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(0deg, #c7dbff 0%, rgba(228, 241, 254, 0.15) 51%, rgba(255, 255, 255, 0) 100%)',
        }}
      />
      <section>
        <div className="relative pt-16 pb-8 md:pt-20 z-10">
          <div className="text-center px-4">
            <div className="mb-6">
              <div className="max-w-5xl mx-auto">
                <h1 className="text-[32px] md:text-[48px] lg:text-[56px] text-black leading-[1.05] tracking-tight font-heading">
                  <TextEffect preset="fade-in-blur" speedSegment={0.3} as="span">
                    Write research documents with AI
                  </TextEffect>
                  <br />
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    delay={0.5}
                    as="span"
                    className="text-[#478eff]"
                  >
                    The modern Overleaf alternative
                  </TextEffect>
                </h1>
              </div>
            </div>

            <div className="mb-8">
              <TextEffect
                per="line"
                preset="fade-in-blur"
                speedSegment={0.3}
                delay={0.5}
                as="p"
                className="max-w-3xl mx-auto text-lg md:text-xl font-medium text-[#636363] tracking-[-0.03]"
              >
                Go from idea to publication-ready LaTeX documents in minutes. Generate TikZ diagrams,
                structure your sections, and refine with AI — no syntax, no setup.
              </TextEffect>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
              className="mb-16 flex flex-col items-center gap-3"
            >
              <PrimaryButton className="text-base md:text-lg px-4 py-2 md:px-5 md:py-2.5 h-auto">
                Try now - it&apos;s free!
              </PrimaryButton>
              <div className="flex items-center gap-1.5 text-[#636363] text-xs md:text-sm">
                <CreditCard className="w-3.5 h-3.5 md:w-4 md:h-4" />
                <span>No credit card required</span>
              </div>
            </AnimatedGroup>
          </div>

          <AnimatedGroup
            variants={{
              container: {
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.75,
                  },
                },
              },
              ...transitionVariants,
            }}
          >
            <div className="max-w-6xl mx-auto px-4">
              <div className="relative">
                <VideoPlayer className="w-full overflow-hidden shadow-2xl">
                  <VideoPlayerContent
                    src="/video/Demo.mp4"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    slot="media"
                    className="w-full h-auto"
                    style={{
                      objectFit: 'cover',
                      objectPosition: '50% 50%',
                    }}
                  />
                  <VideoPlayerControlBar>
                    <VideoPlayerPlayButton />
                    <VideoPlayerTimeRange />
                    <VideoPlayerTimeDisplay showDuration />
                    <VideoPlayerMuteButton />
                  </VideoPlayerControlBar>
                </VideoPlayer>
              </div>
            </div>
          </AnimatedGroup>
        </div>
      </section>
    </div>
  )
}
