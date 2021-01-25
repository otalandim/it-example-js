const supertest = require('supertest')
const Joi = require("joi")
const joiAssert = require("joi-assert")
const chai = require('chai')

global.request = supertest('https://reqres.in/')
global.expect = chai.expect
global.Joi = Joi
global.joiAssert = joiAssert