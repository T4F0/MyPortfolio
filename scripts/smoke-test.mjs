import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import React from 'react'

const server = await createServer({ server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const html = renderToString(React.createElement(App))
  const checks = [
    'Selloum Abdelmoncef',
    'Have an idea worth building?',
    'What Is Banner Grabbing?',
    'Kodikos',
    'IngeHack',
    'Ingeneer',
    'ECSEL Expo',
    'Nafass',
    'Mu7ami',
    'Full-Stack Applications',
    'Privilege Escalation',
    'A clear path from idea to launch',
    '@selloum-dev on GitHub',
    '© 2026. Built with intent.',
    'Leadership in Action',
    'By the numbers',
  ]
  const missing = checks.filter((c) => !html.includes(c))
  console.log('render length:', html.length)
  console.log('missing:', missing.length ? missing : 'none')
} finally {
  await server.close()
}
