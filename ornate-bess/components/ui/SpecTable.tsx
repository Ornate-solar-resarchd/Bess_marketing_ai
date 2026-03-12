"use client"

import { motion } from "framer-motion"

interface SpecTableProps {
  specs: Record<string, unknown>
  title?: string
}

function formatValue(value: unknown): string {
  if (value === null || value === undefined) {
    return "-"
  }

  if (typeof value === "string" || typeof value === "number") {
    return String(value)
  }

  if (typeof value === "boolean") {
    return value ? "Yes" : "No"
  }

  if (Array.isArray(value)) {
    return value.join(", ")
  }

  if (typeof value === "object") {
    return "[Object]"
  }

  return String(value)
}

function SpecRow({
  label,
  value,
  isOdd,
  isNested = false,
}: {
  label: string
  value: unknown
  isOdd: boolean
  isNested?: boolean
}) {
  const bgClass = isOdd ? "bg-slate-800/40" : "bg-slate-900/40"

  if (typeof value === "object" && value !== null && !Array.isArray(value)) {
    // Nested object - render as sub-table
    const nestedEntries = Object.entries(value as Record<string, unknown>)

    return (
      <>
        <tr className={`${bgClass} border-b border-slate-700/30`}>
          <td className={`px-4 py-3 text-sm font-semibold text-slate-300 ${isNested ? "pl-8" : ""}`}>
            {label}
          </td>
          <td className="px-4 py-3 text-sm text-slate-400">[Object with {nestedEntries.length} properties]</td>
        </tr>
        {nestedEntries.map(([nestedKey, nestedValue], idx) => (
          <SpecRow
            key={nestedKey}
            label={nestedKey}
            value={nestedValue}
            isOdd={!isOdd}
            isNested={true}
          />
        ))}
      </>
    )
  }

  return (
    <tr className={`${bgClass} border-b border-slate-700/30 hover:bg-slate-800/60 transition-colors`}>
      <td className={`px-4 py-3 text-sm font-semibold text-slate-300 ${isNested ? "pl-8" : ""}`}>
        {label}
      </td>
      <td className="px-4 py-3 text-sm text-slate-100 font-medium">
        {formatValue(value)}
      </td>
    </tr>
  )
}

export function SpecTable({ specs, title }: SpecTableProps) {
  const entries = Object.entries(specs)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {title && (
        <h3 className="text-xl font-bold text-white mb-4 font-orbitron">
          {title}
        </h3>
      )}

      <div className="overflow-x-auto rounded-lg border border-slate-700/30">
        <table className="w-full">
          <thead>
            <tr className="bg-gradient-to-r from-green-600/30 to-green-600/10 border-b border-green-500/30">
              <th className="px-4 py-3 text-left text-sm font-bold text-green-300 uppercase tracking-wider">
                Specification
              </th>
              <th className="px-4 py-3 text-left text-sm font-bold text-green-300 uppercase tracking-wider">
                Value
              </th>
            </tr>
          </thead>
          <tbody>
            {entries.map(([key, value], idx) => (
              <SpecRow
                key={key}
                label={key}
                value={value}
                isOdd={idx % 2 === 0}
              />
            ))}
          </tbody>
        </table>
      </div>

      {entries.length === 0 && (
        <div className="text-center py-8 text-slate-400">
          No specifications available
        </div>
      )}
    </motion.div>
  )
}
