import { TOTAL_EXISTING_SUPPLY } from '../../../constants'

export const dynamic = 'force-dynamic'

export async function GET() {
  return new Response(TOTAL_EXISTING_SUPPLY, {
    status: 200,
  })
}
