/**
 * Format a date string to a human-readable format like "January 1, 2023"
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return "Invalid date"
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }
  
  /**
   * Calculate the number of full years passed since the given date
   */
  export function getYearsSince(dateString: string): number {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return 0
  
    const now = new Date()
    let years = now.getFullYear() - date.getFullYear()
  
    // Adjust if the date hasn't occurred yet this year
    const monthDiff = now.getMonth() - date.getMonth()
    const dayDiff = now.getDate() - date.getDate()
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      years--
    }
  
    return years
  }
  
  /**
   * Check if the date is within the last `days` days
   */
  export function isWithinDays(dateString: string, days: number): boolean {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) return false
  
    const now = new Date()
    const diffTime = now.getTime() - date.getTime()
    const diffDays = diffTime / (1000 * 60 * 60 * 24)
  
    return diffDays <= days
  }
  