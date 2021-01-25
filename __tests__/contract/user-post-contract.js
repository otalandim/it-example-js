
const { userBody } = require('../../utils/bodys/user-body')
const { userSchema } = require("../../utils/schemas/user-schema")

describe('User Contract', () => {
  it('should validate json schema to user successfully', (done) => {
    request
      .post('api/users')
      .send(userBody)
    .end((err, res) => {
      joiAssert(res.body, userSchema)
      done(err)
    })  
  })
})