import EditStudent from "@/app/components/students/edit";
import getStudent from "@/lib/students/getStudent";
import StudentForm from "@/app/components/students/StudentForm";

export async function generateMetadata({params}) {
    const student = await getStudent(params.id)
    return {
        title: `Students || ${student.Name}`,
        description: "This is students page",
    };
}
const EditPage = async ({params}) => {

    const student = await getStudent(params.id)
    console.log("student",student)

    return (
        <div className="container">
            <div className="shadow border rounded-lg p-4 w-full max-w-2xl mx-auto my-5">
                <h1 className="text-center text-2xl font-semibold mb-2">Update Student</h1>
                <hr/>
                <EditStudent id={params.id} studentData={student}/>
            </div>

        </div>
    );
};

export default EditPage;
