import Blog from "../models/Blog.js";

const getBlogs = async (req, res) => {
    try {
        const query = {
            $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "user",
            },
        };
        const blogs = await Blog.aggregate([query]);
        res.status(200).send({ blogs });
    } catch (err) {
        console.log(err)
        return res.status(401).send({ status: 401, err });
    }
};

export default getBlogs;
