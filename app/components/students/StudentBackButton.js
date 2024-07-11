"use client"
import { useRouter } from 'next/navigation'

const StudentBackButton = ({id}) => {
    const router = useRouter();

    return (
        <button className="btn bg-purple-700 w-full" onClick={() => router.back()}>Back</button>

    );
};


export default StudentBackButton;