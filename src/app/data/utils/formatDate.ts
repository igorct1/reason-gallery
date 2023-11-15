import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(data: Date) {
  return formatDistanceToNow(data, {
    addSuffix: true,
    locale: ptBR,
  })
}
