import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { USER_ROLES } from "../../src/types"




describe("Login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("testar login de um usuario NORMAL", async() => {
        const input = {
            email: "normal@email.com",
            password: "bananinha"
        }
        //verificar
        const response = await userBusiness.login(input)

        const token = "token-mock-normal"

        expect(response.token).toBe(token)
    })
    test("testar login de um usuario ADMIN", async() => {
        const input = {
            email: "admin@email.com",
            password: "bananinha"
        }
        //verificar
        const response = await userBusiness.login(input)

        const token = "token-mock-admin"

        expect(response.token).toBe(token)
    })
})