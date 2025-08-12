import type React from "react"
import { cn } from "@/lib/utils"

type SectionProps = {
  crosses?: boolean
  className?: string
  children: React.ReactNode
}

export default function Section({ crosses = false, className, children }: SectionProps) {
  return (
    <section className={cn("relative w-full", crosses && "isolate overflow-hidden", className)}>
      {crosses && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
            color: "#0a0a0a",
          }}
        />
      )}
      {children}
    </section>
  )
}
