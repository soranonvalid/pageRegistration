import React from "react";
import { X, Menu, User, Package } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <aside
      className={`${
        isOpen ? "w-64 p-2 shadow-black shadow-md" : "w-16 p-2 items-center"
      } flex flex-col gap-5 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between">
        {isOpen && <h2 className="">Dashboard</h2>}
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div>
        <Link className="flex gap-2" to="/dashboard/user">
          <User />
          {isOpen && <h2 className="">User</h2>}
        </Link>
      </div>
      <div>
        <Link className="flex gap-2" to="/dashboard/product">
          <Package />
          {isOpen && <h2 className="">Product</h2>}
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
