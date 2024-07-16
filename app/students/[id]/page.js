import getStudent from "@/lib/students/getStudent";
import StudentBackButton from "@/components/students/StudentBackButton";

export async function generateMetadata({ params }) {
  const student = await getStudent(params.id);
  return {
    title: `Students || ${student.Name}`,
    description: "This is students page",
  };
}
const AddPage = async ({ params }) => {
  const student = await getStudent(params.id);
  console.log("student", student);

  return (
    <>
      <div className="container">
        <div className="my-5 p-3 max-w-80 border border-slate-400 shadow rounded-lg space-y-5 mx-auto">
          <div className="">
            <img
              src={student.Image}
              alt={student.Name}
              className="w-full sm:w-5/6 mx-auto rounded "
            />
          </div>
          <div className="space-y-2 text-center">
            <h1 className="font-semibold text-2xl">{student.Name}</h1>
            <p>{student.StudentID}</p>
            <p>{student.Dept}</p>
            <h1>{student.DOB}</h1>
          </div>
          <div>
            <StudentBackButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPage;
