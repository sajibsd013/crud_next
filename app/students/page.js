import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import StudentTable from "@/components/students/StudentTable";

export async function generateMetadata() {
  return {
    title: "Students ",
    description: "This is students page",
  };
}

const Students = async () => {



  // const students = await getAllStudents();
  // console.log(students);

  return (
    <div className="container">
      <div className="lg:w-4/6 w-full mx-auto my-5 border p-4 rounded-lg shadow-2xl">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-3xl mb-5">Students</h1>
          <Link href="/students/add" className="ring-2 px-3 py-1 rounded-lg">
            <IoMdAdd />
          </Link>
        </div>
        <div className="overflow-scroll">
          <StudentTable/>
        </div>
      </div>
    </div>
  );
};

export default Students;
