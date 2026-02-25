import type { BusProperties, TrainProperties } from "@/entities";
import { updateGeoObjectInfo } from "@/features";
import type { UserGeoPoint } from "@/features/add-geo-point/model/type";
import type { Layer } from "@deck.gl/core";
import { GeoJsonLayer } from "@deck.gl/layers";
import type { Feature, FeatureCollection, GeoJSON, Point } from "geojson";

const toUserPointsGeoJson = (
  points: UserGeoPoint[],
  kind: "Train" | "Bus",
): FeatureCollection<Point, unknown> => {
  const features: Feature<Point, unknown>[] = points
    .filter((p) => p.kind === kind)
    .map((p) => {
      const lng =
        kind === "Train"
          ? (p.properties as TrainProperties).longitude
          : Number((p.properties as BusProperties).y);
      const lat =
        kind === "Train"
          ? (p.properties as TrainProperties).latitude
          : Number((p.properties as BusProperties).x);

      return {
        type: "Feature",
        geometry: { type: "Point", coordinates: [lng, lat] },
        properties: p.properties,
      };
    });

  return { type: "FeatureCollection", features };
};

export const buildMapLayers = ({
  disctricts,
  streets,
  metro,
  mck,
  mcd,
  bus,
  isPlacing,
  userPoints,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}: any & { userPoints: UserGeoPoint[]; isPlacing: boolean }): Layer[] => {
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
        if (isPlacing) return;
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
        if (isPlacing) return;
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
        if (isPlacing) return;
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
        if (isPlacing) return;
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
        if (isPlacing) return;
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
        if (isPlacing) return;
        updateGeoObjectInfo({
          kind: "bus",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "user-train-layer",
      data: toUserPointsGeoJson(userPoints, "Train") as GeoJSON,
      pickable: true,
      pointType: "circle",
      getPointRadius: 40,
      getFillColor: [16, 185, 129, 230],
      getLineColor: [255, 255, 255, 255],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        if (isPlacing) return;
        updateGeoObjectInfo({
          kind: "train",
          info: pickingInfo.object?.properties,
        });
      },
    }),
    new GeoJsonLayer({
      id: "user-bus-layer",
      data: toUserPointsGeoJson(userPoints, "Bus") as GeoJSON,
      pickable: true,
      pointType: "circle",
      getPointRadius: 15,
      getFillColor: [147, 51, 234, 230],
      getLineColor: [255, 255, 255, 255],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        if (isPlacing) return;
        updateGeoObjectInfo({
          kind: "bus",
          info: pickingInfo.object?.properties,
        });
      },
    }),
  ];
};
