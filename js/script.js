console.log('Olá pessoas');

const Lista = {
    usuario: [
        {
            // username: 'lemuel santana',
            username
        }
    ],

    tarefas: [
        {
            // content: 'testandoooo',
            // autor: 'lemuel santana',
            // id: 1
            content,
            autor,
            id
        }
    ],
};



//CREATE
function criaTarefa(dados) {
    Lista.tarefas.push({
        id: Lista.tarefas.length + 1,
        content: dados.content,
        autor: dados.autor
    });
}
criaTarefa({autor: 'lemuel', content: 'Segundo tweet'});
criaTarefa({autor: 'lemuel', content: 'Terceiro tweet'});
console.log(Lista.tarefas)



//READ
function pegaTarefas() {
    return Lista.tarefas;
}
console.log(pegaTarefas())




//UPDATE
function atualizaTarefa(id, novoConteudo) {
    const tarefaQueSeraAtualizada = pegaTarefas().find((tarefa) => {
        return tarefa.id === id;
    });
    console.log(tarefaQueSeraAtualizada)
    tarefaQueSeraAtualizada.content = novoConteudo
}
atualizaTarefa(1, 'nova tarefaaaa')
console.log(pegaTarefas())


//DELETE
function apagaTarefa(id) {
    const listaDeTarefasAtualizadas = pegaTarefas().filter((tarefaAtual) => {
        return tarefaAtual.id !== id;
    })
    Lista.tarefas = listaDeTarefasAtualizadas;
}
apagaTarefa(1);
console.log(pegaTarefas());