import type {
  BusProperties,
  DistrictProperties,
  StreetProperties,
  TrainProperties,
} from "@/entities";

type GeoObjectInfo =
  | { kind: "bus"; info: BusProperties }
  | { kind: "district"; info: DistrictProperties }
  | { kind: "street"; info: StreetProperties }
  | { kind: "train"; info: TrainProperties }
  | null;

export type GeoObjectInfoState = {
  geoObjectInfo: GeoObjectInfo;
};

export type GeoObjectInfoActions = {
  updateGeoObjectInfo: (geoObjectInfo: GeoObjectInfo) => void;
};
