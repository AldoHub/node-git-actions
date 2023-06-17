const app = require('./../app');
const supertest = require('supertest');
const request = supertest(app);

//simple test for the posts endpoint
describe("test main route endpoint", () => {
    it("should return a response", async() => {
        const response = await request.get("/");
        expect(response.status).toBe(200);
        expect(response.body.data).toBeDefined();
    })
});
