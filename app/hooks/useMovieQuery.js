"use client";
import useSWR from "swr";

export const useMovieQuery = (search) => {
  const shouldFetch = search.length >= 3;

  const { data, error, isLoading } = useSWR(
    shouldFetch ? `/api/proxyMovieQuery?search=${search}` : null,
    async (url) => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }

      const json = await response.json();

      if (json.Response === "False") {
        throw new Error(json.Error);
      }

      return json;
    }
  );

  if (!shouldFetch) {
    return {
      data: null,
      error: new Error("Minimum 3 caractères !"),
      isLoading: false,
    };
  }

  return { data, error, isLoading };
};
