import {
  disctrictsQuery,
  mcdQuery,
  mckQuery,
  metroQuery,
  streetsQuery,
  type TrainProperties,
} from "@/entities/geoObject";
import {
  ObjectInfo,
  updateGeoObjectInfo,
  useGeoObjectInfo,
} from "@/widgets/geoObject";
import { GeoJsonLayer } from "@deck.gl/layers";
import { DeckGL } from "@deck.gl/react";
import { useQueries } from "@tanstack/react-query";
import "maplibre-gl/dist/maplibre-gl.css";
import { useEffect } from "react";
import { Map } from "react-map-gl/maplibre";

const INITIAL_VIEW_STATE = {
  longitude: 37.6176,
  latitude: 55.7558,
  zoom: 10,
};

export const MapPage = () => {
  const data = useQueries({
    queries: [disctrictsQuery, streetsQuery, metroQuery, mckQuery, mcdQuery],
  });

  const [disctricts, streets, metro, mck, mcd] = data.map((d) => d.data);

  const layers = [
    new GeoJsonLayer({
      id: "district-layer",
      data: disctricts,
      pickable: true,
      pointType: "circle",
      getFillColor: [59, 130, 246, 61],
      getLineColor: [37, 99, 235, 180],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo(pickingInfo.object);
      },
    }),
    new GeoJsonLayer({
      id: "streets-layer",
      data: streets,
      pickable: true,
      pointType: "circle",
      getLineColor: [75, 85, 99, 180],
      lineWidthMinPixels: 1,
      onClick: (pickingInfo) => {
        updateGeoObjectInfo(pickingInfo.object);
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
          info: pickingInfo.object.properties as TrainProperties,
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
          info: pickingInfo.object.properties as TrainProperties,
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
          info: pickingInfo.object.properties as TrainProperties,
        });
      },
    }),
  ];

  const dataInfo = useGeoObjectInfo();

  useEffect(() => {
    if (dataInfo?.kind === "train") {
      console.log(dataInfo.info, "stored");
    }
  }, [dataInfo]);

  return (
    <div style={{ height: "100vh" }}>
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller layers={layers}>
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
        <ObjectInfo />
      </DeckGL>
    </div>
  );
};
