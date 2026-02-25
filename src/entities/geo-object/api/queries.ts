import axios from "axios";

export const metroQuery = {
  queryKey: ["metro"],
  queryFn: async () => {
    const result = await axios.get("/api/metro.json");
    return result.data;
  },
};

export const mckQuery = {
  queryKey: ["mck"],
  queryFn: async () => {
    const result = await axios.get("/api/mck.json");
    return result.data;
  },
};

export const mcdQuery = {
  queryKey: ["mcd"],
  queryFn: async () => {
    const result = await axios.get("/api/mcd.json");
    return result.data;
  },
};

export const disctrictsQuery = {
  queryKey: ["disctricts"],
  queryFn: async () => {
    const result = await axios.get("/api/district.json");
    return result.data;
  },
};

export const streetsQuery = {
  queryKey: ["streets"],
  queryFn: async () => {
    const result = await axios.get("/api/streets.json");
    return result.data;
  },
};

export const busQuery = {
  queryKey: ["bus"],
  queryFn: async () => {
    const result = await axios.get("/api/stops.json");
    return result.data;
  },
};