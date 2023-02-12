import express from "express";
import jwt from "jsonwebtoken";
import addBlog from "./add-blog.js";
import getBlogs from "./get-blog.js";


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

router.post("/", verifyToken, addBlog);
router.get("/", verifyToken, getBlogs);


export default router;
