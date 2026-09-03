'use client'

import React from 'react'
import Link from 'next/link'
import type { Header as HeaderType } from '@/payload-types'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="ncx-nav">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500&display=swap');
        .ncx-nav{display:flex;align-items:center;gap:26px;
          font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:15px;font-weight:500}
        .ncx-nav a{color:#4A5573;text-decoration:none;white-space:nowrap}
        .ncx-nav a:hover{color:#16203A}
      `}</style>
      {navItems.map(({ link }, i) => {
        const href =
          link?.type === 'reference' &&
          typeof link?.reference?.value === 'object' &&
          link?.reference?.value?.slug
            ? `${link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''}/${link.reference.value.slug}`
            : link?.url

        if (!href) return null

        return (
          <Link key={i} href={href} {...(link?.newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {})}>
            {link?.label}
          </Link>
        )
      })}
    </nav>
  )
}
