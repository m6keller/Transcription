import express from 'express';
const Datastore = require('nedb');
const instructionDatabase = new Datastore('instructions.db');

instructionDatabase.loadDatabase();
//import {InstructionMap} from 'hashTable';

type ValuePerUnitOptions = {
    amount: number,
    units: string
}

type RefillOptions = {
    needed: boolean;
    when: ValuePerUnitOptions;
}

type Instructions = {
    patientName: string,
    drugName: string,
    options: ValuePerUnitOptions,
    consumptionInstructions: string,
    frequency: ValuePerUnitOptions,
    periodOfConsuption: ValuePerUnitOptions,
    timeOfDay: string,
    instructions: string,
    expiryDate: number,
    refillNeeded: RefillOptions,
    timestamp: number
}

//var instructions: Instructions[] = new Array( 300 ); // add all instructinos to this array

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
    }
});

instructionDatabase.insert(JSON.parse(temp));

const router = express.Router();
const app = express();
app.use('/', router);
app.use(express.json());


app.get('/', (req, res) => {
    res.send('This an API for PharmaHacks 2022 Submission');
});

app.get('/about', (req, res) => {
    res.send('This an API for PharmaHacks 2022 Submission');
});

app.get('/patientName/:id', (req, res) => { // depends what request is
    const { id } = req.params;
    instructionDatabase.find({"patientName": id }, (err: any, data: any) => {
        if( err || !id || data === [] ) res.status(418).send({message: "Invalid id"});
        else res.send( data );
    });
});

app.get('/all', (req, res) => {
    instructionDatabase.find({ $not:  {patientName: "" } }, (err: any, data: any) => {
        if( err ) res.status(418).send({message: "Invalid id"});
        res.send(data);
    });
});

app.post('/:id', (req, res) => {
    const post = req.body;
    const timestamp: number = Date.now();
    post.timestamp = timestamp;
    instructionDatabase.insert(post);
    res.send(post);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App listening on PORT ' + port));



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