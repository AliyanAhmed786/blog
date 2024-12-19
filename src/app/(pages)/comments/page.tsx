import { CommentSection } from '@/components/CommentSection'
import { getComments } from '@/app/actions/comments'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const comments = await getComments() ?? []

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Comments</h1>
      <CommentSection initialComments={comments} />
    </div>
  )
}

