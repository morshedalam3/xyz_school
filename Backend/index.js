const express = require("express");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;

// midleware
0;
app.use(cors());
app.use(express.json());

// connecte
const uri = `mongodb+srv://school_ui:IjXXcIYS8dJtH0Qd@cluster0.ossg7.mongodb.net/School_db?retryWrites=true&w=majority`;
// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.q8coo.mongodb.net/furniture?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("School_db");
    const imagesCollection = database.collection("images");
    const teachersCollection = database.collection("teachers");
    const newsCollection = database.collection("news");
    const usersCollection = database.collection("users");
    const adminCollection = database.collection("admin");

    // is admin
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await usersCollection.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    //add user
    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersCollection.insertOne(user);
      console.log(result);
      res.json(result);
    });
 
    // user upsert
    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const options = { upsert: true };
      const updateDoc = { $set: user };
      const result = await usersCollection.updateOne(
        filter,
        updateDoc,
        options
      );
      res.json(result);
    });
 
    // set admin
    app.put("/users/admin", async (req, res) => {
      const user = req.body;
      console.log('put', user);
      const filter = { email: user.email };
      const updateDoc = { $set: { role: "admin" } };
      const result = await usersCollection.updateOne(filter, updateDoc);
      res.json(result);
    });
    // total order API
    app.get("/totalOrder", async (req, res) => {
      const allOrder = ordersCollection.find({});
      const result = await allOrder.toArray();
      res.send(result);
    });
    //specific order
    app.get("/orders", async (req, res) => {
      const cursor = ordersCollection.find({ email: req.query.email });
      const order = await cursor.toArray();
      res.send(order);
    });
    // order delete API
    app.delete("/totalOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await ordersCollection.deleteOne(query);
      res.json(result);
    });

    //update Status
    app.patch("/update/:id", (req, res) => {
      ordersCollection
        .updateOne(
          {
            _id: ObjectId(req.params.id),
          },
          {
            $set: { status: req.body.value },
          }
        )
        .then((result) => {
          res.send(result.modifiedCount > 0);
        });
    });
    //specific order
    app.get("/orders", async (req, res) => {
      const cursor = ordersCollection.find({ email: req.query.email });
      const order = await cursor.toArray();
      res.send(order);
    });

    // Add new Image
    app.post("/addImage", async (req, res) => {
      const newImage = req.body;
      const result = await imagesCollection.insertOne(newImage);
      res.json(result);
    });

    //Add new Teacher
    app.post("/addTeacher", async (req, res) => {
      const newTeacher = req.body;
      const result = await teachersCollection.insertOne(newTeacher);
      res.json(result);
    });

    //Post News
    app.post("/AddNews", async (req, res) => {
      const newNews = req.body;
      const result = await newsCollection.insertOne(newNews);
      res.json(result);
    });

    //Submit Orders
    app.post("/orders", async (req, res) => {
      const orders = req.body;
      const result = await ordersCollection.insertOne(orders);
      res.json(result);
    });

    // makeAdmin
    app.post("/makeAdmin", async (req, res) => {
      const admin = req.body;
      const result = await adminCollection.insertOne(admin);
      res.json(result);
    });

    //admin verified
    app.post("/isAdmin", (req, res) => {
      const email = req.body.email;
      adminCollection.find({ email: email }).toArray((err, admin) => {
        res.send(admin.length > 0);
        console.log(admin);
      });
    });
    // get Image
    app.get("/getImage", async (req, res) => {
      const coursor = imagesCollection.find({});
      const images = await coursor.toArray();
      res.send(images);
    });

    //get Teachers
    app.get("/getTeachers", async (req, res) => {
      const coursor = teachersCollection.find({});
      const teachers = await coursor.toArray();
      res.send(teachers);
    });

    //get News
    app.get("/news", async (req, res) => {
      const coursor = newsCollection.find({});
      const news = await coursor.toArray();
      res.send(news);
    });

    //get Orders
    app.get("/order", async (req, res) => {
      const coursor = ordersCollection.find({});
      const order = await coursor.toArray();
      res.send(order);
    });

    // get service id
    app.get("/services/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.json(service);
    });
    app.get("/booking/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await serviceCollection.findOne(query);
      res.json(service);
    });

    // order delete API
    app.delete("/deleteOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await ordersCollection.deleteOne(query);
      res.json(result);
    });

    //services delete
    app.delete("/deleteProduct/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await serviceCollection.deleteOne(query);
      res.json(result);
    });

    app.delete("/deleteAdmin/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await adminCollection.deleteOne(query);
      res.json(result);
    });

    //update Status
    // app.patch('/update/:id',(req,res)=>{
    //     ordersCollection.updateOne(
    //       {
    //         _id:ObjectId(req.params.id)},
    //         {
    //           $set: {status:req.body.value}
    //         }
    //     )
    //     .then((result)=>{
    //       res.send(result.modifiedCount>0)
    //     })

    //  })

    // get Admin
    app.get("/getAdmin", async (req, res) => {
      const coursor = adminCollection.find({});
      const getAdmin = await coursor.toArray();
      res.send(getAdmin);
    });
  } finally {
    //    await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("database connected");
});

app.listen(port, () => {
  console.log("lissen");
});
