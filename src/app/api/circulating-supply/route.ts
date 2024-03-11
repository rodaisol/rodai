import { CIRCULATING_SUPPLY } from '../../../constants'

export const dynamic = 'force-dynamic'

export async function GET() {
  return new Response(CIRCULATING_SUPPLY, {
    status: 200,
  })
}
