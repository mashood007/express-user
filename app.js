"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
// Define your routes here
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
// Create a new user
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password, firstName, lastName } = req.body;
    const user = yield prisma.user.create({
        data: { username, email, password, firstName, lastName },
    });
    res.json(user);
}));
// Get all users
app.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield prisma.user.findMany();
    res.json(users);
}));
// Get a user by ID
app.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const user = yield prisma.user.findUnique({
        where: { id: userId },
    });
    res.json(user);
}));
// Update a user
app.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    const { username, email, password } = req.body;
    const updatedUser = yield prisma.user.update({
        where: { id: userId },
        data: { username, email, password },
    });
    res.json(updatedUser);
}));
// Delete a user
app.delete('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = parseInt(req.params.id);
    yield prisma.user.delete({
        where: { id: userId },
    });
    res.json({ message: 'User deleted' });
}));
