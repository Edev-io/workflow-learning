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

  describe('Testes da Aplicação Express', () => {
    it('Deve criar um novo usuário', (done) => {
      const newUser = {
        name: 'John',
        surName: 'Doe',
        age: 30,
      };

      chai
        .request(app)
        .post('/users')
        .send(newUser)
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('id');
          expect(res.body).to.have.property('name', newUser.name);
          expect(res.body).to.have.property('surName', newUser.surName);
          expect(res.body).to.have.property('age', newUser.age);
          done();
        });
    });
  });
});
