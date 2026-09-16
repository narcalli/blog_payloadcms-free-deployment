import type { Block } from 'payload'

export const LogoWall: Block = {
  slug: 'logoWall',
  interfaceName: 'LogoWallBlock',
  labels: {
    singular: 'Logo Wall',
    plural: 'Logo Walls',
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      label: 'Small label above the heading',
      admin: {
        description: 'Short and plain, e.g. "Trusted by". Leave empty to hide.',
      },
    },
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'intro',
      type: 'textarea',
      label: 'Intro line',
      admin: {
        description: 'One or two sentences. Leave empty to hide.',
      },
    },
    {
      name: 'logos',
      type: 'array',
      label: 'Logos',
      minRows: 1,
      maxRows: 12,
      admin: {
        description:
          'Use transparent PNG or SVG files. Logos with a solid background will show as a coloured box.',
        initCollapsed: true,
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Client name',
          admin: {
            description: 'Used as the image alt text, for accessibility and SEO.',
          },
        },
        {
          name: 'logo',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Logo file',
        },
        {
          name: 'scale',
          type: 'number',
          label: 'Size adjustment (%)',
          defaultValue: 100,
          min: 50,
          max: 200,
          admin: {
            description:
              'Leave at 100 unless this logo looks too big or small next to the others. Round crests usually need 130–150; wide wordmarks sometimes need 80.',
          },
        },
      ],
    },
  ],
}
