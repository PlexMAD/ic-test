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

  const { data: disctricts } = useQuery({
    queryKey: ["disctricts"],
    queryFn: async () => {
      const result = await axios.get("/api/district.json");
      return result.data;
    },
  });

  const { data: streets } = useQuery({
    queryKey: ["streets"],
    queryFn: async () => {
      const result = await axios.get("/api/streets.json");
      return result.data;
    },
  });

  const layers = [
    new GeoJsonLayer({
      id: "district-layer",
      data: disctricts,
      pickable: true,
      pointType: "circle",
      getFillColor: [59, 130, 246, 60],
      getLineColor: [37, 99, 235, 180],
      lineWidthMinPixels: 1,
    }),
    new GeoJsonLayer({
      id: "streets-layer",
      data: streets,
      pickable: true,
      pointType: "circle",
      getLineColor: [75, 85, 99, 180],
      lineWidthMinPixels: 1,
    }),
    new GeoJsonLayer({
      id: "metro-layer",
      data: metros,
      pickable: true,
      pointType: "circle",
      getPointRadius: 20,
      getFillColor: [234, 88, 12, 220], // оранжевый
      getLineColor: [255, 255, 255, 255],
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
