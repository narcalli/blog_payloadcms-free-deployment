import React from 'react'

type LogoItem = {
  name?: string | null
  logo?: any
  scale?: number | null
  id?: string | null
}

type Props = {
  label?: string | null
  heading?: string | null
  intro?: string | null
  logos?: LogoItem[] | null
}

export const LogoWallBlock: React.FC<Props> = ({ label, heading, intro, logos }) => {
  const items = (logos || []).filter((l) => l?.logo && typeof l.logo === 'object' && l.logo.url)
  if (!items.length) return null

  return (
    <section className="ncx-logowall">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500&family=Source+Serif+4:opsz,wght@8..60,400&display=swap');
        .ncx-logowall{--ink:#16203A;--soft:#4A5573;--crimson:#E0245E;--violet:#6E5BF2;
          --rule:#E4E7F0;--mist:#F7F8FC;
          background:var(--mist);border-top:1px solid var(--rule);border-bottom:1px solid var(--rule);
          padding:56px 0;font-family:"Source Serif 4",Georgia,serif;color:var(--ink);text-align:center}
        .ncx-logowall .inner{max-width:1120px;margin:0 auto;padding:0 32px}
        .ncx-logowall .label{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-size:14px;
          margin:0 0 12px;background:linear-gradient(90deg,var(--crimson),var(--violet));
          -webkit-background-clip:text;background-clip:text;color:transparent}
        .ncx-logowall h2{font-family:"Bricolage Grotesque",system-ui,sans-serif;font-weight:500;
          font-size:32px;letter-spacing:-.025em;margin:0}
        .ncx-logowall .intro{color:var(--soft);margin:12px auto 0;max-width:60ch;font-size:17px}
        .ncx-logowall .grid{margin-top:40px;display:grid;
          grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:36px 24px;align-items:center}
        .ncx-logowall .cell{display:flex;align-items:center;justify-content:center;height:44px}
        .ncx-logowall img{width:auto;max-width:150px;object-fit:contain;display:block;
          filter:grayscale(1);opacity:.7;mix-blend-mode:multiply;transition:opacity .2s,filter .2s}
        .ncx-logowall img:hover{filter:none;opacity:1}
        @media(max-width:900px){.ncx-logowall{padding:40px 0}
          .ncx-logowall .inner{padding:0 20px}
          .ncx-logowall .grid{gap:28px 18px}
          .ncx-logowall .cell{height:36px}}
      `}</style>

      <div className="inner">
        {label ? <p className="label">{label}</p> : null}
        {heading ? <h2>{heading}</h2> : null}
        {intro ? <p className="intro">{intro}</p> : null}

        <div className="grid">
          {items.map((l, i) => {
            const pct = typeof l.scale === 'number' && l.scale > 0 ? l.scale : 100
            return (
              <div className="cell" key={l.id || i}>
                <img
                  src={l.logo.url}
                  alt={l.name || l.logo.alt || ''}
                  loading="lazy"
                  style={{ height: `${pct}%`, maxHeight: '100%' }}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
