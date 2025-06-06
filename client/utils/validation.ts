// double code
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-$$$$]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 10
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}


export function validateRequired(value: string): boolean {
  return value.trim().length > 0
}


export function validateMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength
}
