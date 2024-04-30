import { publicPaths } from '@/lib/paths'
import { revalidatePath } from 'next/cache'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const path = searchParams.get('path')
  if (!path) {
    return new Response('No path provided', { status: 404 })
  }

  if (!publicPaths.includes(path as any)) {
    return new Response(`Path: ${path} not found`, { status: 404 })
  }

  revalidatePath(path)
  return new Response(`Revalidated ${path}`, { status: 200 })
}
