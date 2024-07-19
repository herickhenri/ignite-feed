import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { CommentType, PostInfo } from "../types/post";
import { Avatar } from "./avatar";
import { Comment } from "./comment";
import { FormEvent, useState } from "react";
import { User } from "../types/user";
import { v4 as uuidv4 } from "uuid";

interface PostProps {
  post: PostInfo
  ownerUser: User
}

export function Post({ post, ownerUser }: PostProps) {
  const [commentInput, setCommentInput] = useState('')
  const [comments, setComments] = useState<CommentType[]>(post.comments || [])

  function removeComment(id: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => comment.id !== id )
    setComments(commentsWithoutDeleteOne)
  }

  function handleFormNewComment(event: FormEvent) {
    event.preventDefault()

    setComments(prevComments => ([{
      author: ownerUser, 
      content: commentInput, 
      createdAt: new Date(), 
      id: uuidv4(),
      likes: 0,
    }, ...prevComments]))

    setCommentInput('')
  }

  const publishedDateFormatted = format(post.publishedAt, "dd 'de' MMMM 'às' HH:m'h'", {
    locale: ptBR,
    
  })
  const publishedAgoDateFormatted = formatDistanceToNow(post.publishedAt, {
    locale: ptBR, 
    addSuffix: true
  })

  const isNewCommentEmpty = commentInput.length === 0

  return (
    <article className="space-y-6 bg-gray-900 rounded-lg p-10">
      <header className="flex items-center gap-4">
          <Avatar src={post.author.perfilImage} />
          <div className="flex-1">
            <strong className="text-gray-100 block">{post.author.name}</strong>
            <span className="text-gray-500 text-sm">{post.author.rule}</span>
          </div>
        <time 
          className="text-sm text-gray-500"
          title={publishedDateFormatted} 
          dateTime={post.publishedAt.toString()}
        >
          {publishedAgoDateFormatted}
        </time>
      </header>

      <div className="space-y-6">
        {post.content.map(({content, type}) => {
          if (type === 'paragraph') {
            return <p key={content}>{content}</p>
          }
          if(type === 'link') {
            return <p key={content} className="font-bold text-green-500"><a href="">{content}</a></p>
          }
        })}
      </div>

      <div className="h-px w-full bg-gray-800"/>

      <form className="space-y-4 group" onSubmit={handleFormNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          className="min-h-24 p-4 w-full resize-none rounded-lg bg-gray-950 focus:outline-double focus:outline-green-500"
          placeholder="Insira seu comentário"
          required
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
        />
        <div className="sr-only group-focus-within:not-sr-only">
          <button 
            className="mt-2 flex items-center gap-2.5 rounded-lg py-4 px-6 font-bold bg-green-600 hover:bg-green-500 text-white transition-colors disabled:cursor-not-allowed disabled:bg-green-500/50"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </div>
      </form>

      {comments.map(comment => (
          <Comment 
            key={comment.id} 
            comment={comment} 
            onRemoveComment={removeComment}
            isOwnerUser={comment.author.owner}
          />
      ))}
    </article>
  )
}