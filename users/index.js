import express from "express";
import jwt from "jsonwebtoken";
import get_users from "./get_users.js";
import add_users from "./add_users.js";
import login from "./login.js";
import deleteUsers from "./delete_users.js";
import uploadFiles from "./upload_files.js";


const router = express.Router();

const verifyToken = (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(" ")[1]
            var decoded = jwt.verify(token, 'saylani');
            console.log("chal raha hai", decoded)
            next()
        } else {
            res.status(401).send({ message: "token not provided" })
        }
    } catch (err) {
        res.status(401).send({ message: "unauthrized" })
    }
}

router.post("/upload/files", uploadFiles);
router.get("/", verifyToken, get_users);
router.post("/", add_users);
router.post("/login", login);
router.delete("/:id", deleteUsers);

export default router;
