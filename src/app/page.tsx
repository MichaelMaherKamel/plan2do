import Image from 'next/image'
import { ArrowRight, BrainCircuit, Calendar, CheckCircle, Network, Sparkles, Rocket } from 'lucide-react'

import { Button } from '@/components/ui/button'
import HeroSection from '@/components/site/HeroSection'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default function LandingPage() {
  return (
    <div className='flex w-full min-h-screen flex-col bg-background'>
      <main className='flex-1 relative z-10'>
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section - Improved section padding */}
        <section
          id='features'
          className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative overflow-hidden'
        >
          {/* Section divider with improved spacing */}
          <div className='absolute w-full h-full overflow-hidden'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
          </div>

          <div className='container mx-auto px-4 md:px-6 relative'>
            {/* Added top margin to create space below the divider */}
            <div className='flex flex-col items-center justify-center space-y-4 text-center mt-16 md:mt-20'>
              <div className='space-y-2'>
                <div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-sm font-semibold text-primary backdrop-blur-sm'>
                  <Sparkles className='mr-1 h-3.5 w-3.5' />
                  <span>AI-Powered Features</span>
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/90'>
                  Smart Planning, Effortless Execution
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto'>
                  PLAN2DO AI learns your habits and preferences to create the perfect balance between structure and
                  flexibility.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-4 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
                  <BrainCircuit className='h-6 w-6 text-primary' />
                </div>
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold'>Smart Task Suggestions</h3>
                  <p className='text-muted-foreground'>
                    AI analyzes your patterns and suggests optimal times for tasks based on your productivity cycles.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center space-y-4 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
                  <Network className='h-6 w-6 text-primary' />
                </div>
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold'>Automated Workflows</h3>
                  <p className='text-muted-foreground'>
                    Create chains of tasks that trigger automatically when conditions are met, saving you time and
                    mental energy.
                  </p>
                </div>
              </div>
              <div className='flex flex-col justify-center space-y-4 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/30'>
                  <Calendar className='h-6 w-6 text-primary' />
                </div>
                <div className='space-y-2'>
                  <h3 className='text-xl font-bold'>Dynamic Calendar</h3>
                  <p className='text-muted-foreground'>
                    Your calendar adapts in real-time as priorities shift, ensuring you always focus on what matters
                    most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id='how-it-works' className='w-full py-12 md:py-24 lg:py-32 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background'></div>
          <div className='container mx-auto px-4 md:px-6 relative'>
            {/* Section header with improved responsive spacing */}
            <div className='flex flex-col items-center justify-center space-y-4 text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20'>
              <div className='space-y-2 px-2 sm:px-0'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-white'>
                  How PLAN2DO AI Works
                </h2>
                <p className='max-w-[900px] text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mx-auto'>
                  See how our AI creates seamless connections between your tasks, plans, and calendar.
                </p>
              </div>
            </div>

            {/* Enhanced responsive grid - stack on small screens, side-by-side on large screens */}
            <div className='mx-auto grid max-w-5xl items-center gap-6 py-8 sm:py-10 md:py-12 grid-cols-1 lg:grid-cols-2'>
              {/* Steps section with improved spacing for mobile */}
              <div className='flex flex-col justify-center space-y-4 order-2 lg:order-1'>
                <div className='space-y-2 sm:space-y-4 rounded-xl border border-primary/20 glass-card p-4 sm:p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px] group'>
                  <div className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb)/0.5)] transition-all duration-300'>
                    1
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold'>Input Your Tasks & Goals</h3>
                  <p className='text-sm sm:text-base text-muted-foreground'>
                    Add tasks, set priorities, and define your goals. Our AI learns your preferences over time.
                  </p>
                </div>

                <div className='space-y-2 sm:space-y-4 rounded-xl border border-primary/20 glass-card p-4 sm:p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px] group'>
                  <div className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb)/0.5)] transition-all duration-300'>
                    2
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold'>AI Creates Optimal Schedule</h3>
                  <p className='text-sm sm:text-base text-muted-foreground'>
                    The AI analyzes your tasks, deadlines, and available time to create the perfect schedule.
                  </p>
                </div>

                <div className='space-y-2 sm:space-y-4 rounded-xl border border-primary/20 glass-card p-4 sm:p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px] group'>
                  <div className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb)/0.5)] transition-all duration-300'>
                    3
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold'>Automated Task Flows</h3>
                  <p className='text-sm sm:text-base text-muted-foreground'>
                    Tasks automatically flow between your to-do list and calendar, adapting as your day unfolds.
                  </p>
                </div>

                <div className='space-y-2 sm:space-y-4 rounded-xl border border-primary/20 glass-card p-4 sm:p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px] group'>
                  <div className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb)/0.5)] transition-all duration-300'>
                    4
                  </div>
                  <h3 className='text-lg sm:text-xl font-bold'>Continuous Optimization</h3>
                  <p className='text-sm sm:text-base text-muted-foreground'>
                    The AI learns from your feedback and behavior, constantly improving its recommendations.
                  </p>
                </div>
              </div>

              {/* Responsive image container - full width on mobile, properly sized on desktop */}
              <div className='flex items-center justify-center mx-auto w-full max-w-md lg:max-w-full order-1 lg:order-2 mb-8 lg:mb-0'>
                <div className='relative aspect-square w-full sm:w-4/5 lg:w-full max-w-[500px] overflow-hidden rounded-xl border border-primary/20 glass-card shadow-xl glow neon-border'>
                  {/* Animated SVG pattern in background */}
                  <div className='absolute inset-0 opacity-10'>
                    <svg width='100%' height='100%' viewBox='0 0 100 100'>
                      <defs>
                        <pattern id='grid' width='10' height='10' patternUnits='userSpaceOnUse'>
                          <path
                            d='M 10 0 L 0 0 0 10'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='0.5'
                            strokeDasharray='10,10'
                            strokeDashoffset='0'
                          >
                            <animate
                              attributeName='stroke-dashoffset'
                              from='0'
                              to='20'
                              dur='3s'
                              repeatCount='indefinite'
                            />
                          </path>
                        </pattern>
                      </defs>
                      <rect width='100%' height='100%' fill='url(#grid)' />
                    </svg>
                  </div>
                  <Image
                    src='/placeholder.svg?height=600&width=600'
                    width={600}
                    height={600}
                    alt='Workflow diagram showing task to calendar automation'
                    className='object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/80 to-transparent' />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section - Improved section padding */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative'>
          <div className='absolute w-full h-full overflow-hidden'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
          </div>
          <div className='container mx-auto px-4 md:px-6 relative'>
            {/* Added top margin to create space below the divider */}
            <div className='flex flex-col items-center justify-center space-y-4 text-center mt-16 md:mt-20'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/90'>
                  What Our Users Say
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto'>
                  Discover how PLAN2DO AI has transformed productivity for people just like you.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3'>
              {/* Testimonial 1 */}
              <div className='flex flex-col justify-between rounded-xl border border-primary/20 glass-card p-6 shadow-sm transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='space-y-4'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-5 w-5 text-yellow-500'
                      >
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-muted-foreground'>
                    "PLAN2DO AI has completely changed how I manage my time. The automated workflows between my tasks
                    and calendar have saved me hours each week."
                  </p>
                </div>
                <div className='mt-4 flex items-center space-x-3'>
                  <div className='h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center'>
                    <span className='text-sm font-medium text-primary'>SJ</span>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Sarah Johnson</p>
                    <p className='text-xs text-muted-foreground'>Marketing Director</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className='flex flex-col justify-between rounded-xl border border-primary/20 glass-card p-6 shadow-sm transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='space-y-4'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-5 w-5 text-yellow-500'
                      >
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-muted-foreground'>
                    "As a freelancer juggling multiple projects, PLAN2DO AI has been a game-changer. It intelligently
                    schedules my tasks based on deadlines and priority."
                  </p>
                </div>
                <div className='mt-4 flex items-center space-x-3'>
                  <div className='h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center'>
                    <span className='text-sm font-medium text-primary'>MC</span>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Michael Chen</p>
                    <p className='text-xs text-muted-foreground'>Freelance Designer</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className='flex flex-col justify-between rounded-xl border border-primary/20 glass-card p-6 shadow-sm transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='space-y-4'>
                  <div className='flex gap-0.5'>
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='h-5 w-5 text-yellow-500'
                      >
                        <path d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z' />
                      </svg>
                    ))}
                  </div>
                  <p className='text-muted-foreground'>
                    "The AI suggestions are surprisingly accurate. It's like having a personal assistant who knows
                    exactly when I'm most productive for different types of work."
                  </p>
                </div>
                <div className='mt-4 flex items-center space-x-3'>
                  <div className='h-10 w-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 flex items-center justify-center'>
                    <span className='text-sm font-medium text-primary'>ER</span>
                  </div>
                  <div>
                    <p className='text-sm font-medium'>Emily Rodriguez</p>
                    <p className='text-xs text-muted-foreground'>Product Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Improved section padding */}
        <section id='pricing' className='w-full py-12 md:py-24 lg:py-32 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background'></div>
          <div className='container mx-auto px-4 md:px-6 relative'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mt-16 md:mt-20'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-white'>
                  Simple, Transparent Pricing
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto'>
                  Choose the plan that's right for you and start optimizing your productivity today.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 items-stretch'>
              {/* Free Plan */}
              <Card className='border-primary/20 glass-card shadow-sm transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>Free</CardTitle>
                  <CardDescription>Essential features for individuals</CardDescription>
                  <div className='mt-4 space-y-2'>
                    <div className='text-4xl font-bold'>$0</div>
                    <p className='text-muted-foreground'>Forever free</p>
                  </div>

                  {/* Button moved here, above the feature list */}
                  <div className='mt-6'>
                    <Button
                      variant='outline'
                      className='w-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300'
                    >
                      Get Started
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm mt-4'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Basic task management</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Calendar integration</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Limited AI suggestions</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Up to 5 automated workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className='border-primary/20 glass-card shadow-sm relative transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <div className='absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-gradient-to-r from-primary to-primary/80 px-3 py-1 text-xs font-semibold text-primary-foreground glow'>
                  Most Popular
                </div>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>Pro</CardTitle>
                  <CardDescription>Advanced features for professionals</CardDescription>
                  <div className='mt-4 space-y-2'>
                    <div className='text-4xl font-bold'>$9.99</div>
                    <p className='text-muted-foreground'>per month</p>
                  </div>

                  {/* Button moved here, above the feature list */}
                  <div className='mt-6'>
                    <Button className='w-full glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300'>
                      Get Started
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm mt-4'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Everything in Free</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Advanced AI task suggestions</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Unlimited automated workflows</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Priority-based scheduling</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Productivity analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Teams Plan */}
              <Card className='border-primary/20 glass-card shadow-sm transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <CardHeader>
                  <CardTitle className='text-2xl font-bold'>Teams</CardTitle>
                  <CardDescription>Powerful features for teams</CardDescription>
                  <div className='mt-4 space-y-2'>
                    <div className='text-4xl font-bold'>$19.99</div>
                    <p className='text-muted-foreground'>per user/month</p>
                  </div>

                  {/* Button moved here, above the feature list */}
                  <div className='mt-6'>
                    <Button
                      variant='outline'
                      className='w-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/50 transition-all duration-300'
                    >
                      Contact Sales
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className='space-y-2 text-sm mt-4'>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Everything in Pro</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Team collaboration features</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Shared workflows & templates</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Admin controls & permissions</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Team productivity insights</span>
                    </li>
                    <li className='flex items-center'>
                      <CheckCircle className='mr-2 h-4 w-4 text-green-500' />
                      <span>Priority support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* FAQ Section - Improved section padding */}
        <section
          id='faq'
          className='w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-primary/5 to-background relative'
        >
          <div className='absolute w-full h-full overflow-hidden'>
            <div className='absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
            <div className='absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent'></div>
          </div>
          <div className='container mx-auto px-4 md:px-6 relative'>
            {/* Added top margin to create space below the divider */}
            <div className='flex flex-col items-center justify-center space-y-4 text-center mt-16 md:mt-20'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/90'>
                  Frequently Asked Questions
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto'>
                  Everything you need to know about PLAN2DO AI.
                </p>
              </div>
            </div>
            <div className='mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2'>
              <div className='space-y-2 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <h3 className='text-xl font-bold'>How does the AI learn my preferences?</h3>
                <p className='text-muted-foreground'>
                  PLAN2DO AI analyzes your task completion patterns, the times you're most productive with certain types
                  of tasks, and your explicit feedback to continuously improve its suggestions.
                </p>
              </div>
              <div className='space-y-2 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <h3 className='text-xl font-bold'>Can I integrate with other calendar apps?</h3>
                <p className='text-muted-foreground'>
                  Yes! PLAN2DO AI integrates seamlessly with Google Calendar, Outlook, Apple Calendar, and most other
                  popular calendar applications.
                </p>
              </div>
              <div className='space-y-2 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <h3 className='text-xl font-bold'>What are automated workflows?</h3>
                <p className='text-muted-foreground'>
                  Automated workflows are sequences of tasks that are triggered automatically based on conditions you
                  set. For example, when you complete a task, the next one can be automatically scheduled.
                </p>
              </div>
              <div className='space-y-2 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <h3 className='text-xl font-bold'>Is my data secure?</h3>
                <p className='text-muted-foreground'>
                  Absolutely. We use industry-standard encryption and security practices. Your data is never sold or
                  shared with third parties, and the AI processing happens in a secure environment.
                </p>
              </div>
              <div className='space-y-2 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <h3 className='text-xl font-bold'>Can I use PLAN2DO AI offline?</h3>
                <p className='text-muted-foreground'>
                  While some basic features work offline, the AI-powered features require an internet connection to
                  function properly. Your data will sync once you're back online.
                </p>
              </div>
              <div className='space-y-2 rounded-xl border border-primary/20 glass-card p-6 transition-all duration-300 hover:glow hover:border-primary/40 hover:translate-y-[-4px]'>
                <h3 className='text-xl font-bold'>Do you offer a free trial for paid plans?</h3>
                <p className='text-muted-foreground'>
                  Yes, we offer a 14-day free trial for both our Pro and Teams plans, with no credit card required to
                  start.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Improved section padding */}
        <section className='w-full py-12 md:py-24 lg:py-32 relative'>
          <div className='absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background'></div>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none'></div>
          <div className='container mx-auto px-4 md:px-6 relative'>
            {/* Added top margin to create space below the divider */}
            <div className='flex flex-col items-center justify-center space-y-4 text-center mt-16 md:mt-20'>
              <div className='space-y-2'>
                <div className='inline-flex items-center justify-center mb-4'>
                  <Rocket className='h-8 w-8 text-primary animate-pulse' />
                </div>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-primary/90'>
                  Ready to Transform Your Productivity?
                </h2>
                <p className='max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto'>
                  Join thousands of users who have revolutionized their task management with PLAN2DO AI.
                </p>
              </div>
              <div className='mx-auto w-full max-w-sm space-y-2'>
                <form className='flex flex-col sm:flex-row gap-2'>
                  <input
                    type='email'
                    placeholder='Enter your email'
                    className='flex h-10 w-full rounded-md border border-primary/20 bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300'
                  />
                  <Button
                    type='submit'
                    className='sm:w-auto w-full glow bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group'
                  >
                    Get Started{' '}
                    <ArrowRight className='ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
                  </Button>
                </form>
                <p className='text-xs text-muted-foreground'>Free 14-day trial. No credit card required.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
