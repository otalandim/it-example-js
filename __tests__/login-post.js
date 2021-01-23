const request = require("supertest")
const expect = require("chai").expect
const URL = "https://reqres.in/"
const endpoint = "api/users?page=2"

describe('Login', () => {
  it('should do to log in', (done) => {
    request(URL)
      .get(endpoint)
    .end((err, res) => {
      expect(res.status).to.be.eql(200);
      done()
    })  
  })
})