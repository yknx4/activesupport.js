export function detectIndentation (input: string): string {
  if (input.startsWith(' ')) {
    return ' '
  }
  if (input.startsWith('\t')) {
    return '\t'
  }
  const firstSpaceIndex = input.indexOf(' ')
  const firstTabIndex = input.indexOf('\t')

  const tabIsMissing = firstTabIndex === -1
  const spaceIsMissing = firstSpaceIndex === -1
  const bothAreMissing = tabIsMissing && spaceIsMissing

  if (bothAreMissing || tabIsMissing) {
    return ' '
  }
  if (spaceIsMissing || firstTabIndex > firstSpaceIndex) {
    return '\t'
  }
  return ' '
}
