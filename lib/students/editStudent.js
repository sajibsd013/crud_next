import api from "@/lib/api";

export default async function  editStudent(id,data)   {
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
    const result = await api.patch(`/students/${id}/`, data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    })

    console.log(result.status)

    return result.status === 200 ? result.data : null;
}