import { Info, Pencil, Trash, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import * as userService from "@/utils/services/userService.js";

async function deleteHandler(id) {
  await userService.deleteUsers(id);
  window.location.reload();
}

export const columnsUser = [
  {
    header: "No",
    accessorFn: (originalRow, index) => index + 1,
  },
  {
    accessorKey: "fullname",
    header: "Name",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone_number",
    header: "Number",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    header: "aksi",
    cell: (row) => {
      const id = row.row.original.id;

      return (
        <div className="flex gap-5">
          {/* info */}
          <button>
            <Info size={15} />
          </button>

          {/* edit */}
          <button>
            <Pencil size={15} />
          </button>

          {/* delete */}
          <AlertDialog>
            <AlertDialogTrigger>
              <Trash2 size={15} />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  account and remove data from servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No</AlertDialogCancel>
                <AlertDialogAction
                  onClick={() => {
                    deleteHandler(id);
                  }}
                >
                  Yes
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];
export const dataUser = [
  {
    id: 1,
    name: "John Doe",
    email: "jdoe@me.com",
    number: 1234567890,
    role: "Admin",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jne@sm.co",
    number: 9876543210,
    role: "User",
  },
  {
    id: 3,
    name: "Somra Sygma",
    email: "srm@sm.co",
    number: 1231231232,
    role: "User",
  },
];
