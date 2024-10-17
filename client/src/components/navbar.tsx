import { useRouter } from "next/navigation";

export default function Navbar({
    headerOption,
    setHeaderOption,
    setSideBarOption,
    sideBarOption
}: {
    headerOption: string;
    setHeaderOption: (value: string) => void;
    setSideBarOption: (value: string) => void;
    sideBarOption: string;
}) {
    const router = useRouter();
    return (
        <nav className="bg-gray-800 p-4">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <button onClick={() => {
                        if (sideBarOption === "") setSideBarOption(`${headerOption}-1`)
                        else setSideBarOption("")
                    }}><span className="text-3xl text-white p-4">
                        {sideBarOption === "" ? "☰" : "×"}
                        </span></button>
                    <h1 className="text-2xl font-bold text-white">PostGlobal Configurator</h1>
                </div>
                <div>
                    <ul className="flex space-x-4">
                        <li>
                            <button
                                onClick={() => setHeaderOption("master")}
                                className={`${
                                    headerOption === "master"
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300"
                                } px-4 py-2 rounded`}
                            >
                                Master
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => setHeaderOption("tariff")}
                                className={`${
                                    headerOption === "tariff"
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-300"
                                } px-4 py-2 rounded`}
                            >
                                Tariff
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setHeaderOption("")
                                    setSideBarOption("")
                                    router.push("/")
                                }}
                                
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Exit
                            </button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}