import Blog from "../models/Blog.js";
import Joi from "joi";


const schema = Joi.object({
    title: Joi.string().required(),
    text: Joi.string().required(),
    user: Joi.string().required()
})

const addBlogs = async (req, res) => {
    try {
        await schema.validateAsync(req.body, { abortEarly: false })
        const blog = new Blog(req.body);
        const response = await blog.save();
        console.log("res", response);

        return res.status(200).send({ status: 200, message: "blog added successfuly" });
    } catch (err) {
        return res.status(401).send({
            status: 401,
            err: err
        });
    }
};

export default addBlogs;
