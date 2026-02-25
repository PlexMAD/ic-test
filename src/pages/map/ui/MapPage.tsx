import {
  busQuery,
  disctrictsQuery,
  mcdQuery,
  mckQuery,
  metroQuery,
  streetsQuery,
} from "@/entities";
import {
  AddGeoPointButton,
  placeAt,
  useAddMode,
  useUserPoints,
} from "@/features";
import { ObjectInfo } from "@/widgets";
import { DeckGL } from "@deck.gl/react";
import { useQueries } from "@tanstack/react-query";
import "maplibre-gl/dist/maplibre-gl.css";
import { Map } from "react-map-gl/maplibre";
import { buildMapLayers } from "../model/layers";

const INITIAL_VIEW_STATE = {
  longitude: 37.6176,
  latitude: 55.7558,
  zoom: 10,
};

export const MapPage = () => {
  const data = useQueries({
    queries: [
      disctrictsQuery,
      streetsQuery,
      metroQuery,
      mckQuery,
      mcdQuery,
      busQuery,
    ],
  });

  const [disctricts, streets, metro, mck, mcd, bus] = data.map((d) => d.data);

  const addMode = useAddMode();
  const userPoints = useUserPoints();

  const layers = buildMapLayers({
    disctricts,
    streets,
    metro,
    mck,
    mcd,
    bus,
    userPoints,
    isPlacing: addMode === "placing",
  });

  return (
    <div className="relative h-screen w-full">
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
        <AddGeoPointButton />
      </div>
      {addMode === "placing" && (
        <div className="absolute bottom-10 right-17/40 z-10 bg-white px-3 py-2 rounded shadow text-sm">
          Кликните на карте, чтобы поставить точку
        </div>
      )}
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller
        layers={layers}
        onClick={(info) => {
          if (addMode !== "placing") return;

          const c = info?.coordinate;
          if (!c) return;

          placeAt(c[0], c[1]);
        }}
      >
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />

        <ObjectInfo />
      </DeckGL>
    </div>
  );
};
