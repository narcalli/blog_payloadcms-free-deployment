import type { Block } from 'payload'

export const ClosingCTA: Block = {
  slug: 'closingCta',
  interfaceName: 'ClosingCtaBlock',
  labels: { singular: 'Closing call to action', plural: 'Closing calls to action' },
  fields: [
    { name: 'heading', type: 'text', required: true, admin: { description: 'The last thing a visitor reads. Make it a clear ask.' } },
    { name: 'subhead', type: 'textarea', maxLength: 240 },
    {
      type: 'row',
      fields: [
        { name: 'primaryLabel', type: 'text', defaultValue: 'Book a demo', admin: { width: '50%' } },
        { name: 'primaryLink', type: 'text', defaultValue: '/contact', admin: { width: '50%' } },
      ],
    },
    {
      type: 'row',
      fields: [
        { name: 'secondaryLabel', type: 'text', admin: { width: '50%' } },
        { name: 'secondaryLink', type: 'text', admin: { width: '50%' } },
      ],
    },
  ],
}
