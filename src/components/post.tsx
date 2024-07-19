import { Avatar } from "./avatar";
import { Comment } from "./comment";

export function Post() {
  return (
    <article className="space-y-6 bg-gray-900 rounded-lg p-10">
      <header className="flex items-center gap-4">
          <Avatar src="https://www.github.com/ximeen.png" />
          <div className="flex-1">
            <strong className="text-gray-100 block">Erick Henrique</strong>
            <span className="text-gray-500 text-sm">Web Development</span>
          </div>
        <time 
          className="text-sm text-gray-500"
          title="18 de julho às 13:25" 
          dateTime="2024-07-18 13:25:22"
        >
          Publicado há 1h
        </time>
      </header>

      <div className="space-y-6">
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="" className="font-bold text-green-500">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="" className="font-bold text-green-500">
            #novoprojeto 
            #nlw 
            #rocketseat
          </a>
        </p>
      </div>

      <div className="h-px w-full bg-gray-800"/>

      <form className="space-y-4 group">
        <strong>Deixe seu feedback</strong>

        <textarea 
          className="min-h-24 p-4 w-full resize-none rounded-lg bg-gray-950 focus:outline-double focus:outline-green-500"
        />
        <div className="sr-only group-focus-within:not-sr-only">
          <button className="mt-2 flex items-center gap-2.5 rounded-lg py-4 px-6 font-bold bg-green-600 hover:bg-green-500 text-white transition-colors">
          Publicar
          </button>
        </div>
      </form>

      <Comment/>
      <Comment/>
      <Comment/>
      <Comment/>
    </article>
  )
}