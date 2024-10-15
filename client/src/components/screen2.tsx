import { Screen2Props } from "../types";
import InputBox from "./input_box";
import Checkbox from "./checkbox";
import { PostGlobalConfig } from "../types";

export default function Screen2({
  setUnitCode,
  setSubValueCenterCode,
  setValueCenterCode,
  setCash,
  setStock,
  setPostGlobalInstalled,
  setPostGlobalConfig,
  postGlobalInstalled,
}: Screen2Props) {
  return (
    <div className="w-full grid gap-2">
      <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-2 w-full">
        <div className="p-2 border">
          <h1 className="font-bold ps-2 underline">Finance Dimension Code</h1>
          <div className="grid">
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
          </div>
        </div>
        <div className="p-2 border">
          <h1 className="font-bold ps-2 underline">
            Authorized Maximum Balance
          </h1>
          <div className="grid">
            <InputBox
              placeholder="Cash"
              onChange={(value: string) => setCash(parseInt(value))}
            />
            <InputBox
              placeholder="Sub Value Center Code"
              onChange={(value: string) => setStock(parseInt(value))}
            />
          </div>
        </div>
      </div>
      <div className="border">
        <Checkbox
          label="Post Global Installed"
          onChange={(checked) => setPostGlobalInstalled(checked)}
        />
        {postGlobalInstalled && (
          <div className="grid p-4">
            <Checkbox
              label="Box key deposite applicable?"
              onChange={(checked) =>
                setPostGlobalConfig((prev: PostGlobalConfig) => ({
                  ...prev,
                  boxKey: checked,
                }))
              }
            />
            <Checkbox
              label="This office uses e-Bill Module"
              onChange={(checked) =>
                setPostGlobalConfig((prev: PostGlobalConfig) => ({
                  ...prev,
                  eBill: checked,
                }))
              }
            />
            <Checkbox
              label="This office uses EMO Module"
              onChange={(checked) =>
                setPostGlobalConfig((prev: PostGlobalConfig) => ({
                  ...prev,
                  EMO: checked,
                }))
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
