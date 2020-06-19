const db = require("../database/dbConfig")

module.exports = {
    add,
    findby,
};

async function add(user) {
    await db("users").insert(user)
    return findby(user);
}

function findby(filter) {
    return db("users").select("*").where(filter);
}