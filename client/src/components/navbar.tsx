export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">Test</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">About</a>
                        </li>
                        <li>
                            <a href="#" className="text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}