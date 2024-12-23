import Table from "@/app/components/Table";
import Pagination from "@/app/components/Pagination";
import PatientSearch from "@/app/components/PatientSearch";
import Image from "next/image";
import Link from "next/link";
import { patientData, role } from "@/app/lib/data";
import { CiTrash } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

type Patient = {
  id: number;
  patientId: string;
  fname: string;
  lname?: string;
  dob?: string;
  sex: string;
  address: string;
  contact?: string;
  createdAt: string;
  createdBy: string;
  updatedAt?: string;
  updatedBy?: string;
};

const columns = [
  {
    header: "N° Patient",
    accessor: "noPatient",
  },
  {
    header: "Nom",
    accessor: "nom",
  },
  {
    header: "Sexe",
    accessor: "sexe",
    className: "hidden md:table-cell",
  },
  {
    header: "Age",
    accessor: "age",
    className: "hidden md:table-cell",
  },
  {
    header: "Adresse",
    accessor: "adresse",
    className: "hidden md:table-cell",
  },
  {
    header: "Contact",
    accessor: "contact",
    className: "hidden md:table-cell",
  },
  {
    header: "#",
    accessor: "action",
  },
];

const PatientPage = () => {
  const renderRow = (item: Patient) => (
    <tr
      key={item.id}
      className="text-xs cursor-pointer border-b border-gray-200 even:bg-slate-50 hover:bg-gray-100"
    >
      <td>
        <h3 className="pl-1 font-semibold">{item.patientId}</h3>
      </td>
      <td>
        {item.fname} {item.lname}
      </td>
      <td className="hidden md:table-cell">{item.sex}</td>
      <td className="hidden md:table-cell">{item.dob}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="hidden md:table-cell">{item.contact}</td>

      <td>
        <div className="flex items-center gap-2 py-3">
          <Link href={`/patients/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-md bg-sky">
              <FaRegEye size={16} color="white" />
            </button>
          </Link>
          <Link href={`/patients/${item.id}`}>
            {role === "admin" && (
              <button className="w-7 h-7 flex items-center justify-center rounded-md bg-red-400">
                <CiTrash size={16} color="white" />
              </button>
            )}
          </Link>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 mx-2">
      {/* TOP */}
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-sm font-bold">Tous les patients</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto mt-2">
          <PatientSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow">
              <Image src="/add.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={patientData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default PatientPage;
