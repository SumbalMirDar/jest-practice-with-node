const request = require('supertest');
const app = require('../app');

describe('GET /api/greet', () => {
  it('should return a greeting message', async () => {
    const res = await request(app).get('/api/greet');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, world!');
  });
});

describe('POST /api/echo', () => {
  it('should return the same message that was sent', async () => {
    const message = 'Hello, Jest!';
    const res = await request(app).post('/api/echo').send({ message });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', message);
  });
});
