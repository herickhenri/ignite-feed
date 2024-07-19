import { PostInfo } from "../types/post"
import { users } from "./users"

const [ user1, user2 ] = users

export const postsData: PostInfo[] = [ 
  { 
    id: 'bab87bc4-d91e-4e45-a2ec-8d964b789a8e',
    author: user1,
    publishedAt: new Date('2024-07-19 08:30:22'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉jane.design/doctorcare'},
    ],
    comments: [
      {
        id: '90b9e418-fa5d-46a3-84da-3b53719fb734',
        author: user1,
        createdAt: new Date('2024-07-19 12:20:22'),
        content: 'Parabens!!',
        likes: 5,
      },
      {
        id: 'ba4dabd4-8321-4b05-9ed8-86091421d8df',
        author: user2,
        createdAt: new Date('2024-07-19 10:20:22'),
        content: 'Muito bom parabéns!',
        likes: 3,
      }
    ]
  },
  {
    id: '6db11e39-b61e-491e-830b-69363fae0493',
    author: user2,
    publishedAt: new Date('2024-07-15 10:30:22'),
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉jane.design/doctorcare'},
    ],
    comments: []
  }
]