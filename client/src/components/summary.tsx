import { SummaryProps } from "../types";

export default function Summary ({
    officeType,
    company,
    customFee,
    subValueCenter,
    locationName,
    locationId,
    ipscode,
    deliverTypes,
    offlineCash,
    offlineStamp,
    unitCode,
    subValueCenterCode,
    valueCenterCode,
    cash,
    stock,
    postGlobalInstalled,
    postGlobalConfig

}: SummaryProps) {
    console.log(postGlobalConfig);
    console.log(deliverTypes);
    return (
        <div className="p-4 w-full">
            <h1 className="text-3xl font-bold text-center">Confirm Details</h1>
            <div className="grid place-items-center grid-cols-1 lg:grid-cols-2 gap-2">
                <div className="bg-slate-300 p-4 rounded-xl w-full">
                    <h1 className="font-bold">Office Details</h1>
                    <p>Office Type: {officeType}</p>
                    <p>Company: {company}</p>
                    <p>Custom Fee: {customFee}</p>
                    <p>Sub Value Center: {subValueCenter}</p>
                    <p>Location Name: {locationName}</p>
                    <p>Location ID: {locationId}</p>
                    <p>IPS Code: {ipscode}</p>
                </div>
                <div className="bg-red-300 p-4 rounded-xl w-full h-full">
                    <h1 className="font-bold">Deliver Types</h1>
                    <p>Deliver Types: </p>
                    <ul className="grid ps-4 list-disc">
                        <li>Letter: {deliverTypes.letter ? "yes": "no"}</li>
                        <li>EMS: {deliverTypes.ems ? "yes": "no"}</li>
                        <li>Parcel: {deliverTypes.parcel ? "yes": "no"}</li>
                    </ul>
                    <p>Offline Cash: {offlineCash ? "yes": "no"}</p>
                    <p>Offline Stamp: {offlineStamp ? "yes": "no"}</p>
                </div>
                <div className="bg-green-300 p-4 rounded-xl w-full h-full">
                    <h1 className="font-bold">Finance Dimension Code</h1>
                    <p>Unit Code: {unitCode}</p>
                    <p>Sub Value Center Code: {subValueCenterCode}</p>
                    <p>Value Center Code: {valueCenterCode}</p>
                    <h1 className="font-bold">Authorized Maximum Balance</h1>
                    <p>Cash: {cash}</p>
                    <p>Stock: {stock}</p>
                </div>
                <div className="bg-blue-300 p-4 rounded-xl w-full h-full">
                    <h1 className="font-bold">Post Global Configuration</h1>
                    <p>Post Global Installed: {postGlobalInstalled ? "yes": "no"}</p>
                    {postGlobalInstalled && (
                        <ul className="grid ps-4 list-disc">
                            <li>Box key deposite applicable: {postGlobalConfig.boxKey ? "yes": "no"}</li>
                            <li>E-Bill module: {postGlobalConfig.eBill ? "yes": "no"}</li>
                            <li>EMO module: {postGlobalConfig.EMO ? "yes": "no"}</li>
                        </ul>
                    )}
                </div>
            </div>

        </div>
    )

}