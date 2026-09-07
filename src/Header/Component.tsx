import { HeaderClient } from './Component.client'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import React from 'react'

export async function Header() {
  const payload = await getPayload({ config: configPromise })
  const headerData = await payload.findGlobal({ slug: 'header', depth: 2 })

  return <HeaderClient data={headerData} />
}
