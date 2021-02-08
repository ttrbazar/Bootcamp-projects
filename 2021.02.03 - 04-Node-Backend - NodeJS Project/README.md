# Node Backend App

We will build Rest API CRUD (Create Read Update Delete) application.

We will use Node.js, Express, and MongoDB.

You need to create a new MongoDB account if you dont already have one. Then follow the instructions and create a Cluster on MongoDB (it can take 1-5 minutes). This will allow you to open a new database. Keep it empty for now.

## Let’s get started!
## 1.
Inside our Project folder, initialize the folder with the entry point of server.js :
```
npm init

name: (node-backend) 
version: (1.0.0) 
description: API with Node.js, Express and MongoDB
entry point: (index.js) server.js
test command: 
git repository: 
keywords: 
author: Your_name
license: (ISC)

Is this ok? (yes) yes
```

## 2.
We need to install necessary modules: express, mongoose, body-parser and cors.

Run the command:
```
npm install express mongoose body-parser cors --save
```

## 3.
In the root folder, let’s create a new server.js file:
```
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let corsOptions = {
  origin: http://127.0.0.1:5500   //This is for frontend
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to backend application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

## 4.
Now let’s run the app with command: node server.js.

Open your browser with url http://localhost:8080/.

You will se: "Welcome to backend application." 

First step is done.

MongoDB database & Mongoose

We’re gonna work with MongoDB and Mongoose in this section. 

## 5.
Create an “app” folder, then create a separate “config” folder for configuration with db.config.js file like this:
```
module.exports = {
    url: "mongodb+srv://your_user:your_psswd@cluster0.23aft.mongodb.net/your-database?retryWrites=true&w=majority",
  };
```

NOTE: You can find/create this url in your MongoDB account Clusters connect section under the “connect your application”. You can create new database or select one from MongoDB. Prefer to choose “sample_supplies”.

## 6.
Create app/models/index.js with the following code:
```
const dbConfig = require("../../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.models = require("./db.model.js")(mongoose);

module.exports = db;
```

## 7.
Now add connect() method in server.js. To do that;

First create a constant to make a connection. 
```
const db = require("./app/models");
```
Then add this code after app.use() methods:
```
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {console.log("Connected to the database!");
  }).catch(err => {console.log("Cannot connect to the database!", err);
    process.exit();
  });
```

## 8.
In models folder, create db.model.js file like this:
```
module.exports = mongoose => {
  let schema = mongoose.Schema(
    {	saleDate: Date,
	items: Array,
	storeLocation: String,
	customer: Object,
	couponUsed: Boolean,
	purchaseMethod: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Collection = mongoose.model("sale", schema);  /* sale should be the same name of your database collection but just single not plural*/
  return Collection;
};
```

After finishing the steps above, Model supports:
- create a new Collection: object.save()
- find a Collection by id: findById(id)
- retrieve all Collections: find()
- update a Collection by id: findByIdAndUpdate(id, data)
- remove a Collection: findByIdAndRemove(id)
- remove all Collections: deleteMany()
- find all Collections by name: find({ name: { $regex: new RegExp(name), $options: “i” } })

These functions will be used in our Controller with the help of mongoose.

## Create the Controller
## 9.
Inside app/controllers folder, let’s create db.controller.js with these CRUD functions:
- create
- findAll
- findOne
- update
- delete
- deleteAll
```
const db = require("../models");
const Collection = db.models;
```

Let’s implement these functions.

## Create a new object
## 10.Create and Save a new Collection:
```
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Collection
  const sale = new Collection({
	saleDate: req.body.saleDate,
      	items: req.body.items,
      	storeLocation: req.body.storeLocation,
	customer: req.body.customer,
      	couponUsed: req.body.couponUsed,
      	purchaseMethod: req.body.purchaseMethod
  });

  // Save Collection in the database
  sale
    .save(sale)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Collection."
      });
    });
};
```

## Retrieve objects (with condition)
## 11.Retrieve all Collections/find by name from the database:
```
exports.findAll = (req, res) => {
  const storeLocation = req.query.storeLocation;
  let condition = storeLocation? { storeLocation: { $regex: new RegExp(storeLocation), $options: "i" } } : {};

  Collection.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving sales."
      });
    });
};
```

## Retrieve a single object
## 12.Find a single Collection with an id:
```
exports.findOne = (req, res) => {
  const id = req.params.id;

  Collection.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Collection with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Collection with id=" + id });
    });
};
```

## Update an object
## 13.Update a Collection identified by the id in the request:
```
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;
  Collection.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Collection with id=${id}. Maybe Collection was not found!`
        });
      } else res.send({ message: "Collection was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Collection with id=" + id
      });
    });
};
```

## Delete an object
## 14.Delete a Collection with the specified id:
```
exports.delete = (req, res) => {
  const id = req.params.id;

  Collection.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Collection with id=${id}. Maybe Collection was not found!`
        });
      } else {
        res.send({
          message: "Collection was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Collection with id=" + id
      });
    });
};
```

## Delete all objects
## 15.Delete all Collections from the database:
```
exports.deleteAll = (req, res) => {
  Collection.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Collections were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all sales."
      });
    });
};
```

## Define Routes
When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will reponse by setting up the routes.
These are our routes:
- /api/sales: GET, POST, DELETE
- /api/sales/:id: GET, PUT, DELETE
We need to match our routes with controller methods.

## 17. So, create a db.routes.js inside app/routes folder with content like this:
```
module.exports = app => {
  const sales = require("../controllers/db.controller.js");
  let router = require("express").Router();

  router.post("/", sales.create); // Create a new Collection
  router.get("/", sales.findAll);  // Retrieve all Collections
  router.get("/:id", sales.findOne);  // Retrieve a single Collection with id
  router.put("/:id", sales.update);  // Update a Collection with id
  router.delete("/:id", sales.delete);  // Delete a Collection with id
  router.delete("/", sales.deleteAll);   // Delete all Collections
  
app.use('/api/sales, router);
};
```

You can see that we use a controller from /controllers/db.controller.js.

We also need to include routes in server.js:
```
require("./app/routes/db.routes")(app);
```

## Test the APIs
Run our Node.js application with command: node server.js.

Using Postman, we’re gonna test all the Apis above. Install Postman from website.
- Create a new Collection using POST /sales Api

After creating some new Collections, you can check MongoDb collection.
- Retrieve a single Collection by id using GET /sales/:id Api
- Update a Collection using PUT /sales/:id Api

Check sales collection after some documents were updated:
- Find all Collections which storeLocation contains ‘Denver: GET /sales?storeLocation=garden
- Delete a Collection using DELETE /sales/:id Api
- Delete all Collections using DELETE /sales Api

## Connecting Frontend
## 18. Open one of your previous API projects
## 19. Change your url variable according to your new backend url.
## 20. Get data from server.