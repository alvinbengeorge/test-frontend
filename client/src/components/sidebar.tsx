const Option1 = ({
  setSideBarOption,
  sideBarOption,
}: {
  setSideBarOption: (value: string) => void;
  sideBarOption: string;
}) => {
  return (
    <div className={""}>
      <div className="grid gap-2 p-2">
        <button
          onClick={() => setSideBarOption("branches")}
          className={
            (sideBarOption === "branches"
              ? "bg-gray-900"
              : "bg-gray-600") + " p-2 rounded-xl"
          }
        >
          Branches
        </button>
        <button
          onClick={() => setSideBarOption("countries")}
          className={
            (sideBarOption === "countries"
              ? "bg-gray-900"
              : "bg-gray-600") + " p-2 rounded-xl"
          }
        >
          Countries
        </button>
      </div>
    </div>
  );
};

const Option2 = ({
  setSideBarOption,
  sideBarOption,
}: {
  setSideBarOption: (value: string) => void;
  sideBarOption: string;
}) => {
  return (
    <div>
      <div className="grid gap-2 p-2">
        <button
          onClick={() => setSideBarOption("services")}
          className={
            (sideBarOption === "services" ? "bg-gray-900" : "bg-gray-600") +
            " p-2 rounded-xl"
          }
        >
          Services
        </button>
        <button
          onClick={() => setSideBarOption("additional-services")}
          className={
            (sideBarOption === "additional-services" ? "bg-gray-900" : "bg-gray-600") +
            " p-2 rounded-xl"
          }
        >
          Additional Services
        </button>
      </div>
    </div>
  );
};


export default function SideBar({
  headerOption,
  setSideBarOption,
  sideBarOption,
}: {
  headerOption: string;
  setSideBarOption: (value: string) => void;
  sideBarOption: string;
}) {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-2">
        <h1 className="text-xl font-bold capitalize">{headerOption}</h1>
        <ul className="space-y-4">
          {headerOption === "master" && (
            <Option1
              setSideBarOption={setSideBarOption}
              sideBarOption={sideBarOption}
            />
          )}
          {headerOption === "tariff" && (
            <Option2
              setSideBarOption={setSideBarOption}
              sideBarOption={sideBarOption}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
