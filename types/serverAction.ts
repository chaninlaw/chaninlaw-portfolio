export type ActionResult =
  | {
      success: false | null
      message: string
      fields?: Record<string, string>
      issues?: string[]
    }
  | {
      success: true | null
      message?: string
    }
