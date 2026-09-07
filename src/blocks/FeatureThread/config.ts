import type { Block } from 'payload'

export const FeatureThread: Block = {
  slug: 'featureThread',
  interfaceName: 'FeatureThreadBlock',
  labels: {
    singular: 'Feature thread',
    plural: 'Feature threads',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      admin: {
        description: 'Optional heading above the section. Leave empty for no heading.',
      },
    },
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      defaultValue: ['omnichannel-cx', 'knowledge-base', 'user-intelligence', 'integrations'],
      options: [
        { label: 'Omnichannel CX', value: 'omnichannel-cx' },
        { label: 'Knowledge base', value: 'knowledge-base' },
        { label: 'User intelligence', value: 'user-intelligence' },
        { label: 'Integrations', value: 'integrations' },
      ],
      admin: {
        description:
          'Which categories to show, in this order. Published features in each category appear automatically, sorted by their order number.',
      },
    },
    {
      name: 'limitPerCategory',
      type: 'number',
      defaultValue: 1,
      admin: {
        description:
          'How many features to show from each category. Use 1 for the home page summary, or a higher number for a full listing.',
      },
    },
  ],
}
