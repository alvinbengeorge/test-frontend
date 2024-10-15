"use client";
import Heading from "../components/heading";
import { useEffect, useState } from "react";
import { DeliverType, PostGlobalConfig } from "../types";
import Screen0 from "../components/screen0";
import Screen1 from "../components/screen1";
import Screen2 from "@/components/screen2";
import Summary from "@/components/summary";

export default function Home() {
  const [screen, setScreen] = useState<number>(0);
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
  const [postGlobalInstalled, setPostGlobalInstalled] =
    useState<boolean>(false);
  const [postGlobalConfig, setPostGlobalConfig] = useState<PostGlobalConfig>({
    boxKey: false,
    eBill: false,
    EMO: false,
  });

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
      unitCode,
      subValueCenterCode,
      valueCenterCode,
      cash,
      stock,
      postGlobalInstalled,
      postGlobalConfig,
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
    unitCode,
    subValueCenterCode,
    valueCenterCode,
    cash,
    stock,
    postGlobalInstalled,
    postGlobalConfig,
  ]);

  return (
    <section className="grid place-items-center h-screen">
      <div className="grid place-items-center p-4 border-black border w-full lg:w-1/2 rounded-2xl bg-slate-100">
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
            setPostGlobalInstalled={setPostGlobalInstalled}
            setPostGlobalConfig={setPostGlobalConfig}
            postGlobalInstalled={postGlobalInstalled}
          />
        )}
        {screen === 3 && (
          <Summary
            officeType={officeType}
            company={company}
            customFee={customFee}
            subValueCenter={subValueCenter}
            locationName={locationName}
            locationId={locationId}
            ipscode={ipscode}
            deliverTypes={deliverTypes}
            offlineCash={offlineCash}
            offlineStamp={offlineStamp}
            unitCode={unitCode}
            subValueCenterCode={subValueCenterCode}
            valueCenterCode={valueCenterCode}
            cash={cash}
            stock={stock}
            postGlobalInstalled={postGlobalInstalled}
            postGlobalConfig={postGlobalConfig}
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
                  if (
                    unitCode &&
                    subValueCenterCode &&
                    valueCenterCode &&
                    cash &&
                    stock &&
                    postGlobalInstalled &&
                    Object.values(postGlobalConfig).includes(true)
                  ) {
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
                  postGlobalInstalled,
                  postGlobalConfig,
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
