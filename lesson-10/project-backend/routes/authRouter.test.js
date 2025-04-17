import request from "supertest";

import app from "../app.js";

import User from "../db/models/User.js";

const {PORT = 3000} = process.env;
const port = Number(PORT);

describe("test /api/auth/signup", ()=> {
    let server = null;
    beforeAll(()=> {
        server = app.listen(port);
    })

    afterAll(()=> {
        server.close();
    })

    // afterEach(async ()=> {
    //     await User.destroy()
    // })

    test("test signup with correct data", async ()=> {
        const signupData = {
            username: "User",
            email: "user@gmail.com",
            password: "123456"
        };

        const {status, body} = await request(app).post("/api/auth/signup").send(signupData);
        expect(status).toBe(201);

        expect(body.username).toBe(signupData.username);
        expect(body.email).toBe(signupData.email);

        const user = await User.findOne({
            where: {
                email: signupData.email
            }
        });

        expect(user).toBeTruthy();

        await User.destroy({
            where: {
                email: signupData.email
            }
        })
    });
})