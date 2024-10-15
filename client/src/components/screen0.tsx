import React from "react";
import Dropdown from "./dropdown";
import Checkbox from "./checkbox";
import InputBox from "./input_box";
import { Screen0Props } from "../types";

export default function Screen0({
  setOfficeType,
  setCompany,
  setCustomFee,
  setSubValue,
  setLocationName,
  setLocationId,
  setIpsCode,
}: Screen0Props) {
  return (
    <div className="grid p-4 w-full">
      <div className="flex flex-wrap items-center">
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
}
