export default async function getStudent(id) {
    const result = await fetch(
        `http://127.0.0.1:8000/api/students/${id}`
    );

    return result.json();
}