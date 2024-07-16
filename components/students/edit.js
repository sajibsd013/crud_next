"use client"

import {useEffect, useState} from "react";
import getStudent from "@/lib/students/getStudent";
import editStudent from "@/lib/students/editStudent";
import {useRouter} from 'next/navigation'
import StudentForm from "@/components/students/StudentForm";

const EditStudent = ({id, studentData}) => {
    const router = useRouter();

    const [student, setStudent] = useState({
        Name: "",
        StudentID: "",
        Dept: "",
        DOB: "",
        Image: "",
    });


    useEffect( () => {
        setStudent({...studentData});
    }, [])


    const changeFormdata = (data) => {
        setStudent({...data});
    }

    const submitFormdata = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        for (const key in student) {
            if (key == "Image" & typeof student[key] == "string") {
                console.log(student[key], key, typeof student[key]);
                continue;
            } else {
                formData.append(key, student[key]);
            }
        }

        const result = await editStudent(id,formData);
        console.log(result)

        if (result) {
            router.push('/students')
        }


    }

    return (

        <form onSubmit={event => submitFormdata(event)}>
            {id}
            {JSON.stringify(student)}
            <StudentForm formData={student} setFormData={changeFormdata}/>
            <button className="btn w-full bg-black text-white uppercase font-semibold">Sumbit</button>
        </form>

    );
};

export default EditStudent;