const icons = {
  list: (
    <>
      <path d="M40 64h176M40 128h176M40 192h176" />
    </>
  ),
  caretDown: <path d="M64 96l64 64 64-64" />,
  caretUp: <path d="M64 160l64-64 64 64" />,
  envelopeSimple: (
    <>
      <rect x="32" y="56" width="192" height="144" rx="16" />
      <path d="M32 72l96 64 96-64" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M64 192L192 64" />
      <path d="M128 64h64v64" />
    </>
  ),
  arrowCircleRight: (
    <>
      <circle cx="128" cy="128" r="96" />
      <path d="M120 96l32 32-32 32" />
      <path d="M96 128h56" />
    </>
  ),
  arrowCircleUpRight: (
    <>
      <circle cx="128" cy="128" r="96" />
      <path d="M96 160l64-64" />
      <path d="M112 96h48v48" />
    </>
  ),
  githubLogo: (
    <>
      <path d="M208 104c0 24-7 43-22 57-17 16-41 24-70 24-29 0-53-8-71-24-14-13-21-31-21-54 0-18 6-34 19-48 3-12-1-26-10-42-3-4-5-7-6-10 0-3 1-6 3-9 2-3 5-5 8-6 3-1 7-1 11 1 13 5 25 13 34 24 14-4 29-6 45-6 16 0 31 2 45 6 9-11 21-19 34-24 4-2 8-2 11-1 3 1 6 3 8 6 2 3 3 6 3 9-1 3-3 6-6 10-9 16-13 30-10 42 13 14 19 30 19 48Z" />
      <path d="M96 176c0 8 4 16 32 24 28-8 32-16 32-24" />
    </>
  ),
  linkedinLogo: (
    <>
      <rect x="36" y="36" width="184" height="184" rx="16" />
      <path d="M96 104v64M96 80v2M128 168v-36c0-16 10-26 24-26s22 10 22 26v36" />
    </>
  ),
  fileText: (
    <>
      <path d="M64 40h104l40 40v128a8 8 0 0 1-8 8H64a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8Z" />
      <path d="M168 40v40h40" />
      <path d="M96 112h64M96 144h64M96 176h40" />
    </>
  ),
  stack: (
    <>
      <path d="M64 88l64-40 64 40-64 40Z" />
      <path d="M40 120l88 56 88-56" />
    </>
  ),
  storefront: (
    <>
      <path d="M48 104l-14-48h188l-14 48" />
      <path d="M34 104a22 22 0 0 0 44 0M178 104a22 22 0 0 0 44 0" />
      <path d="M56 104v112M128 104v112M200 104v112" />
      <path d="M48 216h160" />
    </>
  ),
  videoCamera: (
    <path d="M40 80h120a16 16 0 0 1 16 16v16l40-24v80l-40-24v16a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16Z" />
  ),
  gridFour: (
    <>
      <rect x="40" y="40" width="72" height="72" rx="12" />
      <rect x="144" y="40" width="72" height="72" rx="12" />
      <rect x="40" y="144" width="72" height="72" rx="12" />
      <rect x="144" y="144" width="72" height="72" rx="12" />
    </>
  ),
  heartbeat: <path d="M32 128h40l16-32 24 64 16-32h96" />,
  scales: (
    <>
      <path d="M128 40v24" />
      <path d="M40 64h176" />
      <path d="M56 64l-16 96c0 13 11 24 24 24s24-11 24-24L72 64" />
      <path d="M200 64l-16 96c0 13 11 24 24 24s24-11 24-24l-16-96" />
      <path d="M128 64v104" />
      <path d="M96 208h64" />
    </>
  ),
  trophy: (
    <>
      <path d="M64 40h128v24a64 64 0 0 1-64 64 64 64 0 0 1-64-64Z" />
      <path d="M56 48H32a16 16 0 0 0 16 32" />
      <path d="M200 48h24a16 16 0 0 1-16 32" />
      <path d="M128 128v28" />
      <path d="M96 184h64M96 208h64M128 176v32" />
    </>
  ),
  briefcase: (
    <>
      <rect x="32" y="72" width="192" height="112" rx="16" />
      <path d="M104 72V48a8 8 0 0 1 8-8h32a8 8 0 0 1 8 8v24" />
      <path d="M32 120h192" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M128 24l96 32v56c0 72-52 108-96 120-44-12-96-48-96-120V56Z" />
      <path d="M88 128l28 28 52-56" />
    </>
  ),
  shieldWarning: (
    <>
      <path d="M128 24l96 32v56c0 72-52 108-96 120-44-12-96-48-96-120V56Z" />
      <path d="M128 96v40" />
      <circle cx="128" cy="164" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  bug: (
    <>
      <path d="M128 96c-10-2-20 0-28 6-10-4-24-2-30 8-6 10 0 22 8 28v16c0 14 10 26 24 28 8 16 18 22 26 22s18-6 26-22c14-2 24-14 24-28v-16c8-6 14-18 8-28-6-10-20-12-30-8-8-6-18-8-28-6Z" />
      <path d="M96 104l-24-12M160 104l24-12M96 168l-20 16M160 168l20 16M96 136l-24 8M160 136l24 8" />
      <path d="M104 72c4-8 14-12 24-12s20 4 24 12" />
    </>
  ),
  bugBeetle: (
    <>
      <path d="M128 104c-14 0-28 4-36 14-8-2-18 0-24 6-8 8-6 20 2 26v14c0 12 8 22 20 26 8 16 20 22 38 22s30-6 38-22c12-4 20-14 20-26v-14c8-6 10-18 2-26-6-6-16-8-24-6-8-10-22-14-36-14Z" />
      <path d="M128 84V72M104 72l-4-8M152 72l4-8M84 128L56 112M172 128l28-16M84 168l-24 8M172 168l24 8" />
      <path d="M128 128v40" />
    </>
  ),
  terminal: (
    <>
      <rect x="32" y="64" width="192" height="128" rx="16" />
      <path d="M80 112l32 24-32 24" />
      <path d="M128 152h48" />
    </>
  ),
  code: (
    <>
      <path d="M96 72L40 128l56 56" />
      <path d="M160 72l56 56-56 56" />
    </>
  ),
  cpu: (
    <>
      <rect x="80" y="80" width="96" height="96" rx="16" />
      <rect x="104" y="104" width="48" height="48" rx="8" />
      <path d="M128 40v40M128 176v40M40 128h40M176 128h40" />
    </>
  ),
  database: (
    <>
      <ellipse cx="128" cy="56" rx="80" ry="24" />
      <path d="M48 56v144c0 13 36 24 80 24s80-11 80-24V56" />
      <path d="M48 128c0 13 36 24 80 24s80-11 80-24" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M112 96c-18 10-32 28-32 48a48 48 0 0 0 96 0c0-16-8-30-20-40" />
      <path d="M104 128a24 24 0 0 0 48 0M120 128a8 8 0 0 0 16 0" />
      <path d="M96 96c-22 18-36 46-36 76M128 56c-30 0-56 26-56 56" />
    </>
  ),
  brain: (
    <>
      <path d="M72 100c-8-14-26-16-36-6-8 8-8 20-2 28-10 4-16 14-12 24 4 8 14 12 24 10 4 10 14 16 26 14h4c8 0 16-4 20-12v-58Z" />
      <path d="M184 100c8-14 26-16 36-6 8 8 8 20 2 28 10 4 16 14 12 24-4 8-14 12-24 10-4 10-14 16-26 14h-4c-8 0-16-4-20-12v-58Z" />
      <path d="M128 96v72" />
    </>
  ),
  crown: (
    <>
      <path d="M40 160L64 72l56 48 8-64 8 64 56-48 24 88Z" />
      <path d="M40 160h176" />
    </>
  ),
  crownSimple: (
    <>
      <path d="M40 160l32-72 56 24 56-24 32 72Z" />
      <path d="M40 160h176" />
    </>
  ),
  rocketLaunch: (
    <>
      <path d="M112 48c6-14 12-20 16-22 4 2 10 8 16 22l52 14c-2-14-8-24-16-30-2 8-8 14-16 18 0-10-4-18-12-24 4 8 4 16 0 24l-24-2Z" />
      <path d="M128 62c-24 16-48 44-60 80-2 6 2 12 8 12 14 2 28 4 40 8" />
      <path d="M96 96l-32 32M160 96l32 32M96 128l-20 40M160 128l20 40M128 168v32" />
    </>
  ),
  sparkle: (
    <>
      <path d="M128 40c4 20 20 36 40 40-20 4-36 20-40 40-4-20-20-36-40-40 20-4 36-20 40-40Z" />
      <path d="M188 56c2 12 10 20 22 22-12 2-20 10-22 22-2-12-10-20-22-22 12-2 20-10 22-22Z" />
    </>
  ),
  image: (
    <>
      <rect x="40" y="56" width="176" height="144" rx="16" />
      <circle cx="104" cy="104" r="20" />
      <path d="M56 176l48-48 32 32 24-24 40 40" />
    </>
  ),
  info: (
    <>
      <circle cx="128" cy="128" r="96" />
      <path d="M128 104v64" />
      <circle cx="128" cy="72" r="3" fill="currentColor" stroke="none" />
    </>
  ),
  lockKey: (
    <>
      <rect x="64" y="96" width="128" height="88" rx="16" />
      <path d="M88 96V80a40 40 0 0 1 80 0v16" />
      <circle cx="128" cy="132" r="10" />
      <path d="M128 142v14" />
    </>
  ),
  palette: (
    <>
      <path d="M128 40a88 88 0 1 0 88 88c0-16-12-28-28-28h-24a12 12 0 0 1-12-12V76c0-20-10-36-24-36Z" />
      <circle cx="88" cy="96" r="4" fill="currentColor" stroke="none" />
      <circle cx="168" cy="96" r="4" fill="currentColor" stroke="none" />
      <circle cx="88" cy="160" r="4" fill="currentColor" stroke="none" />
      <circle cx="136" cy="152" r="4" fill="currentColor" stroke="none" />
    </>
  ),
  robot: (
    <>
      <rect x="72" y="112" width="112" height="80" rx="16" />
      <path d="M128 112V88" />
      <circle cx="128" cy="80" r="8" />
      <circle cx="100" cy="140" r="8" fill="currentColor" stroke="none" />
      <circle cx="156" cy="140" r="8" fill="currentColor" stroke="none" />
      <path d="M72 168h112" />
      <path d="M96 192v8M160 192v8" />
    </>
  ),
  globe: (
    <>
      <circle cx="128" cy="128" r="96" />
      <path d="M32 128h192" />
      <ellipse cx="128" cy="128" rx="44" ry="96" />
      <path d="M128 32c-40 40-40 152 0 192M128 32c40 40 40 152 0 192" />
    </>
  ),
  downloadSimple: (
    <>
      <path d="M128 40v104" />
      <path d="M88 104l40 40 40-40" />
      <path d="M56 168h144" />
    </>
  ),
  network: (
    <>
      <circle cx="128" cy="56" r="24" />
      <circle cx="52" cy="132" r="24" />
      <circle cx="204" cy="132" r="24" />
      <path d="M128 80L76 112M128 80l52 32" />
    </>
  ),
  linux: (
    <>
      <path d="M88 88c-8-10-12-22-12-34 0-8 2-14 8-20 4 8 10 14 20 16l-4 18c-4 2-8 8-12 20Z" />
      <path d="M168 88c8-10 12-22 12-34 0-8-2-14-8-20-4 8-10 14-20 16l4 18c4 2 8 8 12 20Z" />
      <path d="M128 104c-22 0-40 18-40 40 0 22 18 40 40 40s40-18 40-40c0-22-18-40-40-40Z" />
      <path d="M112 136c4 4 10 6 16 6s12-2 16-6" />
      <circle cx="116" cy="128" r="3" fill="currentColor" stroke="none" />
      <circle cx="140" cy="128" r="3" fill="currentColor" stroke="none" />
      <path d="M128 184v24M104 208h48" />
    </>
  ),
}

export default function AppIcon({ name, size = 16, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill="none"
      stroke="currentColor"
      strokeWidth={16}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name] ?? null}
    </svg>
  )
}
