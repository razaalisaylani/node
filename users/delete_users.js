import users from "../constants/users.js"

const deleteUsers = (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((data) => data.id === +id);
  users.splice(index, 1);
  res.status(200).send({ status: 200, message: "user deleted successfuly" });
};

export default deleteUsers;
