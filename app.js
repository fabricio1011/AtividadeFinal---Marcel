// import das bibliotecas
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

// iniciando o express
const app = express()

app.use((request, response, next) =>{
   response.header('Access-Control-Allow-Origin', '*')
   response.header('Access-Control-Allow-Methods', 'GET')
   app.use(cors())

   next()
})

const cursosAlunos = require('./modulo/Api.js')

app.get('/v1/lion-school/cursos',cors(), async function (request,response){
   let dados = cursosAlunos.getListaDeCursos()

   if(dados){
       response.status(200)
       response.json(dados)
   }else{
       response.status(404)
       response.json({'status': 404, 'message': 'Não foi possível encontrar resultados'})
   }
})

app.get('/v1/lion-school/alunos',cors(), async function (request,response){
   let dados = cursosAlunos.getAlunosMatriculados()

   if(dados){
       response.status(200)
       response.json(dados)
   }else{
       response.status(404)
       response.json({'status': 404, 'message': 'Não foi possível encontrar resultados'})
   }
})

//endpoint para retornar uma lista filtrada pelo status do curso
app.get('/v1/lion-school/alunos/filtro', cors(), async function (request,response){

   let status = request.query.status

   let dados = cursosAlunos.getAlunoStatus(status)    

   
   if(dados){
       response.status(200)
       response.json(dados)
   }else{
       response.status(404)
       response.json({'status': 404, 'message': 'Não foi possível encontrar resultados'})
   }
})

//endpoint para retornar os dados do aluno filtrado pela matricula
app.get('/v1/lion-school/alunos/:matricula', cors(), async function (request,response){
  
   let matricula = request.params.matricula

   let dados = cursosAlunos.getAlunoMatricula(matricula)

   if(dados){
       response.status(200)
       response.json(dados)
   }else{
       response.status(404)
       response.json({'status': 404, 'message': 'Não foi possível encontrar resultados'})
   }
})

//endpoint para retornar uma lista dos alunos de um curso, filtrado pela sigla do curso
app.get('/v1/lion-school/alunos/cursos/:sigla', cors(), async function (request,response){
  
   let sigla = request.params.sigla

   let dados = cursosAlunos.getAlunosCursos(sigla)

   if(dados){
       response.status(200)
       response.json(dados)
   }else{
       response.status(404)
       response.json({'status': 404, 'message': 'Não foi possível encontrar resultados'})
   }
})



app.listen('8080', function(){
   console.log('API funcionando e aguardadndo requisições')
})
