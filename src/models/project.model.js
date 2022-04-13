const { connection } = require("../../db-connection");

class newProject {
  static async nameAlreadyExists(name) {
    const sql = "SELECT * FROM myproject WHERE name=?";
    const [result] = await connection.promise().query(sql, [name]);
    return result.length > 0;
  }

  static async dateAlreadyExist(dateProject) {
    const sql = "SELECT * FROM myproject WHERE dateProjet =?";
    const [result] = await connection.promise().query(sql, [dateProject]);
    return result;
  }

  static async date(dateProject) {
    const sql = "SELECT * FROM myproject=?";
    const [result] = await connection.promise().query(sql, [dateProject]);
    return result;
  }

  static findOneById(id) {
    const sql = "SELECT * FROM myproject WHERE id=?";
    return connection.promise().query(sql, [id]);
  }

  static findOneByName(name) {
    const sql = "SELECT * FROM myproject WHERE name=?";
    return connection.promise().query(sql, [name]);
  }

  static createOne(newProject) {
    const sql = "INSERT INTO myproject SET ?";
    return connection.promise().query(sql, [newProject]);
  }
}

module.exports = newProject;
