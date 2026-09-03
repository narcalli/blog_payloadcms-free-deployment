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
        .ncx-hero .solid{background:var(--ink);color:#fff}
        .ncx-hero .ghost{border:1px solid var(--rule);color:var(--ink)}
        .ncx-hero .thread{background:#fff;border:1px solid var(--rule);border-radius:14px;padding:24px 22px}
        .ncx-hero .thread-head{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:13px;
          color:var(--ink-soft);padding-bottom:15px;border-bottom:1px solid var(--rule);margin-bottom:18px}
        .ncx-hero .msg{max-width:82%;padding:11px 15px;border-radius:14px;font-size:16px;line-height:1.5;
          margin-bottom:11px;opacity:0;animation:ncxrise .5s ease forwards}
        .ncx-hero .them{background:var(--paper);border-bottom-left-radius:4px}
        .ncx-hero .us{background:var(--ink);color:#fff;margin-left:auto;border-bottom-right-radius:4px}
        .ncx-hero .tag{display:inline-block;font-family:"Bricolage Grotesque",system-ui,sans-serif;
          font-size:12px;color:var(--crimson);border:1px solid var(--crimson);border-radius:4px;
          padding:2px 7px;opacity:0;animation:ncxrise .5s ease forwards}
        @keyframes ncxrise{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}
        @media (prefers-reduced-motion:reduce){.ncx-hero .msg,.ncx-hero .tag{animation:none;opacity:1}}
        @media(max-width:900px){.ncx-hero{grid-template-columns:1fr;gap:40px;padding:40px 20px}}
      `}</style>

      <div>
        <h1>{headline}</h1>
        {subhead ? <p className="sub">{subhead}</p> : null}
        <div className="cta">
          {primaryButtonLabel ? (
            <a className="btn solid" href={primaryButtonLink || '#'}>
              {primaryButtonLabel}
            </a>
          ) : null}
          {secondaryButtonLabel ? (
            <a className="btn ghost" href={secondaryButtonLink || '#'}>
              {secondaryButtonLabel}
            </a>
          ) : null}
        </div>
      </div>

      <div className="thread">
        {conversationLabel ? <div className="thread-head">{conversationLabel}</div> : null}
        {lines.map((line, i) => {
          if (line.kind === 'tag') {
            return (
              <span className="tag" key={i} style={{ animationDelay: `${messageIndex * 0.7}s` }}>
                {line.text}
              </span>
            )
          }
          const delay = messageIndex * 0.7
          messageIndex += 1
          return (
            <div className={`msg ${line.kind}`} key={i} style={{ animationDelay: `${delay}s` }}>
              {line.text}
            </div>
          )
        })}
      </div>
    </section>
  )
}
