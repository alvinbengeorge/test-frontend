"use client";
import Heading from "../components/heading";
import InputBox from "../components/input_box";
import Checkbox from "../components/checkbox";
import Dropdown from "../components/dropdown";
import { useEffect, useState } from "react";

interface DeliverType {
  letter: boolean;
  parcel: boolean;
  ems: boolean;
}

interface Screen0Props {
  setOfficeType: (value: string) => void;
  setCompany: (value: string) => void;
  setCustomFee: (value: boolean) => void;
  setSubValue: (value: string) => void;
  setLocationName: (value: string) => void;
  setLocationId: (value: string) => void;
  setIpsCode: (value: string) => void;
}

interface Screen1Props {
  setDeliverTypes: (
    value: DeliverType | ((prev: DeliverType) => DeliverType)
  ) => void;
  setOfflineCash: (value: boolean) => void;
  setOfflineStamp: (value: boolean) => void;
}

interface Screen2Props {
  setUnitCode: (value: string) => void;
  setSubValueCenterCode: (value: string) => void;
  setValueCenterCode: (value: string) => void;
  setCash: (value: number) => void;
  setStock: (value: number) => void;
}

const Screen0 = ({
  setOfficeType,
  setCompany,
  setCustomFee,
  setSubValue,
  setLocationName,
  setLocationId,
  setIpsCode,
}: Screen0Props) => {
  return (
    <div className="grid p-4 w-full">
      <div className="flex flex-wrap">
        <Dropdown
          label="Location Type"
          options={["Post Office", "Sub Post Office"]}
          onSelect={(value) => setOfficeType(value)}
        />
        <Checkbox
          label="Custom fee to be collected at office"
          onChange={(checked) => setCustomFee(checked)}
        />
      </div>
      <Dropdown
        label="Company"
        options={["Company1", "Company2"]}
        onSelect={(value: string) => setCompany(value)}
      />
      <Dropdown
        label="Sub Value Center"
        options={["Option1", "Option2"]}
        onSelect={(value: string) => setSubValue(value)}
      />
      <InputBox
        placeholder="Location Name"
        onChange={(event) => setLocationName(event)}
      />
      <div className="flex w-full border-black">
        <InputBox
          placeholder="Location ID"
          onChange={(value: string) => setLocationId(value)}
        />
        <InputBox
          placeholder="IPS Code"
          onChange={(value: string) => setIpsCode(value)}
        />
      </div>
    </div>
  );
};

const Screen1 = ({
  setDeliverTypes,
  setOfflineCash,
  setOfflineStamp,
}: Screen1Props) => {
  return (
    <div className="grid p-4 w-full lg:grid-cols-2 gap-2">
      <div className="border p-2">
        <h1>This office delivers to</h1>
        <div className="grid h-fit">
          <Checkbox
            label="Letter"
            onChange={(checked) =>
              setDeliverTypes((prev: DeliverType) => ({
                ...prev,
                letter: checked,
              }))
            }
          />
          <Checkbox
            label="Parcel"
            onChange={(checked) =>
              setDeliverTypes((prev: DeliverType) => ({
                ...prev,
                parcel: checked,
              }))
            }
          />
          <Checkbox
            label="EMS"
            onChange={(checked) =>
              setDeliverTypes((prev: DeliverType) => ({
                ...prev,
                ems: checked,
              }))
            }
          />
        </div>
      </div>
      <div className="grid border p-2">
        <Checkbox
          label="Allow Offline Cash Transaction"
          onChange={(checked) => setOfflineCash(checked)}
        />
        <Checkbox
          label="Allow OfflineStamp Transaction"
          onChange={(checked) => setOfflineStamp(checked)}
        />
      </div>
    </div>
  );
};

const Screen2 = ({
  setUnitCode,
  setSubValueCenterCode,
  setValueCenterCode,
  setCash,
  setStock,
}: Screen2Props) => {
  return (
    <div className="grid p-4 w-full lg:grid-cols-2 gap-2">
      <InputBox
        placeholder="Unit Code"
        onChange={(value: string) => setUnitCode(value)}
      />
      <InputBox
        placeholder="Sub Value Center Code"
        onChange={(value: string) => setSubValueCenterCode(value)}
      />
      <InputBox
        placeholder="Value Center Code"
        onChange={(value: string) => setValueCenterCode(value)}
      />
      <InputBox
        placeholder="Cash"
        onChange={(event) => setCash(Number(event))}
      />
      <InputBox
        placeholder="Stock"
        onChange={(event) => setStock(Number(event))}
      />
    </div>
  );
};

export default function Home() {
  const [screen, setScreen] = useState<number>(2);
  const [officeType, setOfficeType] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [customFee, setCustomFee] = useState<boolean>(false);
  const [subValueCenter, setSubValue] = useState<string>("");
  const [locationName, setLocationName] = useState<string>("");
  const [locationId, setLocationId] = useState<string>("");
  const [ipscode, setIpsCode] = useState<string>("");
  const [deliverTypes, setDeliverTypes] = useState<DeliverType>({
    letter: false,
    parcel: false,
    ems: false,
  });
  const [offlineCash, setOfflineCash] = useState<boolean>(false);
  const [offlineStamp, setOfflineStamp] = useState<boolean>(false);
  const [unitCode, setUnitCode] = useState<string>("");
  const [subValueCenterCode, setSubValueCenterCode] = useState<string>("");
  const [valueCenterCode, setValueCenterCode] = useState<string>("");
  const [cash, setCash] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);

  useEffect(() => {
    console.log({
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
    });
  }, [
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
  ]);

  return (
    <section className="grid place-items-center h-screen ">
      <div className="grid place-items-center p-4 border-black border w-full lg:w-1/2">
        <Heading />
        {screen === 0 && (
          <Screen0
            setOfficeType={setOfficeType}
            setCompany={setCompany}
            setCustomFee={setCustomFee}
            setSubValue={setSubValue}
            setLocationName={setLocationName}
            setLocationId={setLocationId}
            setIpsCode={setIpsCode}
          />
        )}
        {screen === 1 && (
          <Screen1
            setDeliverTypes={setDeliverTypes}
            setOfflineCash={setOfflineCash}
            setOfflineStamp={setOfflineStamp}
          />
        )}
        {screen === 2 && (
          <Screen2
            setUnitCode={setUnitCode}
            setSubValueCenterCode={setSubValueCenterCode}
            setValueCenterCode={setValueCenterCode}
            setCash={setCash}
            setStock={setStock}
          />
        )}
        <div className="w-full grid place-items-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32"
            onClick={() => {
              if (screen < 3) {
                if (screen === 0) {
                  if (
                    officeType &&
                    company &&
                    subValueCenter &&
                    locationName &&
                    locationId &&
                    ipscode
                  ) {
                    setScreen(screen + 1);
                  } else {
                    alert("Please fill all the fields");
                  }
                }
                if (screen === 1) {
                  if (Object.values(deliverTypes).includes(true)) {
                    setScreen(screen + 1);
                  } else {
                    alert("Please select at least one deliver type");
                  }
                }
                if (screen === 2) {
                  if (unitCode && subValueCenterCode && valueCenterCode) {
                    setScreen(screen + 1);
                  } else {
                    alert("Please fill all the fields");
                  }
                }
              } else {
                console.log({
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
                });
              }
            }}
          >
            {screen < 3 ? "Next" : "Submit"}
          </button>
        </div>
      </div>
    </section>
  );
}
