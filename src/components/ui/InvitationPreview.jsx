const previewThemes = {
  wedding: {
    bg: '#fff7ed',
    accent: '#c2410c',
    soft: '#fed7aa',
    title: 'Sofía & Mateo',
    date: '12.10.2026',
    line: 'Ceremonia y recepción',
  },
  xv: {
    bg: '#fdf2f8',
    accent: '#be185d',
    soft: '#fbcfe8',
    title: 'Mis XV',
    date: 'Valentina',
    line: 'Una noche para brillar',
  },
  baptism: {
    bg: '#eff6ff',
    accent: '#2563eb',
    soft: '#bfdbfe',
    title: 'Bautizo',
    date: 'Mateo',
    line: 'Con amor y bendición',
  },
}

function WeddingArt({ theme }) {
  return (
    <>
      <circle cx="86" cy="95" r="34" fill={theme.soft} />
      <circle cx="134" cy="95" r="34" fill="none" stroke={theme.accent} strokeWidth="4" />
      <path d="M58 58 C72 34 104 34 118 58" fill="none" stroke={theme.accent} strokeWidth="3" />
      <path d="M62 68 C82 49 107 49 126 68" fill="none" stroke={theme.accent} strokeWidth="2" />
      <circle cx="54" cy="60" r="5" fill={theme.accent} />
      <circle cx="132" cy="66" r="5" fill={theme.accent} />
      <path d="M42 78 C48 68 58 68 64 78" fill="none" stroke={theme.accent} strokeWidth="2" />
    </>
  )
}

function XvArt({ theme }) {
  return (
    <>
      <path d="M110 36 L122 64 L153 66 L129 86 L138 116 L110 99 L82 116 L91 86 L67 66 L98 64 Z" fill={theme.soft} stroke={theme.accent} strokeWidth="3" />
      <text x="110" y="84" textAnchor="middle" className="fill-current text-[26px] font-bold" style={{ color: theme.accent }}>XV</text>
      <circle cx="62" cy="50" r="5" fill={theme.accent} />
      <circle cx="158" cy="110" r="6" fill={theme.accent} />
      <path d="M52 128 C76 112 96 112 120 128 C140 140 154 140 170 128" fill="none" stroke={theme.accent} strokeWidth="3" />
    </>
  )
}

function BaptismArt({ theme }) {
  return (
    <>
      <rect x="101" y="35" width="18" height="86" rx="9" fill={theme.soft} />
      <rect x="71" y="65" width="78" height="18" rx="9" fill={theme.soft} />
      <path d="M74 126 C88 108 102 106 110 126 C118 106 132 108 146 126" fill="none" stroke={theme.accent} strokeWidth="4" strokeLinecap="round" />
      <path d="M58 142 C82 154 138 154 162 142" fill="none" stroke={theme.accent} strokeWidth="3" strokeLinecap="round" />
      <circle cx="110" cy="74" r="35" fill="none" stroke={theme.accent} strokeWidth="3" />
    </>
  )
}

const artByType = {
  wedding: WeddingArt,
  xv: XvArt,
  baptism: BaptismArt,
}

export function InvitationPreview({ type = 'wedding', eventType }) {
  const theme = previewThemes[type] ?? previewThemes.wedding
  const Art = artByType[type] ?? WeddingArt

  return (
    <div className="overflow-hidden rounded-lg border border-ink-900/10 bg-white shadow-soft">
      <svg
        viewBox="0 0 220 320"
        role="img"
        aria-label={`Vista previa de invitación para ${eventType}`}
        className="h-full w-full"
      >
        <rect width="220" height="320" fill={theme.bg} />
        <rect x="16" y="16" width="188" height="288" rx="18" fill="#ffffff" />
        <rect x="28" y="28" width="164" height="264" rx="14" fill={theme.bg} />
        <circle cx="34" cy="38" r="42" fill={theme.soft} />
        <circle cx="184" cy="280" r="54" fill={theme.soft} />
        <g>
          <Art theme={theme} />
        </g>
        <text x="110" y="184" textAnchor="middle" className="fill-current text-[12px] font-semibold uppercase tracking-[0.24em]" style={{ color: theme.accent }}>
          {eventType}
        </text>
        <text x="110" y="220" textAnchor="middle" className="fill-current font-serif text-[27px] font-semibold" style={{ color: '#1f1f1f' }}>
          {theme.title}
        </text>
        <text x="110" y="247" textAnchor="middle" className="fill-current text-[16px] font-semibold" style={{ color: theme.accent }}>
          {theme.date}
        </text>
        <text x="110" y="272" textAnchor="middle" className="fill-current text-[11px]" style={{ color: '#52525b' }}>
          {theme.line}
        </text>
      </svg>
    </div>
  )
}
