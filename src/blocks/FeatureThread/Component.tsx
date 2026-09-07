import React from 'react'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

type Props = {
  heading?: string | null
  categories?: string[] | null
  limitPerCategory?: number | null
}

const CATEGORY_LABELS: Record<string, string> = {
  'omnichannel-cx': 'Omnichannel CX',
  'knowledge-base': 'Knowledge base',
  'user-intelligence': 'User intelligence',
  integrations: 'Integrations',
}

const CATEGORY_PATHS: Record<string, string> = {
  'omnichannel-cx': '/omnichannel-cx',
  'knowledge-base': '/knowledge-base',
  'user-intelligence': '/user-intelligence',
  integrations: '/integrations',
}

export const FeatureThreadBlock: React.FC<Props> = async ({
  heading,
  categories,
  limitPerCategory,
}) => {
  const payload = await getPayload({ config: configPromise })
  const cats = categories?.length
    ? categories
    : ['omnichannel-cx', 'knowledge-base', 'user-intelligence', 'integrations']
  const limit = limitPerCategory || 1

  const groups: { category: string; items: any[] }[] = []

  for (const category of cats) {
    const result = await (payload as any).find({
      collection: 'features',
      where: { category: { equals: category }, _status: { equals: 'published' } },
      sort: 'order',
      limit,
      depth: 0,
    })
    if (result?.docs?.length) groups.push({ category, items: result.docs })
  }

  if (!groups.length) return null

  let turn = 0

  return (
    <section className="ncx-thread">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500&family=Source+Serif+4:opsz,wght@8..60,400&display=swap');
        .ncx-thread{--ink:#16203A;--ink-soft:#4A5573;--crimson:#E0245E;--rule:#DFE3EA;
          position:relative;max-width:1120px;margin:0 auto;padding:64px 32px;
          font-family:"Source Serif 4",Georgia,serif;color:var(--ink)}
        .ncx-thread h2{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-weight:500;
          font-size:34px;letter-spacing:-.025em;margin:0 0 44px}
        .ncx-thread .spine{position:relative}
        .ncx-thread .spine:before{content:"";position:absolute;left:50%;top:8px;bottom:8px;
          width:1px;background:var(--rule)}
        .ncx-thread .turn{position:relative;width:46%;margin-bottom:56px}
        .ncx-thread .turn.right{margin-left:54%}
        .ncx-thread .turn:before{content:"";position:absolute;top:12px;width:9px;height:9px;
          border-radius:50%;background:var(--crimson)}
        .ncx-thread .turn.left:before{right:-8.9%}
        .ncx-thread .turn.right:before{left:-8.9%}
        .ncx-thread .cat{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:13px;
          color:var(--crimson);margin-bottom:8px;display:block}
        .ncx-thread h3{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-weight:500;
          font-size:25px;letter-spacing:-.02em;margin:0 0 10px}
        .ncx-thread p{color:var(--ink-soft);font-size:17px;line-height:1.6;margin:0}
        .ncx-thread .more{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:15px;
          color:var(--crimson);text-decoration:none;display:inline-block;margin-top:12px;
          border-bottom:1px solid currentColor}
        @media(max-width:900px){
          .ncx-thread{padding:40px 20px}
          .ncx-thread .spine:before{left:4px}
          .ncx-thread .turn,.ncx-thread .turn.right{width:100%;margin-left:0;padding-left:30px}
          .ncx-thread .turn.left:before,.ncx-thread .turn.right:before{left:0;right:auto}
        }
      `}</style>

      {heading ? <h2>{heading}</h2> : null}

      <div className="spine">
        {groups.map((group) =>
          group.items.map((item: any) => {
            const side = turn % 2 === 0 ? 'left' : 'right'
            turn += 1
            return (
              <div className={`turn ${side}`} key={item.id}>
                <span className="cat">{CATEGORY_LABELS[group.category] || group.category}</span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <a className="more" href={CATEGORY_PATHS[group.category] || '#'}>
                  More on {(CATEGORY_LABELS[group.category] || '').toLowerCase()}
                </a>
              </div>
            )
          }),
        )}
      </div>
    </section>
  )
}
