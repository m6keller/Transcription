"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let instructions; // add all instructinos to this array
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = express_1.default.Router();
        this.prvInstructions = instructions; // add all instructinos to this array
        this.getAllPosts = (req, res) => {
            res.send(this.prvInstructions);
        };
        this.createAPost = (req, res) => {
            const post = req.body;
            this.prvInstructions.push(post);
            res.send(post);
        };
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
const router = express_1.default.Router();
const app = (0, express_1.default)();
app.use('/', router);
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Hello world!');
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('App listening on PORT ' + port));
