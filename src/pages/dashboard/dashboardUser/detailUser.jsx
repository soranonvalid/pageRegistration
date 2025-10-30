import LayoutDashboard from "@/components/layout/layoutDashboard";
import { Input } from "@/components/ui/input";
import { getUsersbyId } from "@/utils/services/userService";
import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");

  const fetchUser = async (id) => {
    try {
      const res = await getUsersbyId(id);
      setUser(res);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser(id);
  }, []);
  return (
    <LayoutDashboard>
      <h1 className="text-2xl">Detail User</h1>
      <main className="mt-5">
        <div className="flex flex-col gap-5">
          <section className="flex flex-col gap-2">
            <Label>Nama Lengkap</Label>
            <Input value={user.fullname} disabled />
          </section>
          <section className="flex flex-col gap-2">
            <Label>Nama Pengguna</Label>
            <Input value={user.username} disabled />
          </section>
          <section className="flex flex-col gap-2">
            <Label>Email</Label>
            <Input value={user.email} disabled />
          </section>
          <section className="flex flex-col gap-2">
            <Label>No. Telepon</Label>
            <Input value={user.phone_number} disabled />
          </section>
          <section className="flex flex-col gap-2">
            <Label>Umur</Label>
            <Input value={user.age} disabled />
          </section>
          <section className="flex flex-col gap-2">
            <Label>Alamat</Label>
            <Input value={user.address} disabled />
          </section>
          <section className="flex flex-col gap-2">
            <Label>Role</Label>
            <Input value={user.role} disabled />
          </section>
        </div>
      </main>
    </LayoutDashboard>
  );
};

export default DetailUser;
