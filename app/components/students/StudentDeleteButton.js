"use client"

import deleteStudent from "@/lib/students/deleteStudent";

const StudentDeleteButton =  ({id}) => {

    const onDelete = async () => {
        let confirmation = confirm("Are you sure you want to delete this student?", id);
        console.log(id)
        if (confirmation) {
            const result  = await deleteStudent(id)
        }

    }

    return (
        <button className="btn bg-red-600" onClick={() => onDelete()}>Delete</button>

    );
};


export default StudentDeleteButton;