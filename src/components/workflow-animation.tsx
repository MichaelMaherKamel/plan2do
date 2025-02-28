'use client'

import { useEffect, useState } from 'react'
import { Calendar, CheckSquare, Mail, MessageSquare, Cpu, Zap } from 'lucide-react'

export function WorkflowAnimation() {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
  }, [])

  return (
    <div className='relative w-full h-full min-h-[300px] flex items-center justify-center'>
      {/* Background Glow */}
      <div
        className={`absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-0 transition-opacity duration-[2000ms] ${
          animate ? 'opacity-100' : ''
        }`}
      ></div>

      {/* Central AI Hub */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 transition-all duration-1000 z-10 ${
          animate ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}
      >
        <Cpu className='w-7 h-7 text-primary animate-pulse' />
        <Zap className='absolute w-3 h-3 text-primary/90 -right-1 -top-1 animate-pulse' />
        <div className='absolute inset-0 rounded-full bg-primary/10 animate-ping' style={{ animationDuration: '3s' }} />
      </div>

      {/* Pulsing Circle Behind Central Hub */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-primary/20 transition-all duration-1000 ${
          animate ? 'scale-100 opacity-30' : 'scale-50 opacity-0'
        }`}
        style={{
          animation: animate ? 'pulse-glow 4s ease-in-out infinite' : 'none',
        }}
      ></div>

      {/* Connecting Lines */}
      <svg className='absolute inset-0 w-full h-full' viewBox='0 0 400 300'>
        <defs>
          <linearGradient id='lineGradient' x1='0%' y1='0%' x2='100%' y2='0%'>
            <stop offset='0%' stopColor='rgba(170, 85, 255, 0.1)' />
            <stop offset='50%' stopColor='rgba(170, 85, 255, 0.5)' />
            <stop offset='100%' stopColor='rgba(170, 85, 255, 0.1)' />
          </linearGradient>
          <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'>
            <polygon points='0 0, 10 3.5, 0 7' fill='currentColor' className='text-primary/70' />
          </marker>
        </defs>

        {/* Outer Circle */}
        <circle
          cx='200'
          cy='150'
          r='80'
          fill='none'
          stroke='url(#lineGradient)'
          strokeWidth='1.5'
          strokeDasharray='8 4'
          className='opacity-30'
          style={{
            animation: animate ? 'dash 30s linear infinite' : 'none',
            transformOrigin: 'center',
          }}
        />

        {/* Animation paths */}
        <path
          d='M200 150 L100 75'
          className='stroke-primary/40'
          strokeWidth='2'
          fill='none'
          strokeDasharray='5 5'
          markerEnd='url(#arrowhead)'
          style={{
            animation: animate ? 'dash 15s linear infinite' : 'none',
            opacity: 0.7,
          }}
        />
        <path
          d='M200 150 L300 75'
          className='stroke-primary/40'
          strokeWidth='2'
          fill='none'
          strokeDasharray='5 5'
          markerEnd='url(#arrowhead)'
          style={{
            animation: animate ? 'dash 15s linear infinite' : 'none',
            opacity: 0.7,
          }}
        />
        <path
          d='M200 150 L300 225'
          className='stroke-primary/40'
          strokeWidth='2'
          fill='none'
          strokeDasharray='5 5'
          markerEnd='url(#arrowhead)'
          style={{
            animation: animate ? 'dash 15s linear infinite' : 'none',
            opacity: 0.7,
          }}
        />
        <path
          d='M200 150 L100 225'
          className='stroke-primary/40'
          strokeWidth='2'
          fill='none'
          strokeDasharray='5 5'
          markerEnd='url(#arrowhead)'
          style={{
            animation: animate ? 'dash 15s linear infinite' : 'none',
            opacity: 0.7,
          }}
        />
      </svg>

      {/* Calendar Icon */}
      <div
        className={`absolute left-[23%] top-[25%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 transition-all duration-1000 delay-100 ${
          animate ? 'scale-100 opacity-100 animate-float' : 'scale-50 opacity-0'
        }`}
        style={{ animationDelay: '0.2s' }}
      >
        <Calendar className='w-6 h-6 text-primary' />
      </div>

      {/* Tasks Icon */}
      <div
        className={`absolute left-[77%] top-[25%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 transition-all duration-1000 delay-200 ${
          animate ? 'scale-100 opacity-100 animate-float' : 'scale-50 opacity-0'
        }`}
        style={{ animationDelay: '0.4s' }}
      >
        <CheckSquare className='w-6 h-6 text-primary' />
      </div>

      {/* Email Icon */}
      <div
        className={`absolute left-[77%] top-[77%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 transition-all duration-1000 delay-300 ${
          animate ? 'scale-100 opacity-100 animate-float' : 'scale-50 opacity-0'
        }`}
        style={{ animationDelay: '0.6s' }}
      >
        <Mail className='w-6 h-6 text-primary' />
      </div>

      {/* Messages Icon */}
      <div
        className={`absolute left-[23%] top-[77%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/40 transition-all duration-1000 delay-400 ${
          animate ? 'scale-100 opacity-100 animate-float' : 'scale-50 opacity-0'
        }`}
        style={{ animationDelay: '0.8s' }}
      >
        <MessageSquare className='w-6 h-6 text-primary' />
      </div>

      {/* Data flow particles */}
      {animate &&
        Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className={`particle absolute left-1/2 top-1/2 w-${i % 2 === 0 ? '2' : '1.5'} h-${
              i % 2 === 0 ? '2' : '1.5'
            } rounded-full bg-primary`}
            style={{
              animation: `particle${(i % 4) + 1} ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.8,
            }}
          />
        ))}
    </div>
  )
}
