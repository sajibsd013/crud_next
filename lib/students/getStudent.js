import api from "@/lib/api";

export default async function getStudent(id) {
    // const result = await fetch(
    //     `http://127.0.0.1:8000/api/students/${id}`
    // );
    const result  = await api.get(`/students/${id}`);

    return result.data;

}