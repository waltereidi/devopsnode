const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('deve retornar mensagem padrão', async () => {
    const res = await request(app).get('/');

    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('🚀 Node rodando no Docker!');
  });
});