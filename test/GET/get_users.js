import supertest from "supertest";
const request = supertest("https://reqres.in/api/");
const expect = require("chai").expect;

const users = "users?page=2";

describe("GET users", () => {

    it("Buscar lista de usuários", () => {
        return request.get(users).then((response) => {
            // Validando que não está vazio
            expect(response.body.data).to.be.not.empty
            //console.log(response.body);
        });
    });

    it("Buscar usuário especifico", () => {
        return request.get(users).then((response) => {
            response.body.data.map((res) => {
                //console.log(res.first_name);
                expect(response.body.data.map((user) => user.first_name)).to.include("Lindsay")
            });
        });
    });
});

describe('Validar campos do usuário', () => {
    it('Validar campo nome', () => {
        return request.get('users/8').then((response) => {
            //console.log((response.body))
            expect(response.body.data).to.have.a.property('first_name')
            expect(response.body.data.first_name).to.have.eq("Lindsay")
        })
    })

    it('Validar campo email', () => {
        return request.get('users/8').then((response) => {
            expect(response.body.data).to.have.a.property('email')
            expect(response.body.data.email).to.have.eq("lindsay.ferguson@reqres.in")
        })
    })

    it('Validar campo support', () => {
        return request.get('users/8').then((response) => {
            expect(response.body.support.text).to.have.eq('To keep ReqRes free, contributions towards server costs are appreciated!')
        })
    })
})