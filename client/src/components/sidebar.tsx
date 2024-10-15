const Option1 = ({
  setSideBarOption,
  sideBarOption,
}: {
  setSideBarOption: (value: string) => void;
  sideBarOption: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Option 1</h1>
      <div className="grid gap-2 p-2">
        <button
          onClick={() => setSideBarOption("Option1-1")}
          className={
            (sideBarOption === "Option1-1"
              ? "bg-gray-900"
              : "bg-gray-600") + " p-2 rounded-xl"
          }
        >
          Option 1 - 1
        </button>
        <button
          onClick={() => setSideBarOption("Option1-2")}
          className={
            (sideBarOption === "Option1-2"
              ? "bg-gray-900"
              : "bg-gray-600") + " p-2 rounded-xl"
          }
        >
          Option 1 - 2
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
      <h1 className="text-2xl font-bold">Option 2</h1>
      <div className="grid gap-2">
        <button
          onClick={() => setSideBarOption("Option2-1")}
          className={
            (sideBarOption === "Option2-1" ? "bg-gray-900" : "bg-gray-600") +
            " p-2 rounded-xl"
          }
        >
          Option 1 - 1
        </button>
        <button
          onClick={() => setSideBarOption("Option2-2")}
          className={
            (sideBarOption === "Option2-2" ? "bg-gray-900" : "bg-gray-600") +
            " p-2 rounded-xl"
          }
        >
          Option 1 - 2
        </button>
      </div>
    </div>
  );
};

const Option3 = ({
  setSideBarOption,
  sideBarOption,
}: {
  setSideBarOption: (value: string) => void;
  sideBarOption: string;
}) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Option 3</h1>
      <div className="grid gap-2">
        <button
          onClick={() => setSideBarOption("Option3-1")}
          className={
            (sideBarOption === "Option3-1" ? "bg-gray-900" : "bg-gray-600") +
            " p-2 rounded-xl"
          }
        >
          Option 1 - 1
        </button>
        <button
          onClick={() => setSideBarOption("Option3-2")}
          className={
            (sideBarOption === "Option3-2" ? "bg-gray-900" : "bg-gray-600") +
            " p-2 rounded-xl"
          }
        >
          Option 1 - 2
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
        <ul className="space-y-4">
          {headerOption === "Option 1" && (
            <Option1
              setSideBarOption={setSideBarOption}
              sideBarOption={sideBarOption}
            />
          )}
          {headerOption === "Option 2" && (
            <Option2
              setSideBarOption={setSideBarOption}
              sideBarOption={sideBarOption}
            />
          )}
          {headerOption === "Option 3" && (
            <Option3
              setSideBarOption={setSideBarOption}
              sideBarOption={sideBarOption}
            />
          )}
        </ul>
      </div>
    </div>
  );
}
