
const { loginBody } = require('../../utils/bodys/login-body')
const { loginSchema } = require('../../utils/schemas/login-schema')

describe('Login Contract', () => {
  it('should validate json schema to log in successfully ', (done) => {
    request
      .post('api/login')
      .send(loginBody)
    .end((err, res) => {
      joiAssert(res.body, loginSchema);
      done(err)
    })  
  })
})