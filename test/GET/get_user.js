import supertest from "supertest";
const request = supertest("https://reqres.in/api/*");
const expect = require("chai").expect;

const users = "users?page=2";

describe("GET users", () =>{
    
    it("Buscar lista de usuários", () => {
        return request.get(users).then((response) => {
            // Validando que não está vazio
            expect(response.body.data).to.be.not.empty
            console.log(response.body);    
        });
    });
    
    it("Buscar usuário especifico", () => {
        return request.get(users).then((response) => {
            response.body.data.map((res) => {
            //console.log(res.name);
            expect(response.body.data.map((user) => user.name)).to.include("chili pepper")
            });
        });
    });
});