import { create, type StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import type { GeoObjectInfoActions, GeoObjectInfoState } from "./type";

type GeoObjectInfoStoreType = GeoObjectInfoState & GeoObjectInfoActions;

const GeoObjectInfoStore: StateCreator<
  GeoObjectInfoStoreType,
  [["zustand/devtools", never]]
> = (set) => ({
  geoObjectInfo: null,
  updateGeoObjectInfo: (geoObjectInfo) =>
    set(
      () => ({
        geoObjectInfo,
      }),
      false,
      "updateGeoInfo",
    ),
});

const useGeoObjectInfoStore = create<GeoObjectInfoStoreType>()(
  devtools(GeoObjectInfoStore),
);

export const useGeoObjectInfo = () =>
  useGeoObjectInfoStore((state) => state.geoObjectInfo);

export const updateGeoObjectInfo = (
  geoObjectInfo: GeoObjectInfoState["geoObjectInfo"],
) => useGeoObjectInfoStore.getState().updateGeoObjectInfo(geoObjectInfo);
