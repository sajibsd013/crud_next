"use client"
import { useRouter } from 'next/navigation'
import {MdArrowBackIos} from "react-icons/md";

const StudentBackButton = ({id}) => {
    const router = useRouter();

    return (
        <button className="btn bg-purple-700 w-full flex justify-center" onClick={() => router.back()}> <MdArrowBackIos/></button>

    );
};


export default StudentBackButton;