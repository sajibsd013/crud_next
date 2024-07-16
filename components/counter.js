"use client"
import {useAppSelector, useAppDispatch, useAppStore} from '@/lib/store/hooks'
import {decrement, decrementByAmount, increment, incrementByAmount} from "@/lib/store/features/counter/counterSlice";
import {fetchStudents} from "@/lib/store/features/student/studentSlice";

const Counter = () => {
    let counter = useAppSelector(state => state.counter.value)
    let dispatch = useAppDispatch()
    const student = useAppSelector(state => state.student.list)
    return (
        <div>

            <div
                className="w-96 border border-gray-200 shadow my-5 mx-auto flex items-center justify-between p-5 rounded-md">
                <div>
                    <button className="btn bg-purple-700 text-3xl" onClick={() => dispatch(decrementByAmount(5))}>-5
                    </button>
                    <button className="btn bg-purple-700 text-3xl" onClick={() => dispatch(decrement())}>-</button>
                </div>
                <span className="text-5xl">{JSON.stringify(counter)}</span>
                <div>
                    <button className="btn bg-purple-700 text-3xl" onClick={() => dispatch(increment())}>+</button>
                    <button className="btn bg-purple-700 text-3xl" onClick={() => dispatch(incrementByAmount(5))}>+5
                    </button>
                </div>

            </div>
            <div
                className="w-96 border border-gray-200 shadow my-5 mx-auto flex items-center justify-between p-5 rounded-md hidden">

                <span className="text-5xl">{JSON.stringify(student)}</span>
                <div>
                    <button className="btn bg-purple-700 text-3xl" onClick={()=>dispatch(fetchStudents())}>Load
                    </button>
                </div>

            </div>
        </div>

    );
};

export default Counter;
