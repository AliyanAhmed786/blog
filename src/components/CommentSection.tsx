'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { addComment, getComments } from '@/app/actions/comments'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DeleteCommentButton } from "./DeleteCommentButton"

interface Comment {
  id: string
  author: string
  content: string
  createdAt: Date
}

export function CommentSection({ initialComments = [] }: { initialComments?: Comment[] }) {
  const [comments, setComments] = useState<Comment[]>(initialComments ?? [])
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    const result = await addComment(formData)
    if (result.success) {
      const updatedComments = await getComments()
      setComments(updatedComments)
      router.refresh()
    }
  }

  const handleDeleteComment = (id: string) => {
    setComments(comments.filter(comment => comment.id !== id))
  }

  return (
    <div className="space-y-8">
      <Card className='p-4'>
        <CardHeader>
          <CardTitle>Leave a comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-4">
            <Input name="author" placeholder="Your name" required />
            <Textarea name="content" placeholder="Your comment" required />
            <Button type="submit">Submit Comment</Button>
          </form>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <Card className='p-3' key={comment.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-sm font-medium">{comment.author}</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {new Date(comment.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <DeleteCommentButton 
                    commentId={comment.id} 
                    onDelete={() => handleDeleteComment(comment.id)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className='mx-7'>{comment.content}</p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  )
}

