import React from 'react'

type Props = {
  headline?: string | null
  subhead?: string | null
  primaryButtonLabel?: string | null
  primaryButtonLink?: string | null
  secondaryButtonLabel?: string | null
  secondaryButtonLink?: string | null
  conversationLabel?: string | null
  conversation?: string | null
}

type Line = { kind: 'them' | 'us' | 'tag'; text: string }

function parseConversation(input: string): Line[] {
  const lines: Line[] = []

  input.split('\n').forEach((raw) => {
    const line = raw.trim()
    if (!line) return

    const match = line.match(/^(them|us|tag)\s*:\s*(.*)$/i)

    if (match) {
      const kind = match[1].toLowerCase() as Line['kind']
      lines.push({ kind, text: match[2] })
      return
    }

    if (lines.length > 0) {
      lines[lines.length - 1].text += ' ' + line
    } else {
      lines.push({ kind: 'them', text: line })
    }
  })

  return lines
}

export const ConversationHeroBlock: React.FC<Props> = ({
  headline,
  subhead,
  primaryButtonLabel,
  primaryButtonLink,
  secondaryButtonLabel,
  secondaryButtonLink,
  conversationLabel,
  conversation,
}) => {
  const lines = parseConversation(conversation || '')
  let messageIndex = 0

  return (
    <section className="ncx-hero">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500&family=Source+Serif+4:opsz,wght@8..60,400&display=swap');
        .ncx-hero{--ink:#16203A;--ink-soft:#4A5573;--paper:#F6F7F9;--crimson:#E0245E;--rule:#DFE3EA;
          display:grid;grid-template-columns:1.05fr .95fr;gap:72px;align-items:center;
          max-width:1120px;margin:0 auto;padding:64px 32px 56px;
          font-family:"Source Serif 4",Georgia,serif;color:var(--ink)}
        .ncx-hero h1{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-weight:500;
          font-size:clamp(36px,4.6vw,58px);line-height:1.04;letter-spacing:-.035em;max-width:15ch;margin:0}
        .ncx-hero .sub{margin:24px 0 0;font-size:19px;line-height:1.6;color:var(--ink-soft);max-width:46ch}
        .ncx-hero .cta{margin-top:32px;display:flex;gap:12px;flex-wrap:wrap}
        .ncx-hero .btn{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:15px;font-weight:500;
          padding:10px 18px;border-radius:6px;text-decoration:none;display:inline-block}
        .ncx-hero
