
const { expect } = require('chai')
const { loginBody } = require('../../utils/bodys/login-body')

describe('Login Functional', () => {
  it('when call api of login then should returned status code 200', (done) => {
    request
      .post('api/login')
      .send(loginBody)
    .end((err, res) => {
      expect(res.status).to.be.eql(200)
      expect(res.body).to.be.not.null
      done(err)
    })  
  })
})