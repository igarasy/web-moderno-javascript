/* A função callback que passamos para o forEach recebe 3 parametros 
(nome do elemento ou valor associado ao indice percorrido, indice do elemento, array do elemento) */

const aprovados = ['Agatha', 'Aldo' ,'Daniel', 'Raquel']

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
