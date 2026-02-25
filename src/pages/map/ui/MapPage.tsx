import {
  busQuery,
  disctrictsQuery,
  mcdQuery,
  mckQuery,
  metroQuery,
  streetsQuery,
} from "@/entities";
import { DeckGL } from "@deck.gl/react";
import { useQueries } from "@tanstack/react-query";
import "maplibre-gl/dist/maplibre-gl.css";
import { Map } from "react-map-gl/maplibre";
import { buildMapLayers } from "../model/layers";
import { ObjectInfo } from "@/widgets";

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

  const layers = buildMapLayers({ disctricts, streets, metro, mck, mcd, bus });

  return (
    <div style={{ height: "100vh" }}>
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller layers={layers}>
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
        <ObjectInfo />
      </DeckGL>
    </div>
  );
};
