const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Testes da Aplicação Express', () => {
  it('Deve retornar uma mensagem "Hello, World!"', (done) => {
    chai
      .request(app)
      .get('/')

      .end((err, res) => {
        expect(res.text).to.equal('Hello, World!');
        done();
      });
  });
});
