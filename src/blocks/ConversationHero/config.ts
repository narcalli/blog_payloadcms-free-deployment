import type { Block } from 'payload'

export const ConversationHero: Block = {
  slug: 'conversationHero',
  interfaceName: 'ConversationHeroBlock',
  labels: {
    singular: 'Conversation hero',
    plural: 'Conversation heroes',
  },
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
      admin: {
        description:
          'The main statement at the top of the page. Short and direct works best — around six to eight words.',
      },
    },
    {
      name: 'subhead',
      type: 'textarea',
      required: true,
      maxLength: 240,
      admin: {
        description: 'One or two sentences explaining what the product does, in plain language.',
      },
    },
    {
      name: 'primaryButtonLabel',
      type: 'text',
      defaultValue: 'See a live agent',
      admin: {
        description: 'Text on the dark button. Start with a verb.',
      },
    },
    {
      name: 'primaryButtonLink',
      type: 'text',
      defaultValue: '/contact',
      admin: {
        description:
          'Where the dark button goes. Use /page-name for this site, or a full address for elsewhere.',
      },
    },
    {
      name: 'secondaryButtonLabel',
      type: 'text',
      defaultValue: 'Talk to us',
      admin: {
        description: 'Text on the outlined button. Leave empty to hide it.',
      },
    },
    {
      name: 'secondaryButtonLink',
      type: 'text',
      defaultValue: '/contact',
    },
    {
      name: 'conversationLabel',
      type: 'text',
      defaultValue: 'WhatsApp · 11:42',
      admin: {
        description:
          'The small line above the conversation. Name the channel and the customer, e.g. WhatsApp · Ayurvaid Hospitals · 11:42',
      },
    },
    {
      name: 'conversation',
      type: 'textarea',
      required: true,
      admin: {
        description:
          'One message per line. Start a line with "them:" for the customer, "us:" for the agent, and "tag:" for a small label under the last message. A line with no prefix continues the message above it.',
      },
    },
  ],
}
