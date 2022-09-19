import express from "express";
const Datastore = require("nedb");
const bodyParser = require("body-parser");
// const { body,validationResult } = require('express-validator');
// const multer = require('multer');
const instructionDatabase = new Datastore("instructions.db");
instructionDatabase.loadDatabase();

type howLong = {
  until: string;
  date: string;
};
type instruction = {
  location: string;
  consumption: string;
};
type RefillOptions = {
  needed: boolean;
  when: string;
};
type quantityPerUnit = {
  quanitity: number;
  unit: string;
};
type Instructions = {
  patientName: string;
  patientID: string;
  drugName: string;
  options: quantityPerUnit;
  consumptionInstructions: string;
  amountPer: quantityPerUnit;
  frequency: string;
  periodOfConsuption: howLong;
  timeOfDay: string;
  instructions: instruction;
  expiryDate: string;
  refillNeeded: RefillOptions;
  timestamp: number;
};

const router = express.Router();
const app = express();
app.use("/", router);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/patient-side", (req, res) => {
  res.sendFile(__dirname + "/patient-info.html");
});

app.get("/about", (req, res) => {
  res.send("This an API for PharmaHacks 2022 Submission");
});

app.get("/patientName/:id", (req, res) => {
  console.log("get is being called");
  const { id } = req.params;
  instructionDatabase.find({ "patient-name": id }, (err: any, data: any) => {
    if (err || !id) res.status(418).send({ message: "Invalid id" });
    else res.json(data);
  });
});

app.get("/patientInfo", (req, res) => {
  console.log(" other get is being called");
  console.log(req);
  console.log(req.query);
  console.log(req.query.id);

  res.sendFile(__dirname + "/patient-info.html");
});

app.get("/all", (req, res) => {
  instructionDatabase.find(
    { $not: { patientName: "" } },
    (err: any, data: any) => {
      if (err) res.status(418).send({ message: "Invalid id" });
      res.send(data);
    }
  );
});

app.post("/addInstructions", (req, res) => {
  console.log(req);

  const data = req.body;
  console.log(data);
  const timestamp: number = Date.now();
  data.timestamp = timestamp;
  instructionDatabase.insert(data);
  return res.send(req.body);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log("App listening on PORT " + port));

// delete if multiple instances

// class PostsController {
//     public path = '/posts';
//     public router = express.Router();

//     private prvInstructions: Instructions[] = instructions; // add all instructinos to this array

//     constructor() {
//         this.intializeRoutes();
//     }
//     public intializeRoutes() {
//         this.router.get(this.path, this.getAllPosts);
//         this.router.post(this.path, this.createAPost);
//     }

//     getAllPosts = (req: express.Request, res: express.Response) => {
//         res.send(this.prvInstructions);
//     }

//     public createAPost = (req: express.Request, res: express.Response) => {
//         const post: Instructions = req.body;
//         this.prvInstructions.push(post);
//         res.send(post);
//     }
//

/*
let temp = JSON.stringify({
    "patientName": "valma",
    "drugName": "your_love",
    "options": {
        "amount": 50,
        "units": "mg"
    },
    "consumptionInstructions": "eat",
    "frequency": {
        "amount": 70,
        "units": "daily"
    },
    "periodOfConsuption": {
        "amount": 20,
        "units": "next month"
    },
    "timeOfDay": "morning",
    "instructions": "eat it",
    "expiryDate": 28400803,
    "refillNeeded": {
        "needed": true,
        "when": {
            "amount": 40,
            "units": "days"
        }
    },
    "timestamp": 0
});

instructionDatabase.insert(JSON.parse(temp));

*/

/*


var data = {
    patientName: "Matthew",
    patientID: 768790,
    drugName: "hello",
    options: "hello",
    consumptionInstructions: {
        quanitity: 87980,
        unit: "mg"
    },
    amountPer: {
        amount: 78980,
        unit: "mL",
    },
    frequency: "heyhey",
    periodOfConsuption: {
        until: "ahjskjnd",
        date: "ahksnjd",
    },
    timeOfDay: "morning",
    instructions: {
        location: "ahsjd",
        consumption: "hkdsn",
    },
    expiryDate: "ashdknf",
    refillNeeded: {
        needed: "aksjd",
        when: "asjhknjldfa",
    },
    timestamp: null,
};



const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
};

fetch("/addInstructions", options);

*/
