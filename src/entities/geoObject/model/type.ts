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

type TransportProperties = {
  ExtrLdD1: number;
  ExtrLdA1: number;
  ExtrLdD2: string;
  ExtrLdA2: string;
  ExtrLdD3: string;
  ExtrLdA3: string;
  ExtrLdTot: number;
  NewLdRel: string;
  NewLd: string;
  ExtrLdRel: string;
  CurLdSt: string;
  CurLdRelSt: string;
  ExtrLdSt: string;
  ExtrLdRelSt: string;
  NewLdSt: string;
  NewLdRelSt: string;
  DistOnFoot: string;
  TimeOnFoot: string;
  AvgCurLdRp: string;
  AvgCurLdBT: string;
  AvgNewLdRp: string;
  AvgNewLdBT: string;
  PaintPoint: boolean;
  AvlbOnFoot: boolean;

  fid: number;
  icon: string;

  CurLd: string;
  CurLdRel: string;
};

type TrainProperties = {
  name_station: string;
  name_line: string;
  no_line: string;
  type: "М" | "МЦК" | "МЦД";
  status: "Действующая" | "Планируемая";
  transfer: boolean;
  administrative_district: AdministrativeDistrictName;
  area: DistrictName;
} & TransportProperties;

type BusProperties = {
  name_mpv: string;
  rayon: DistrictName;
  ao: AdministrativeDistrictName;
  address_mpv: string;
  y: string;
  x: string;
  marshrut: string;
  in_date: number;
  off_date: number;
  iconWidth: number;
  iconHeight: number;
} & TransportProperties;

type RoadDirection = "T" | "F" | "Any";
type IsFerryFlag = "T" | "F";
type TypeLink = "Обычное звено";

type StreetProperties = {
  EdgeId: number;
  ST_NAME: string | null;
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

export type BusObject = GeoObjectBase<BusProperties>;

export type StreetObject = GeoObjectBase<StreetProperties>;
