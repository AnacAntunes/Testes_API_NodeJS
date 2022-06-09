import supertest from "supertest";
const request = supertest("https://reqres.in/api/");
const expect = require("chai").expect;


describe('PUT users', () => {
    it('Atualizar usuário', () => {
        return request.put('users/2').then((response)=>{
            //console.log(response.body)
            expect(response.statusCode).to.have.eq(200)
            expect(response.body).to.have.a.property('updatedAt')
        })
    })
})