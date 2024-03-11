import { TOTAL_SUPPLY } from '../../../constants'

export const dynamic = 'force-dynamic'

export async function GET() {
  return new Response(TOTAL_SUPPLY, {
    status: 200,
  })
}
