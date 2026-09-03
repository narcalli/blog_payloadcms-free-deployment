import clsx from 'clsx'
import React from 'react'

interface Props {
  className?: string
  loading?: 'lazy' | 'eager'
  priority?: 'auto' | 'high' | 'low'
}

export const Logo = (props: Props) => {
  const { className } = props

  return (
    <span className={clsx('ncx-logo', className)}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700&display=swap');
        .ncx-logo{display:inline-flex;align-items:center;gap:9px;
          font-family:"Bricolage Grotesque",system-ui,sans-serif;font-weight:700;
          font-size:20px;letter-spacing:-.02em;color:#16203A;line-height:1}
        .ncx-logo .pin{width:20px;height:20px;flex:0 0 20px;
          border-radius:50% 50% 50% 2px;background:#E0245E;transform:rotate(-45deg)}
      `}</style>
      <span className="pin" aria-hidden="true" />
      NeuronCx
    </span>
  )
}
