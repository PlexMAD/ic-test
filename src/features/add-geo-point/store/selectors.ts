import useAddGeoPointStore from "./useAddGeoPointStore";

export const useUserPoints = () => useAddGeoPointStore((s) => s.userPoints);

export const useAddMode = () => useAddGeoPointStore((s) => s.mode);

export const useAddDraft = () => useAddGeoPointStore((s) => s.draft);
