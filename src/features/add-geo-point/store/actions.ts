import type { AddGeoPointActions, AddGeoPointState } from "./type";
import useAddGeoPointStore from "./useAddGeoPointStore";

export const getUserPoints = (): AddGeoPointState["userPoints"] =>
  useAddGeoPointStore.getState().userPoints;

export const getAddMode = (): AddGeoPointState["mode"] =>
  useAddGeoPointStore.getState().mode;

export const startAdding = (
  draft: Parameters<AddGeoPointActions["startAdding"]>[0],
) => useAddGeoPointStore.getState().startAdding(draft);

export const cancelAdding = () => useAddGeoPointStore.getState().cancelAdding();

export const placeAt = (lng: number, lat: number) =>
  useAddGeoPointStore.getState().placeAt(lng, lat);

export const removePoint = (id: string) =>
  useAddGeoPointStore.getState().removePoint(id);

export const clearAll = () => useAddGeoPointStore.getState().clearAll();
