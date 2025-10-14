import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res);
    return res.data.data.users;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsers = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/users/${id}`);
    console.log(`${id} deleted...`);
  } catch (error) {
    console.log(error);
  }
};
