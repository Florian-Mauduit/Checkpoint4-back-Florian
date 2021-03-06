const { rejects } = require("assert");
const { afterAll } = require("jest-circus");
const { resolve } = require("path");
const { closeConnection } = require("../db-connection");
const server = require("../src");

const closeApp = () =>
  new Promise((resolve, reject) => {
    server.close((err) => {
      if (err) reject(err);
      else resolve();
    });
  });

afterAll(async () => {
  await closeConnection();
  await closeApp();
});
