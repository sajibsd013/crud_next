import AddStudent from "@/app/components/students/add";
import StudentForm from "@/app/components/students/StudentForm";

export async function generateMetadata() {
    return {
        title: "Students || Add Student",
        description: "This is students page",
    };
}

const AddPage = () => {

    return (
        <div className="container">
            <div className="shadow border rounded-lg p-4 w-full max-w-2xl mx-auto my-5">
                {/*{JSON.stringify(student)}*/}
                <h1 className="text-center text-2xl font-semibold mb-2">Add Student</h1>
                <hr/>
                <AddStudent/>

            </div>

        </div>
    );
};

export default AddPage;
