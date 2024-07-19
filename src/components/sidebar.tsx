import { PencilSimpleLine } from "@phosphor-icons/react";
import { Avatar } from "./avatar";
import { User } from "../types/user";

interface SidebarProps {
  user: User
}

export function Sidebar({ user }: SidebarProps) {
  return (
    <aside className="max-h-max rounded-lg overflow-hidden bg-gray-900">
      {user.banner ? (
        <img src={user.banner} className="w-full h-20 object-cover"/>
      ) : (
        <div className="w-full h-20 bg-gray-800"/>
      )}

      <div className="-mt-7 mb-6 text-center flex flex-col items-center gap-4">
        <Avatar src={user.perfilImage} />
        <div>
          <strong className="text-gray-100 block">{user.name}</strong>
          <span className="text-gray-500 text-sm">{user.rule}</span>
        </div>

        <div className="bg-gray-800 h-px w-full"/>

        <button className="flex items-center gap-2.5 rounded-lg border border-green-500 py-4 px-6 text-green-500 font-bold hover:bg-green-600 hover:border-green-600 hover:text-white transition-colors">
          <PencilSimpleLine size={20}/>
          Editar seu perfil
        </button>
      </div>
    </aside>
  )
}