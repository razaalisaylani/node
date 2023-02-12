import mongoose from "mongoose";

const BlogSchema = mongoose.Schema(
    {
        title: { type: String, required: true },
        text: { type: String, required: true },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "users"
        },
    },
    { timestamps: true }
);

const Blog = mongoose.model("blog", BlogSchema);

export default Blog;
