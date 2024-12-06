/*************************************************************************************************************************************************************************************************
 * Objetivo: criar uma aplicação Back-End para monitorar dados dos seus alunos pela escola
 * Data: 27/11/2024
 * Autor: Fabricio Camargo
 * Versao: 1.0
 *********************************************************************************************************************************************************************************************************/


var listaAlunos = require ("./alunos")
// console.log(moduloFuncoes1)

var cursoAlunos = require ('./cursos')
// console.log(moduloFuncoes2)

const getListaDeCursos = function() {
    let cursosEncontrados = {}
    let cursos = []
    let status = false

    cursoAlunos.cursos.forEach(function(item){
    status = true
    cursos.push(item)
   })
   cursosEncontrados.cursos = cursos

    if(status == true){
        return cursosEncontrados
    }else{
        return status
    }
}

// console.log(getListaDeCursos())

const getAlunosMatriculados = function() {
    let status = false
    let alunos = []
    let alunosEncontrados = {}

    listaAlunos.alunos.forEach(function(item){
        status = true
        alunos.push(item)
    })
    alunosEncontrados.alunos = alunos

    if(status == true){
        return alunosEncontrados
    }else{
        return status
    }
}

// console.log(getAlunosMatriculados())

const getAlunoMatricula = function(numeroMatricula){
    let status = false 
    let matricula = Number(numeroMatricula)
    let alunosEncontrados = {}

    listaAlunos.alunos.forEach(function(item){
        if(Number(item.matricula) == matricula){
            status = true
            alunosEncontrados.aluno = item
        }
    })
    if(status == true){
        return alunosEncontrados
    }else{
        return status
    }
}

console.log(getAlunoMatricula())

const getAlunosCursos = function (siglaCurso){
    let status = false
    let curso = String(siglaCurso).toUpperCase()
    let cursoAlunos = {}
    let alunosCurso = []

    listaAlunos.alunos.forEach(function(item){
        item.curso.forEach(function(item2){
            if(String(item2.sigla).toUpperCase() == curso){
                status = true
                alunosCurso.push(item)
                // alunosCurso.push(item2)
            }
        })

        cursoAlunos.alunos = alunosCurso
    })
    // console.log(cursoAlunos.alunos[0].curso[0])
    if(status == true){
        return cursoAlunos
        
    }else{
        return status
    }
}

// console.log(getAlunosCursos('rds'))

const getAlunoStatus = function (alunoStatus){
    let status = false
    let statusA = String(alunoStatus).toUpperCase()
    let alunosS = {}
    let listaAlunos = []

    listaAlunos.alunos.forEach(function(item){
        if(String(item.status).toUpperCase() == statusA){
            status = true

            listaAlunos.push(item)
        }

        alunosS.alunoStatus = listaAlunos
    })
    if(status == true){
        return alunosS
        
    }else{
        return status
    }
}

// console.log(getAlunoStatus('cursando'))

const getDisciplinaStatus = function (curso, disciplinaStatus){
    let status = false
    let nomeCurso = String(curso).toUpperCase()
    let cursoAlunosStatus = {}
    let alunosCurso = []
    let alunosStatus = []

    let statusD = String(disciplinaStatus).toUpperCase()

    listaAlunos.alunos.forEach(function(item){
            item.curso.forEach(function(item2){
                if(String(item2.sigla).toUpperCase() == nomeCurso){
                    item2.disciplinas.forEach(function(item3){
                        if(String(item3.status).toUpperCase() == statusD){
                            status = true
                            alunosStatus.push(item3)
                        }
                    })
                    alunosCurso.push(item)
                }
                alunosCurso.push(alunosStatus)
            })
            // cursoAlunosStatus = alunosCurso
        })
    if(status == true){
        // return cursoAlunosStatus
        return alunosCurso
        
    }else{
        return status
    }
}
console.log(getDisciplinaStatus('rds', 'exame'))

module.exports={
    getListaDeCursos,
    getAlunosMatriculados,
    getAlunoMatricula,
    getAlunosCursos,
    getAlunoStatus
}
