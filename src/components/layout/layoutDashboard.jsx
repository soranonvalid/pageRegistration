import Sidebar from "@/components/sidebar";

const LayoutDashboard = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="p-6 bg-gray-50 w-full">{children}</div>
    </div>
  );
};

export default LayoutDashboard;
