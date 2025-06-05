/**
 * Extracts and returns capitalized initials from a full name string.
 */
export function getInitials(name: string): string {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }
  
  /**
   * Truncates text to a specified length if necessary.
   */
  export function truncateText(text: string, maxLength: number): string {
    if (typeof text !== "string" || typeof maxLength !== "number" || maxLength <= 0) return ""
    return text.length <= maxLength ? text : text.slice(0, maxLength) + "..."
  }
  
  /**
   * Cleans and formats phone numbers into +X (XXX) XXX-XXXX format.
   */
  export function formatPhoneNumber(phone: string): string {
    if (typeof phone !== "string") return phone
    const cleaned = phone.replace(/\D/g, "")
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/)
    return match ? `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}` : phone
  }
  
  /**
   * Generates a placeholder avatar image URL with initials and size query parameters.
   */
  export function getPlaceholderAvatar(name: string, size: number = 200): string {
    const initials = getInitials(name) || "?"
    return `/placeholder.svg?height=${size}&width=${size}&text=${encodeURIComponent(initials)}`
  }
  