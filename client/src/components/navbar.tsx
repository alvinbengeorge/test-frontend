export default function Navbar({
    headerOption,
    setHeaderOption
}: {
    headerOption: string;
    setHeaderOption: (value: string) => void;
}) {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-white">Test</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <button
                                onClick={() => setHeaderOption("Option 1")}
                                className={`${
                                    headerOption === "Option 1"
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300"
                                } px-4 py-2 rounded`}
                            >
                                Option 1
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setHeaderOption("Option 2")}
                                className={`${
                                    headerOption === "Option 2"
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300"
                                } px-4 py-2 rounded`}
                            >
                                Option 2
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setHeaderOption("Option 3")}
                                className={`${
                                    headerOption === "Option 3"
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300"
                                } px-4 py-2 rounded`}
                            >
                                Option 3
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}