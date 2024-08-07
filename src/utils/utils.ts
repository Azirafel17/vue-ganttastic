export const capitalisize = (str: string) => {
  return str.replace(/(.*?\. )|(.*?\.)/g, (match) => {
    return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase()
  })
}
