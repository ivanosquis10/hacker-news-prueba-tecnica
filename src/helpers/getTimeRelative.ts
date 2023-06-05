const DATE_UNITS: Record<string, number> = {
  year: 31536000,
  month: 2629800,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1
} as const

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export const getTimeRelative = (epochTime: number) => {
  const started = new Date(epochTime * 1000).getTime() // cuando empezo
  const now = new Date().getTime() // el ahora

  const elapsed = (started - now) / 1000 // numero de segundos que han pasado

  for (const unit in DATE_UNITS) {
    const absoluteElapse = Math.abs(elapsed) // obtenemos el valor absoluto

    if (absoluteElapse > DATE_UNITS[unit] || unit === 'second') {
      return rtf.format(
        Math.floor(elapsed / DATE_UNITS[unit]),
        unit as Intl.RelativeTimeFormatUnit
      )
    }
  }

  return ''
}
