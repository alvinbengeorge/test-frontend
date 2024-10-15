import Checkbox from "./checkbox";
import { Screen1Props } from "../types";
import { DeliverType } from "../types";

export default function Screen1 ({
    setDeliverTypes,
    setOfflineCash,
    setOfflineStamp,
  }: Screen1Props) {
    return (
      <div className="grid p-4 w-full lg:grid-cols-2 gap-2">
        <div className="border p-2">
          <h1 className="font-bold">This office delivers to</h1>
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