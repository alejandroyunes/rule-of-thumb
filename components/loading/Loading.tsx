import React from 'react'
import stylex from '@stylexjs/stylex';

export default function Loading() {
  return (
    <div {...stylex.props(s.loadingWrapper)}>
      <div {...stylex.props(s.loadingContent)} />
    </div>
  )
}

const spin = stylex.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
})

const s = stylex.create({
  loadingWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 20,
    borderRadius: 8,
    backgroundColor: '#3483FA',
    zIndex: 100,
  },
  loadingContent: {
    borderStyle: 'solid',
    borderWidth: 16,
    borderColor: '#f3f3f3',
    borderTopColor: '#3483FA',
    borderTopWidth: 16,
    borderTopStyle: 'solid',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animationName: spin,
    animationIterationCount: 'infinite',
    animationDuration: '2s',
    animationTimingFunction: 'linear',
  }
})
