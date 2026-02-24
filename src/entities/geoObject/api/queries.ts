import axios from "axios";

export const metroQuery = {
  queryKey: ["metro"],
  queryFn: async () => {
    const result = await axios.get("/api/metro.json");
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
