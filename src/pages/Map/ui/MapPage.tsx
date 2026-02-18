import { GeoJsonLayer } from "@deck.gl/layers";
import { DeckGL } from "@deck.gl/react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import "maplibre-gl/dist/maplibre-gl.css";
import { Map } from "react-map-gl/maplibre";

const INITIAL_VIEW_STATE = {
  longitude: 37.6176,
  latitude: 55.7558,
  zoom: 10,
};

export const MapPage = () => {
  const { data: metros } = useQuery({
    queryKey: ["metro"],
    queryFn: async () => {
      const result = await axios.get("/api/metro.json");
      return result.data;
    },
  });

  console.log(metros);

  const layers = [
    new GeoJsonLayer({
      id: "metro-layer",
      data: metros,
      pickable: true,
      pointType: "circle",
      getPointRadius: 50,
      getFillColor: [255, 0, 0, 180],
      getLineColor: [0, 0, 0, 200],
      lineWidthMinPixels: 1,
    }),
  ];

  return (
    <div style={{ height: "100vh" }}>
      <DeckGL initialViewState={INITIAL_VIEW_STATE} controller layers={layers}>
        <Map mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" />
      </DeckGL>
    </div>
  );
};
