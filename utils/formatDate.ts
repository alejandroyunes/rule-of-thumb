import { formatDistanceToNow } from 'date-fns'

export function formatDateDistanceToNow(dateString: string) {
  const formattedDate = formatDistanceToNow(new Date(dateString), { addSuffix: true })
  return formattedDate;
}
