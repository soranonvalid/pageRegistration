import DataTable from "@/components/data-table";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Button } from "@/components/ui/button";
import { columnsUser } from "@/utils/DataUser/dataUser.jsx";
import * as userService from "@/utils/services/userService.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserDashboard() {
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate("./add");
  };

  const fetchUsers = async () => {
    try {
      const res = await userService.getUsers();
      console.log(res);
      setUsers(res);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div className="">
      <LayoutDashboard>
        <Button onClick={handleAddUser}>Add User</Button>
        <DataTable columns={columnsUser} data={users} />
      </LayoutDashboard>
    </div>
  );
}

export default UserDashboard;
