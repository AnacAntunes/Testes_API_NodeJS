import supertest from "supertest";
const request = supertest("https://reqres.in/api/");
const expect = require("chai").expect;

describe("DELETE users", ()=>{
    it("Excluir usuário", ()=>{
        return request.delete("users/7").then((response)=>{
            expect(response.body).to.have.empty
        })
    })
})