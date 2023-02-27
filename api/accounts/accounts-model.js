const db = require("../../data/db-config.js");

const getAll = (query) => {
  // KODLAR BURAYA
  return db("accounts").orderBy(query.sortby, query.sortdir).limit(query.limit);
};

const getById = (id) => {
  return db("accounts").where({ id }).first();
};

const getByName = (name) => {
  return db("accounts").where({ name }).first();
};

const create = (account) => {
  // KODLAR BURAYA
  return db("accounts").insert({
    name: account.name.trim(),
    budget: account.budget,
  });
};

const updateById = (id, account) => {
  // KODLAR BURAYA
  return db("accounts")
    .where({ id })
    .update({ name: account.name, budget: account.budget });
};

const deleteById = (id) => {
  // KODLAR BURAYA
  return db("accounts").where({ id }).del();
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName,
};
