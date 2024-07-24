"use client"
import {useAppSelector, useAppDispatch, useAppStore} from '@/lib/store/hooks'

const HomePage = () => {
    const counter = useAppSelector(state => state.counter.value)
    return (
        <div>
            <h1 className="border shadow p-5 text-5xl text-center rounded-lg">Hello world! {counter}</h1>
        </div>
    );
};

export default HomePage;
