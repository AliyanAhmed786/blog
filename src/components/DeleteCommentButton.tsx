'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Trash2 } from 'lucide-react'
import { deleteComment } from '@/app/actions/comments'

interface DeleteCommentButtonProps {
  commentId: string
  onDelete: () => void
}

export function DeleteCommentButton({ commentId, onDelete }: DeleteCommentButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    const result = await deleteComment(commentId)
    if (result.success) {
      onDelete()
    }
    setIsDeleting(false)
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleDelete}
      disabled={isDeleting}
    >
      <Trash2 className="h-4 w-4" />
      <span className="sr-only">Delete comment</span>
    </Button>
  )
}

