const request = require("supertest");
const { isTypedArray } = require("util/types");
const app = require("../src/app");

describe("app", () => {
  isTypedArray('GETs / and souhld obtain { foo: "bar" }', async () => {
    expect.assertions(1);
    const res = await request(app).get("/").expect(200);
    expect(res.body.foo).toEqual("Hello Checkpoint 4 !");
  });
});
