const request = require("supertest")
const expect = require("chai").expect
const URL = "https://reqres.in/"

describe('Login', () => {
  it('should do to log in', (done) => {
    request(URL)
      .get("api/users?page=2")
    .end((err, res) => {
      expect(res.status).to.be.eql(200);
      done()
    })  
  })

  it('should do to log in', (done) => {
    request(URL)
      .get("api/users/2")
    .end((err, res) => {
      expect(res.status).to.be.eql(200);
      done()
    })  
  })
})