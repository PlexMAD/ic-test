import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";

import { makeId } from "./utils";

import {
  buildBusProperties,
  buildTrainProperties,
} from "../model/build-properties";
import type { AddGeoPointStore } from "./type";

const AddGeoPointStoreCreator: StateCreator<
  AddGeoPointStore,
  [["zustand/devtools", never], ["zustand/persist", unknown]]
> = (set, get) => ({
  userPoints: [],
  mode: "idle",
  draft: null,
  startAdding: (draft) =>
    set(() => ({ draft, mode: "placing" }), false, "addGeoPoint/startAdding"),
  cancelAdding: () =>
    set(
      () => ({ draft: null, mode: "idle" }),
      false,
      "addGeoPoint/cancelAdding",
    ),
  placeAt: (lng, lat) => {
    const { mode, draft } = get();
    if (mode !== "placing" || !draft) return;
    const id = makeId();
    const newPoint =
      draft.kind === "Train"
        ? {
            id,
            source: "user" as const,
            kind: "Train" as const,
            properties: buildTrainProperties({ draft, lng, lat }),
          }
        : {
            id,
            source: "user" as const,
            kind: "Bus" as const,
            properties: buildBusProperties({ draft, lng, lat }),
          };
    set(
      (s) => ({
        userPoints: [...s.userPoints, newPoint],
        mode: "idle",
        draft: null,
      }),
      false,
      "addGeoPoint/placeAt",
    );
  },

  removePoint: (id) =>
    set(
      (s) => ({ userPoints: s.userPoints.filter((p) => p.id !== id) }),
      false,
      "addGeoPoint/removePoint",
    ),

  clearAll: () =>
    set(() => ({ userPoints: [] }), false, "addGeoPoint/clearAll"),
});

const useAddGeoPointStore = create<AddGeoPointStore>()(
  devtools(
    persist(AddGeoPointStoreCreator, {
      name: "user-geo-points",
      version: 1,
      partialize: (s) => ({ userPoints: s.userPoints }),
    }),
    { name: "add-geo-point" },
  ),
);

export default useAddGeoPointStore;
