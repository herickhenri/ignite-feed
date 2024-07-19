interface DeleteCommentDialogProps {
  closeConfimationToDeleteComment: () => void,
  deleteComment: (id: string) => void,
  id: string,
}

export function DeleteCommentDialog({ closeConfimationToDeleteComment, deleteComment, id }: DeleteCommentDialogProps) {
  return (
    <div className="z-10 fixed inset-0 bg-black/75 flex justify-center items-center text-center">
      <div className="bg-gray-900 rounded-lg py-6 px-20 flex flex-col gap-6 items-center">
        <strong className="text-2xl text-gray-100">Excluir comentário</strong>
        <p>Você tem certeza que gostaria de excluir este comentário?</p>

        <div className="flex items-center gap-2">
          <button 
            className="py-3 px-8 text-gray-100 text-sm font-bold hover:text-gray-300 transition-colors"
            onClick={closeConfimationToDeleteComment}  
          >
            Cancelar
          </button>
          <button 
            className="py-3 px-8 rounded-lg bg-gray-800 text-red-400 text-sm font-bold hover:bg-opacity-50 transition-all"
            onClick={() => deleteComment(id)}
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  )
}