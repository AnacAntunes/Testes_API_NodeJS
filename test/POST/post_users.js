import supertest from "supertest";
const request = supertest("https://reqres.in/api/");
const expect = require("chai").expect;

describe('POST users', () => {
    const data = {}
    it('Criar usuário', () => {
        return request
        .post('users')
        .send(data).then((response) => {

            //console.log(response.body)
            //console.log(response.statusCode)

            expect(response.statusCode).to.have.eq(201);           
            expect(response.body).to.have.a.property("createdAt");
        });
    });
});