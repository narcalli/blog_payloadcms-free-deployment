import React from 'react'

type Props = {
  heading?: string | null
  subhead?: string | null
  primaryLabel?: string | null
  primaryLink?: string | null
  secondaryLabel?: string | null
  secondaryLink?: string | null
}

export const ClosingCtaBlock: React.FC<Props> = ({
  heading, subhead, primaryLabel, primaryLink, secondaryLabel, secondaryLink,
}) => (
  <section className="ncx-closing">
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap');
      .ncx-closing{--ink:#1A1A2E;--crimson:#C62828;background:var(--ink);color:#fff;
        font-family:Inter,Arial,sans-serif}
      .ncx-closing .inner{max-width:1120px;margin:0 auto;padding:72px 32px;text-align:center}
      .ncx-closing h2{font-family:Poppins,Arial,sans-serif;font-weight:500;
        font-size:clamp(30px,3.8vw,42px);letter-spacing:-.03em;margin:0 auto;max-width:20ch;line-height:1.1}
      .ncx-closing p{color:#9AA5BF;margin:18px auto 0;max-width:56ch;font-size:18px;line-height:1.6}
      .ncx-closing .cta{margin-top:34px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap}
      .ncx-closing .btn{font-family:Poppins,Arial,sans-serif;font-size:15px;
        font-weight:500;padding:12px 22px;border-radius:6px;text-decoration:none;display:inline-block}
      .ncx-closing .solid{background:var(--crimson);color:#fff}
      .ncx-closing .ghost{border:1px solid rgba(255,255,255,.28);color:#fff}
      @media(max-width:900px){.ncx-closing .inner{padding:52px 20px}}
    `}</style>
    <div className="inner">
      <h2>{heading}</h2>
      {subhead ? <p>{subhead}</p> : null}
      {primaryLabel || secondaryLabel ? (
        <div className="cta">
          {primaryLabel ? <a className="btn solid" href={primaryLink || '#'}>{primaryLabel}</a> : null}
          {secondaryLabel ? <a className="btn ghost" href={secondaryLink || '#'}>{secondaryLabel}</a> : null}
        </div>
      ) : null}
    </div>
  </section>
)
