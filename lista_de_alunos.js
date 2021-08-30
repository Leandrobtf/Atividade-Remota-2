let listaAlunos = ['Leandro', 'Carlos', 'Matheus', 'Gabriel', 'João', 'Lukas'];
for(let i = 0; i < listaAlunos.length; i++){
      if(i === 0)console.log(i+") Aluno "+listaAlunos[i]+" é ZERO")
      else if (i % 2 == 0)console.log(i+") Aluno "+listaAlunos[i]+" é PAR")
      else console.log(i+") Aluno "+listaAlunos[i]+" é IMPAR")
}
