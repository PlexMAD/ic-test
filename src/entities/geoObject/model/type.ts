type GeoObjectBase<T extends object> = {
  name: string;
  features: {
    properties: T;
  }[];
};

type DistrictName = string;

type AdministrativeDistrictName = string;

type DistrictProperties = {
  NAME: DistrictName;
  NAME_AO: AdministrativeDistrictName;
};

type TrainProperties = {
  name_station: string;
  name_line: string;
  no_line: string;
  type: "М" | "МЦК" | "МЦД";
  status: "Действующая";
  transfer?: boolean;
  administrative_district: AdministrativeDistrictName;
  area: DistrictName;
};

type RoadDirection = "T" | "F" | "Any";
type IsFerryFlag = "T" | "F";
type TypeLink = "Обычное звено"

type StreetProperties = {
  EdgeId: number;
  ST_NAME: string;
  ST_TYP_BEF?: string;
  ST_NM_BASE?: string;
  ST_NM_CITY?: string;
  FUNC_CLASS?: number;
  ROAD_CATEG?: string;
  F_ZLEV: number;
  T_ZLEV: number;
  TYPE_LINK: TypeLink;
  RoadDirect: RoadDirection;
  RbndStght: number | null;
  RbndBck: number | null;
  Width: number | null;
  IsFerry: IsFerryFlag;
  Style: number;
  U_TURN: number;
  OriginId: string;
  MaxSpdDrct: number;
  AvgSpdDrct: number;
  MaxSpdRvrs: number;
  AvgSpdRvrs: number;
  Foot: 0 | 1;
  Car: 0 | 1;
};

export type DisctrictObject = GeoObjectBase<DistrictProperties>;

export type TrainObject = GeoObjectBase<TrainProperties>;

export type StreetObject = GeoObjectBase<StreetProperties>;
