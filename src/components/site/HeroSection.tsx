import Image from 'next/image'
import { ArrowRight, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WorkflowAnimation } from '@/components/workflow-animation'

export default function HeroSection() {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90'></div>

      {/* Grid background that fills the entire section - improved visibility */}
      <div className='absolute inset-0 w-full h-full overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-full opacity-10'
          viewBox='0 0 100 100'
          preserveAspectRatio='none'
          style={{
            minHeight: '100%',
            minWidth: '100%',
          }}
        >
          <defs>
            <linearGradient id='gridFade' x1='0%' y1='0%' x2='0%' y2='100%'>
              <stop offset='0%' stopColor='currentColor' stopOpacity='1' />
              <stop offset='85%' stopColor='currentColor' stopOpacity='1' />
              <stop offset='100%' stopColor='currentColor' stopOpacity='0' />
            </linearGradient>
          </defs>

          <path d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='url(#gridFade)' strokeWidth='0.8'></path>

          {/* Horizontal lines with fade gradient - increased number and visibility */}
          {[...Array(30)].map((_, i) => (
            <line
              key={`h-${i}`}
              x1='0'
              y1={i * 3.33}
              x2='100'
              y2={i * 3.33}
              stroke='url(#gridFade)'
              strokeWidth='0.4'
            />
          ))}

          {/* Vertical lines with fade gradient - increased number and visibility */}
          {[...Array(30)].map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 3.33}
              y1='0'
              x2={i * 3.33}
              y2='100'
              stroke='url(#gridFade)'
              strokeWidth='0.4'
            />
          ))}
        </svg>
      </div>

      {/* Added: Animated SVG pattern from "How It Works" section - full coverage */}
      <div className='absolute inset-0 w-full h-full opacity-10 pointer-events-none overflow-hidden'>
        <svg
          className='absolute top-0 left-0 w-full h-full'
          width='100%'
          height='100%'
          preserveAspectRatio='none'
          style={{
            minHeight: '100%',
            minWidth: '100%',
          }}
        >
          <defs>
            <pattern id='animatedGrid' width='30' height='30' patternUnits='userSpaceOnUse'>
              <path
                d='M 30 0 L 0 0 0 30'
                fill='none'
                stroke='currentColor'
                strokeWidth='0.5'
                strokeDasharray='30,30'
                strokeDashoffset='0'
              >
                <animate attributeName='stroke-dashoffset' from='0' to='20' dur='3s' repeatCount='indefinite' />
              </path>
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#animatedGrid)' />
        </svg>
      </div>

      {/* Enhanced bottom fade overlay */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none'></div>

      {/* Enhanced animated particles */}
      <div
        className='absolute top-1/3 left-1/3 w-4 h-4 rounded-full bg-primary/60 blur-sm'
        style={{ animation: 'particle1 20s infinite ease-in-out' }}
      ></div>
      <div
        className='absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-primary/50 blur-sm'
        style={{ animation: 'particle2 18s infinite ease-in-out' }}
      ></div>
      <div
        className='absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-primary/40 blur-sm'
        style={{ animation: 'particle3 22s infinite ease-in-out' }}
      ></div>
      <div
        className='absolute bottom-1/3 left-1/4 w-2 h-2 rounded-full bg-primary/70 blur-sm'
        style={{ animation: 'particle4 15s infinite ease-in-out' }}
      ></div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl pointer-events-none'></div>
      <div className='container mx-auto px-4 md:px-6 relative'>
        <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              {/* Centered on small screens */}
              <div className='flex justify-center sm:justify-start'>
                <div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm'>
                  <Zap className='mr-1 h-3.5 w-3.5 animate-pulse' />
                  <span>AI-Powered Productivity</span>
                </div>
              </div>
              <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/90 text-center sm:text-left'>
                Your AI-Powered Personal Assistant for Tasks & Time
              </h1>
              <p className='max-w-[600px] text-muted-foreground md:text-xl text-center sm:text-left mx-auto sm:mx-0'>
                PLAN2DO AI AI intelligently connects your tasks, plans, and calendar to create seamless workflows that
                adapt to your life.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row justify-center sm:justify-start'>
              <Button
                size='lg'
                className='gap-1 glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group'
              >
                Get Started{' '}
                <ArrowRight className='h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1' />
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300'
              >
                Watch Demo
              </Button>
            </div>

            {/* Social proof badges */}
            <div className='flex flex-wrap gap-2 mt-8 justify-center sm:justify-start'>
              <div className='flex items-center gap-1 rounded-full bg-card/40 px-3 py-1 text-xs backdrop-blur-sm'>
                <svg className='h-4 w-4 text-yellow-500' fill='currentColor' viewBox='0 0 20 20'>
                  <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                </svg>
                <span className='text-foreground/80'>4.9/5 rating</span>
              </div>
              <div className='flex items-center gap-1 rounded-full bg-card/40 px-3 py-1 text-xs backdrop-blur-sm'>
                <svg className='h-4 w-4 text-primary/80' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z' clipRule='evenodd' />
                </svg>
                <span className='text-foreground/80'>10k+ users</span>
              </div>
              <div className='flex items-center gap-1 rounded-full bg-card/40 px-3 py-1 text-xs backdrop-blur-sm'>
                <svg className='h-4 w-4 text-green-500' fill='currentColor' viewBox='0 0 20 20'>
                  <path
                    fillRule='evenodd'
                    d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span className='text-foreground/80'>Verified security</span>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative w-full aspect-square max-w-[500px] rounded-xl border border-primary/20 bg-background/30 backdrop-blur-sm shadow-xl glow overflow-hidden neon-border'>
              <div className='absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-primary/5'></div>
              <WorkflowAnimation />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
