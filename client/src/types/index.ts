export interface CheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export interface DropdownProps {
  label: string;
  options: string[];
  onSelect: (value: string) => void;
}

export interface InputBoxProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export interface DeliverType {
  letter: boolean;
  parcel: boolean;
  ems: boolean;
}

export interface PostGlobalConfig {
  boxKey: boolean;
  eBill: boolean;
  EMO: boolean;
}

export interface Screen0Props {
  setOfficeType: (value: string) => void;
  setCompany: (value: string) => void;
  setCustomFee: (value: boolean) => void;
  setSubValue: (value: string) => void;
  setLocationName: (value: string) => void;
  setLocationId: (value: string) => void;
  setIpsCode: (value: string) => void;
}

export interface Screen1Props {
  setDeliverTypes: (
    value: DeliverType | ((prev: DeliverType) => DeliverType)
  ) => void;
  setOfflineCash: (value: boolean) => void;
  setOfflineStamp: (value: boolean) => void;
}

export interface Screen2Props {
  setUnitCode: (value: string) => void;
  setSubValueCenterCode: (value: string) => void;
  setValueCenterCode: (value: string) => void;
  setCash: (value: number) => void;
  setStock: (value: number) => void;
  setPostGlobalInstalled: (value: boolean) => void;
  setPostGlobalConfig: (
    value: PostGlobalConfig | ((prev: PostGlobalConfig) => PostGlobalConfig)
  ) => void;
  postGlobalInstalled: boolean;
}

export interface SummaryProps {
    officeType: string;
    company: string;
    customFee: boolean;
    subValueCenter: string;
    locationName: string;
    locationId: string;
    ipscode: string;
    deliverTypes: DeliverType;
    offlineCash: boolean;
    offlineStamp: boolean;
    unitCode: string;
    subValueCenterCode: string;
    valueCenterCode: string;
    cash: number;
    stock: number;
    postGlobalInstalled: boolean;
    postGlobalConfig: PostGlobalConfig;
}