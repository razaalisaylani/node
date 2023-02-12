import Users from "../models/User.js"
import config from "../constants/config.js";

const getUsers = async (req, res) => {
  try {
    console.log("config", config)
    const { id } = req.query;
    console.log("id", id)
    const users = await Users.find({});
    return res.status(200).send({ users });
  } catch (err) {
    return res.status(401).send({ status: 401, err });
  }
};

export default getUsers;
