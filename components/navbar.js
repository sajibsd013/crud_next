"use client";
import { useState} from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const signOut = useSignOut()
    // const { auth, setAuth } = useAuth();

    const handleSignOut = () => {
        // signOut();
        // setAuth(false);
    };
    return (
        <nav className="bg-blue-500">
            {/*{JSON.stringify(auth, null, 2)}*/}
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                        <Link href='/' className="flex-shrink-0 text-white text-xl font-bold ">
                            Logo
                        </Link>
                        <div className="hidden sm:block sm:ml-6 ">
                            <div className="flex space-x-4">
                                <Link
                                    href="/"
                                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    href="/students"
                                    className="text-white px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Students
                                </Link>
                                <>


                                    {/*{!auth && (<Link*/}
                                    {/*    href="/login"*/}
                                    {/*    className="text-white px-3 py-2 rounded-md text-sm font-medium"*/}
                                    {/*>*/}
                                    {/*    Login*/}
                                    {/*</Link>)}*/}
                                    {/*{auth && <button*/}
                                    {/*    onClick={()=>handleSignOut()}*/}
                                    {/*    className="text-white px-3 py-2 rounded-md text-sm font-medium"*/}
                                    {/*>Logout</button>}*/}
                                </>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className={`sm:hidden ${isOpen ? "block" : "hidden"}`}
                id="mobile-menu"
            >
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link
                        href="/"
                        className="text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                        Home
                    </Link>

                    <Link
                        href="/students"
                        className="text-white block px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Students
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;