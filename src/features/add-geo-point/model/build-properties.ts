import type { BusProperties, TrainProperties } from "@/entities";
import type { AddBusDraft, AddTrainDraft } from "./type";

const defaultTransport = () => ({
  ExtrLdD1: 0,
  ExtrLdA1: 0,
  ExtrLdD2: "",
  ExtrLdA2: "",
  ExtrLdD3: "",
  ExtrLdA3: "",
  ExtrLdTot: 0,
  NewLdRel: "",
  NewLd: "",
  ExtrLdRel: "",
  CurLdSt: "",
  CurLdRelSt: "",
  ExtrLdSt: "",
  ExtrLdRelSt: "",
  NewLdSt: "",
  NewLdRelSt: "",
  DistOnFoot: "",
  TimeOnFoot: "",
  AvgCurLdRp: "",
  AvgCurLdBT: "",
  AvgNewLdRp: "",
  AvgNewLdBT: "",
  PaintPoint: true,
  AvlbOnFoot: true,
  CurLd: "",
  CurLdRel: "",
});

export const buildTrainProperties = (args: {
  draft: AddTrainDraft;
  lng: number;
  lat: number;
}): TrainProperties => {
  const { draft, lng, lat } = args;

  return {
    ...defaultTransport(),
    ...draft.data,
    latitude: lat,
    longitude: lng,
  };
};

export const buildBusProperties = (args: {
  draft: AddBusDraft;
  lng: number;
  lat: number;
}): BusProperties => {
  const { draft, lng, lat } = args;

  return {
    ...defaultTransport(),
    ...draft.data,
    x: String(lat),
    y: String(lng),
  };
};
