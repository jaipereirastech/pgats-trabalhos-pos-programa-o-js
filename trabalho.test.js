import {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
} from './trabalho.js';

test('geradorDeTagsDeIdentificacao deve retornar nome em maiúsculas', () => {
  expect(geradorDeTagsDeIdentificacao('bob')).toBe('BOB');
});

test('verificarSePodeSerAdotado deve retornar true para idade 1 e porte M', () => {
  expect(verificarSePodeSerAdotado(1, 'M')).toBe(true);
});

test('calcularConsumoDeRacao deve calcular corretamente', () => {
  expect(calcularConsumoDeRacao('bob', 2, 10)).toBe(3000);
});

test('decidirTipoDeAtividadePorPorte deve retornar corretamente por porte', () => {
  expect(decidirTipoDeAtividadePorPorte('médio')).toBe('passeios curtos');
});

test('buscarDadoAsync deve retornar "Pipoca"', async () => {
  await expect(buscarDadoAsync()).resolves.toBe('Pipoca');
});
