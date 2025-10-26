import '@testing-library/jest-dom'
import React from 'react'

// Mock next/image
global.React = React

// Mock next/link
// jest.mock('next/link', () => {
//   return ({ children, href }: any) => {
//     return React.createElement('a', { href }, children)
//   }
// })

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: 'div',
    section: 'section',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    p: 'p',
    span: 'span',
  },
  AnimatePresence: ({ children }: any) => children,
}))