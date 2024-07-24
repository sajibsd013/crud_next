"use client"

import {useState} from "react";
import StudentForm from "@/components/students/StudentForm";
import {useRouter} from 'next/navigation'
import addStudent from "@/lib/students/addStudent";

const AddStudent = () => {
    const router = useRouter();

    const [student, setStudent] = useState({
        Name: "",
        StudentID: "",
        Dept: "",
        DOB: "",
        Image: "",
    });


    const changeFormdata = (data) => {
        setStudent(data);
    }


    const submitFormdata = async (e) => {
        e.preventDefault();

        const result = await addStudent(student);
        console.log(result)

        if (result) {
            router.push('/students')
        }
    }

    return (

        <form onSubmit={event => submitFormdata(event)}>
            {/*{JSON.stringify(student)}*/}
            <StudentForm formData={student} setFormData={changeFormdata}/>
            <button className="btn w-full bg-black text-white uppercase font-semibold">Sumbit</button>
        </form>

    );
};

export default AddStudent;