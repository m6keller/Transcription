import express from 'express';
//import {InstructionMap} from 'hashTable';

type Instructions = {
    drug: string;
    amount: number;
    units: number;
    timeOfDay: number;
}

let instructions: Instructions[]; // add all instructinos to this array

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
// }

const router = express.Router();
const app = express();
app.use('/', router);
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/:id', (req, res) => {
    const id: number = req.body;
    if( !id ) res.status(418).send({message: "Invalid id"});
    res.send(instructions[id]); 
})

app.post('/:id', (req, res) => {
    const post: Instructions = req.body;
    instructions.push(post);
    res.send(post);
})

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('App listening on PORT ' + port));
