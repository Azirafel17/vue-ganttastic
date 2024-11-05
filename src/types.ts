import type { CSSProperties } from "vue"

export type GanttBarObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
  ganttBarConfig: {
    id: string
    label?: string
    html?: string
    hasHandles?: boolean
    immobile?: boolean
    bundle?: string
    pushOnOverlap?: boolean
    dragLimitLeft?: number
    dragLimitRight?: number
    style?: CSSProperties
    class?: string
  }
}

export type TypeView = "hour" | "day" | "date" | "month" | "week"
export type TypeViewExtend = TypeView | "year"
export const typeView: TypeView[] = ["date", "day", "hour", "month", "week"]

export type DisplayFormats = Record<TypeViewExtend, string>
