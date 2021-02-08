module.exports = app => {
    const sales = require("../controllers/db.controllers");
    // const sales = require("../controllers/db.controller.js");
    let router = require("express").Router();

    router.post("/", sales.create); // Create a new Collection
    router.get("/", sales.findAll);  // Retrieve all Collections
    router.get("/:id", sales.findOne);  // Retrieve a single Collection with id
    router.put("/:id", sales.update);  // Update a Collection with id
    router.delete("/:id", sales.delete);  // Delete a Collection with id
    router.delete("/", sales.deleteAll);   // Delete all Collections

    app.use("/api/sales", router);
};
