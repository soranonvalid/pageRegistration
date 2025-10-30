import axios from "axios";

export const getUsers = async () => {
  try {
    const res = await axios.get("http://localhost:5000/users");
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const AddUsers = async (data) => {
  try {
    const res = await axios.post("http://localhost:5000/users", data);
    console.log(res);
    return res.data.data;
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

export const getUsersbyId = async (id) => {
  try {
    const res = await axios.get(`http://localhost:5000/users/${id}`);
    console.log(res);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
};
