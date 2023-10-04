export const isNotBlank = (value: string | null | undefined) => {
  return value !== null && value !== undefined && value.trim().length > 0
}