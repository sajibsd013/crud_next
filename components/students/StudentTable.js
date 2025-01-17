"use client"
import Link from "next/link";
import {BiSolidEdit} from "react-icons/bi";
import {MdOutlineRemoveRedEye} from "react-icons/md";
import {useAppDispatch, useAppSelector} from '@/lib/store/hooks'
import {fetchStudents, remove} from "@/lib/store/features/student/studentSlice";
import {useEffect, useState} from "react";
import {CiTrash} from "react-icons/ci";
import deleteStudent from "@/lib/students/deleteStudent";

const StudentTable = () => {
    const dispatch = useAppDispatch()
    const students = useAppSelector(state => state.student.list)

    useEffect(() => {
        console.log("Called useeffect")
        dispatch(fetchStudents())
    }, [])


    // console.log(students);

    const onDelete = async (id) => {
        let confirmation = confirm("Are you sure you want to delete this student?", id);
        if (confirmation) {
            const result  = await deleteStudent(id)
            console.log(result)
            if (result) {
                console.log("remove(id)")
                dispatch(remove(id))
            }
        }

    }

    return (
            <table className="border-collapse border border-slate-400 w-full p-3">
                <thead>
                <tr>
                    <th className="border border-slate-300 p-2">ID</th>
                    <th className="border border-slate-300 p-2"> Student ID</th>
                    <th className="border border-slate-300 p-2">Name</th>
                    <th className="border border-slate-300 p-2">Department</th>
                    <th className="border border-slate-300 p-2">Date of birth</th>
                    <th className="border border-slate-300 p-2">Image</th>
                    <th className="border border-slate-300 p-2">Action</th>
                </tr>
                </thead>
                <tbody>
                {students.map(({id, StudentID, Name, Dept, DOB, Image}) => {
                    return (
                        <tr key={id}>
                            <td className="border border-slate-300 p-2">##{id}</td>
                            <td className="border border-slate-300 p-2">{StudentID}</td>
                            <td className="border border-slate-300 p-2">{Name}</td>
                            <td className="border border-slate-300 p-2">{Dept}</td>
                            <td className="border border-slate-300 p-2">{DOB}</td>
                            <td className="border border-slate-300 p-2">
                                <img src={Image} alt={Name} className="w-20"/>
                            </td>
                            <td className="border border-slate-300 ">
                                <div className="flex w-full justify-between p-2 ">

                                    <button className="btn bg-red-600" onClick={() => onDelete(id)}><CiTrash/></button>


                                    {/*</button>*/}
                                    <Link
                                        className="btn bg-green-500"
                                        href={`/students/edit/${id}`}
                                    >
                                        <BiSolidEdit/>
                                    </Link>
                                    <Link
                                        className="btn bg-blue-500"
                                        href={`/students/${id}`}
                                    >
                                        <MdOutlineRemoveRedEye/>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
    );
};

export default StudentTable;
