import type { BusProperties, TrainProperties } from "@/entities";

export type AddablePointKind = "Train" | "Bus";

export type AddTrainDraft = {
  kind: "Train";
  data: Pick<
    TrainProperties,
    | "name_station"
    | "name_line"
    | "no_line"
    | "type"
    | "status"
    | "transfer"
    | "administrative_district"
    | "area"
    | "CurLd"
    | "CurLdRel"
  >;
};

export type AddBusDraft = {
  kind: "Bus";
  data: Pick<
    BusProperties,
    | "name_mpv"
    | "marshrut"
    | "address_mpv"
    | "rayon"
    | "ao"
    | "CurLd"
    | "CurLdRel"
  >;
};

export type AddGeoPointDraft = AddTrainDraft | AddBusDraft;

export type UserTrainPoint = {
  id: string;
  source: "user";
  kind: "Train";
  properties: TrainProperties;
};

export type UserBusPoint = {
  id: string;
  source: "user";
  kind: "Bus";
  properties: BusProperties;
};

export type UserGeoPoint = UserTrainPoint | UserBusPoint;
