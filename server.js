const express = require('express')

const posts = [
  {
    id: 1,
    descricao: 'uma foto teste',
    imagem: 'https://placecats.com/millie/300/150'
  },
  {
    id: 2,
    descricao: 'Gato fazendo yoga',
    imagem: 'https://placekitten.com/400/200'
  },
  {
    id: 4,
    descricao: 'Paisagem incrível',
    imagem: 'https://picsum.photos/seed/picsum/200/300'
  },
  {
    id: 5,
    descricao: 'Cachorro sorrindo',
    imagem: 'https://place.dog/400/300'
  },
  {
    id: 6,
    descricao: 'Comida deliciosa',
    imagem: 'https://loremflickr.com/320/240/food'
  },
  {
    id: 7,
    descricao: 'Cidade à noite',
    imagem: 'https://source.unsplash.com/random/300x200/?city,night'
  }
]

const app = express()

const port = 3000
app.use(express.json())

app.listen(port, () => {
  console.log('Servidor funcionando na porta 3000')
  console.log(`http://localhost:${port}`)
})

function BuscarPostporId(id) {
  return posts.findIndex(post => {
    return post.id == Number(id)
  })
}

app.get('/api/posts', (req, res) => {
  res.status(200).json(posts)
})

app.get('/api/posts/post/:id', (req, res) => {
  const index = BuscarPostporId(req.params.id)
  res.status(200).json(posts[index])
})
