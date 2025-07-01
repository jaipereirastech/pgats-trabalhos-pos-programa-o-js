// trabalho.js

// Função 1: geradorDeTagsDeIdentificacao
function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

// Função 2: verificarSePodeSerAdotado
function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

// Função 3: calcularConsumoDeRacao
function calcularConsumoDeRacao(nome, idade, peso) {
  return peso * 300;
}

// Função 4: decidirTipoDeAtividadePorPorte
function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    médio: 'passeios curtos',
    grande: 'exercícios ao ar livre'
  };
  return atividades[porte] || 'atividade desconhecida';
}

// Função 5: buscarDadoAsync
async function buscarDadoAsync() {
  return 'Pipoca';
}

// Exportando as funções
export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};

console.log("Funcionando! 🚀");


