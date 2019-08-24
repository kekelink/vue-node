import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Future'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
