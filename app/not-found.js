import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="text-center my-5 p-3 border-b border-gray-200 mx-auto w-5/6 shadow-lg space-y-2">
            <h2 className="text-5xl font-semibold">404 Not Found!</h2>
            <p>Could not find requested resource</p>
            <Link className="ring-2 px-2 py-1 rounded mt-5 block w-48 mx-auto" href="/">Return Home</Link>
        </div>
    )
}