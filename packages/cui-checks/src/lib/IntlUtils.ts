export function isUnitSupportedByLocale(locale: string, unit: string) {
  try {
    let format = new Intl.NumberFormat(locale, {
      style: 'unit',
      unit
    });

    return format;
  } catch {
    return null;
  }
}

export function isUnitSupported(locale: string, unit: string): boolean {
  try {
    const displayNames = new Intl.DisplayNames([locale], { type: 'unit' as any });
    const result = displayNames.of(unit);
    return typeof result === 'string'; // existe tradução
  } catch {
    return false;
  }
}
