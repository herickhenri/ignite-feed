import { Header } from "./components/header";
import { Post } from "./components/post";
import { Sidebar } from "./components/sidebar";

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="items-start grid md:grid-cols-[256px_1fr] grid-cols-1 justify-center gap-8 px-4 mx-auto mt-8 mb-36">
        <Sidebar />
        <div className="flex-1 space-y-8 max-w-2xl">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  )
} 