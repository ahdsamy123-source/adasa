// "2026-01-15" -> "١٥ يناير ٢٠٢٦"
export const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" });