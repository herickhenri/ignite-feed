import { useState } from "react";
import { Header } from "./components/header";
import { Post } from "./components/post";
import { Sidebar } from "./components/sidebar";
import { PostInfo } from "./types/post";
import { postsData } from "./data/posts";
import { users } from "./data/users";

export function App() {
  const [posts] = useState<PostInfo[]>(postsData)

  const ownerUser = users.find(user => user.owner)

  if(!ownerUser) {
    return (
      <div className="flex h-screen justify-center items-center">
        <h1>Nenhum usuário logado!!</h1>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="items-start grid md:grid-cols-[256px_1fr] grid-cols-1 justify-center gap-8 px-4 mx-auto mt-8 mb-36">
        <Sidebar user={ownerUser}/>
        <div className="flex-1 space-y-8 max-w-2xl">
          {posts.map(post => (
            <Post 
              key={post.id} 
              post={post} 
              ownerUser={ownerUser}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 