import DataTable from "@/components/data-table";
import LayoutDashboard from "@/components/layout/layoutDashboard";
import { columnsProducts, dataProducts } from "@/utils/DataProduct/dataProduct";

function ProductDashboard() {
  return (
    <div className="">
      <LayoutDashboard>
        <DataTable columns={columnsProducts} data={dataProducts} />
      </LayoutDashboard>
    </div>
  );
}

export default ProductDashboard;
