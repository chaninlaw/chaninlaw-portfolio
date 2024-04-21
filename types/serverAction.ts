export type ActionResult =
  | {
      success: false
      message: string
      fields?: Record<string, string>
      issues?: string[]
    }
  | {
      success: true
    }
