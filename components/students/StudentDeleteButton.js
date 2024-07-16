"use client"

import deleteStudent from "@/lib/students/deleteStudent";
import {CiTrash} from "react-icons/ci";
import {useAppDispatch} from "@/lib/store/hooks";
import {fetchStudents} from "@/lib/store/features/student/studentSlice";

const StudentDeleteButton =  ({id}) => {

    const dispatch = useAppDispatch()


    const onDelete = async () => {
        let confirmation = confirm("Are you sure you want to delete this student?", id);
        console.log(id)
        if (confirmation) {
            const result  = await deleteStudent(id)
            dispatch(fetchStudents())
        }

    }

    return (
        <button className="btn bg-red-600" onClick={() => onDelete()}><CiTrash/></button>

    );
};


export default StudentDeleteButton;