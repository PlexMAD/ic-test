import type { AddGeoPointDraft, UserGeoPoint } from "../model/type";

export type AddMode = "idle" | "placing";

export type AddGeoPointState = {
  userPoints: UserGeoPoint[];
  mode: AddMode;
  draft: AddGeoPointDraft | null;
};

export type AddGeoPointActions = {
  startAdding: (draft: AddGeoPointDraft) => void;
  cancelAdding: () => void;
  placeAt: (lng: number, lat: number) => void;
  removePoint: (id: string) => void;
  clearAll: () => void;
};

export type AddGeoPointStore = AddGeoPointState & AddGeoPointActions;
