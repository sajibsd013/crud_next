import api from "@/lib/api";

export default async function deleteStudent(id)   {
    // const result = await fetch(
    //     "http://127.0.0.1:8000/api/students/",
    //     {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "multipart/form-data",
    //         },
    //         body: data,
    //     },
    // );
    const result = await api.delete(`/students/${id}`)
    // console.log(result)
    return result.status === 204 ? result.status : null;
}