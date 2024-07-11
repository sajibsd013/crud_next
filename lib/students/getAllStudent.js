import api from "@/app/api";

export default async function getAllStudents() {
    // const result = await fetch(
    //     "http://127.0.0.1:8000/api/students/",
    //     {
    //         next: {
    //             revalidate: 10,
    //         },
    //     }
    // );
    //
    // if (!result.ok) {
    //     throw new Error("There was an error fetching posts");
    // }
    //
    // return result.json();

    const result  = await api.get('/students');

    return result.data;
}