import cloudinary from "../lib/cloudinary.js";
import multer from "multer";
import path from 'path';
const __dirname = path.resolve();

const uploadFiles = async (req, res) => {
    cloudinary.v2.uploader
        .upload("images/image.jpg")
        .then(result => console.log(result))
        .catch(err => console.log(err))
    let src_path = `${__dirname}/images/`;
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, src_path);
        },
        filename: function (req, file, cb) {
            const split = file.originalname.split(".");
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null, file.fieldname + '-' + uniqueSuffix + "." + split[split.length - 1])
        }
    })

    const upload = multer({ storage: storage }).single('file');

    upload(req, res, (err) => {
        console.log(err)
    })
    res.status(200).send({})
};

export default uploadFiles;
