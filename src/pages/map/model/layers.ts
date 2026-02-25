// src/pages/map/model/layers.ts
import { updateGeoObjectInfo } from "@/widgets/geoObject";
import type { Layer } from "@deck.gl/core";
import { GeoJsonLayer } from "@deck.gl/layers";

export const buildMapLayers = ({
  disctricts,
  streets,
  metro,
  mck,
  mcd,
  bus
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any): Layer[] => {
  return [
    new GeoJsonLayer({
      id: "district-layer",
      data: disctricts,
      pickable: true,
      pointType: "circle",
      getFillColor: [59, 130, 246, 61],
      getLineColor: [37, 99, 235, 180],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo({
          kind: "district",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "streets-layer",
      data: streets,
      pickable: true,
      getLineColor: [75, 85, 99, 180],
      lineWidthMinPixels: 1.5,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo({
          kind: "street",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "metro-layer",
      data: metro,
      pickable: true,
      pointType: "circle",
      getPointRadius: 40,
      getFillColor: [220, 38, 38, 230],
      getLineColor: [255, 255, 255, 255],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo({
          kind: "train",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "mck-layer",
      data: mck,
      pickable: true,
      pointType: "circle",
      getPointRadius: 40,
      getFillColor: [249, 115, 22, 230],
      getLineColor: [255, 255, 255, 255],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo({
          kind: "train",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "mcd-layer",
      data: mcd,
      pickable: true,
      pointType: "circle",
      getPointRadius: 40,
      getFillColor: [234, 179, 8, 230],
      getLineColor: [255, 255, 255, 255],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo({
          kind: "train",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "bus-layer",
      data: bus,
      pickable: true,
      pointType: "circle",
      getPointRadius: 15,
      getFillColor: [50, 19, 200, 230],
      getLineColor: [255, 255, 255, 255],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo({
          kind: "bus",
          info: pickingInfo.object?.properties,
        });
      },
    }),
  ];
};
