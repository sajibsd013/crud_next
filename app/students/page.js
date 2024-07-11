import Link from "next/link";
import getAllStudents from "@/lib/students/getAllStudent";
import StudentDeleteButton from "@/app/components/students/StudentDeleteButton";

export async function generateMetadata() {
    return {
        title: "Students ",
        description: "This is students page",
    };
}

const Students = async () => {
    const students = await getAllStudents();
    console.log(students)

    return (
        <div className="container">
            <div className="lg:w-4/6 w-full mx-auto my-5 border p-4 rounded-lg shadow-2xl">
                <div className='flex justify-between items-center'>
                    <h1 className="font-semibold text-3xl mb-5">Students</h1>
                    <Link href='/students/add' className="ring-2 px-3 py-1 rounded-lg">
                        {/*<FontAwesomeIcon icon={faAdd}/>*/}
                        Add
                    </Link>
                </div>
                <div className="overflow-scroll">
                    <table className="border-collapse border border-slate-400 w-full p-3">
                        <thead>
                        <tr>
                            <th className="border border-slate-300 p-2"> Student ID</th>
                            <th className="border border-slate-300 p-2">Name</th>
                            <th className="border border-slate-300 p-2">Department</th>
                            <th className="border border-slate-300 p-2">Date of birth</th>
                            <th className="border border-slate-300 p-2">Image</th>
                            <th className="border border-slate-300 p-2">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map(({id,StudentID, Name, Dept, DOB, Image}) => {
                            return (
                                <tr key={id}>
                                    <td className="border border-slate-300 p-2">{StudentID}</td>
                                    <td className="border border-slate-300 p-2">{Name}</td>
                                    <td className="border border-slate-300 p-2">{Dept}</td>
                                    <td className="border border-slate-300 p-2">{DOB}</td>
                                    <td className="border border-slate-300 p-2">
                                        <img src={Image} alt={Name} className="w-20" />
                                    </td>
                                    <td className="border border-slate-300 ">
                                        <div className="flex w-full justify-between p-2 ">
                                            {/*<button className="btn bg-red-600" onClick={() => deleteStudent(id)}>*/}
                                            {/*    /!*<FontAwesomeIcon icon={faTrash}/>*!/*/}
                                            {/*    Remove*/}
                                            <StudentDeleteButton id={id}/>

                                            {/*</button>*/}
                                            <Link className="btn bg-green-500" href={`/students/edit/${id}`}>
                                                {/*<FontAwesomeIcon icon={faEdit} size="1x"/>*/}
                                                Edit
                                            </Link>
                                            <Link className="btn bg-blue-500" href={`/students/${id}`}>
                                                {/*<FontAwesomeIcon icon={faEye} size="1x"/>*/}
                                                View
                                            </Link>
                                        </div>
                                    </td>
                                </tr>);
                        })}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default Students;