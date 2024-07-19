import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./avatar";

export function Comment() {
  return (
    <div className="flex items-start gap-4">
      <Avatar
        hasBorder={false}
        src="https://i.pinimg.com/474x/31/9d/1e/319d1e1b798ae1da876b122cf078c51b.jpg" 
      />

      <div className="flex-1">
        <div className="bg-gray-800 rounded-lg p-4 relative">
          <button title="Deletar comentário" className="absolute right-4">
            <Trash size={24} className="text-gray-500 cursor-pointer hover:text-red-400 transition-colors"/>
          </button>
          <strong className="text-gray-100 block">Devon Lane</strong>
          <time
            className="text-xs text-gray-500"
            dateTime="2024-07-18 19:35:30" 
            title="18 de julho as 22h"
          >
            Cerca de 2h    
          </time>

          <p className="mt-4">Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <div className="mt-4 flex items-center gap-2.5 cursor-pointer text-gray-500 text-sm font-bold hover:text-gray-100 transition-colors">
          <button title="Aplaudir comentário">
            <ThumbsUp size={20}/>
          </button>
          <span>Aplaudir • 33</span>
        </div>
      </div>
    </div>
  )
}