import DataTable from "@/components/data-table";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { columnsUser } from "@/utils/DataUser/dataUser.jsx";
import * as userService from "@/utils/services/userService.js";
import { useEffect, useState } from "react";

function UserDashboard() {
  const [users, setUsers] = useState([]);

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
        <DataTable columns={columnsUser} data={users} />
      </LayoutDashboard>
    </div>
  );
}

export default UserDashboard;
