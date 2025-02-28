export default function Background() {
  return (
    <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
      {/* Main backdrop gradients */}
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-radial from-primary/5 via-background to-background opacity-80'></div>

      {/* Abstract gradient orbs */}
      <div className='absolute top-1/4 left-1/4 w-[30rem] h-[30rem] rounded-full bg-primary/5 blur-[100px]'></div>
      <div className='absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] rounded-full bg-primary/3 blur-[80px]'></div>
      <div className='absolute top-3/4 left-1/2 w-[20rem] h-[20rem] rounded-full bg-primary/4 blur-[60px]'></div>

      {/* Starry background effect */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb)/0.08)_0.5px,transparent_0.5px)] bg-[length:24px_24px]'></div>

      {/* Grid lines */}
      <div className='absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--primary-rgb)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--primary-rgb)/0.03)_1px,transparent_1px)] bg-[size:60px_60px]'></div>
    </div>
  )
}
