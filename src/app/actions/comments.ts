'use server'

import { revalidatePath } from 'next/cache'

// In a real app, you'd store these in a database
let comments: Comment[] = []

interface Comment {
  id: string
  author: string
  content: string
  createdAt: Date
}

export async function addComment(formData: FormData) {
  const author = formData.get('author') as string
  const content = formData.get('content') as string

  if (!author || !content) {
    return { error: 'Author and content are required' }
  }

  const newComment: Comment = {
    id: Date.now().toString(),
    author,
    content,
    createdAt: new Date(),
  }

  comments.push(newComment)
  revalidatePath('/blog/[slug]') // Adjust this path as needed
  return { success: true }
}

export async function getComments(): Promise<Comment[]> {
  return comments ?? []
}

export async function deleteComment(id: string) {
  comments = comments.filter(comment => comment.id !== id)
  revalidatePath('/blog/[slug]') // Adjust this path as needed
  return { success: true }
}

