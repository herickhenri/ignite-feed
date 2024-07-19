import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./avatar";
import { CommentType } from "../types/post";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";
import { DeleteCommentDialog } from "./delete-comment-dialog";

interface CommentProps {
  comment: CommentType
  onRemoveComment: (id: string) => void
  isOwnerUser?: boolean
}

export function Comment({comment, onRemoveComment, isOwnerUser = false}: CommentProps) {
  const [likes, setLikes] = useState(comment.likes)
  const [showConfirmationToDeleteComment, setShowConfirmationToDeleteComment] = useState(false)

  const publishedDateFormatted = format(comment.createdAt, "dd 'de' MMMM 'às' HH:m'h'", {
    locale: ptBR,
    
  })
  const publishedAgoDateFormatted = formatDistanceToNow(comment.createdAt, {
    locale: ptBR, 
    addSuffix: true
  })

  function handleNewLike() {
    setLikes(prevLikes => prevLikes + 1)
  }

  function closeConfimationToDeleteComment() {
    setShowConfirmationToDeleteComment(false)
  }

  return (
    <div className="flex items-start gap-4">
      <Avatar
        hasBorder={false}
        src={comment.author.perfilImage}
      />

      <div className="flex-1">
        <div className="bg-gray-800 rounded-lg p-4 relative">
          {isOwnerUser && (
            <button 
              className="absolute right-4"
              title="Deletar comentário" 
              onClick={() => setShowConfirmationToDeleteComment(true)}
            >
              <Trash size={24} className="text-gray-500 cursor-pointer hover:text-red-400 transition-colors"/>
            </button>
          )}
          <strong className="text-gray-100 block">
            {comment.author.name}{' '}
            {isOwnerUser && (
              <span className="text-gray-500">(Você)</span>
            )}
          </strong>
          <time
            className="text-xs text-gray-500"
            dateTime={comment.createdAt.toString()} 
            title={publishedDateFormatted}
          >
            {publishedAgoDateFormatted}
          </time>

          <p className="mt-4">{comment.content}</p>
        </div>

        <button 
          className="mt-4 flex items-center gap-2.5 cursor-pointer text-gray-500 text-sm font-bold hover:text-gray-100 active:text-green-500"
          title="Aplaudir comentário" 
          onClick={handleNewLike}
        >
          <ThumbsUp size={20}/>
          <span>Aplaudir • {likes}</span>
        </button>
      </div>
      
      {showConfirmationToDeleteComment && (
        <DeleteCommentDialog 
          closeConfimationToDeleteComment={closeConfimationToDeleteComment}
          deleteComment={onRemoveComment}
          id={comment.id}
        />
      )}
    </div>
  )
}