"use client";
import useSWR from "swr";


export const useMovieQuery = (search) => {
  return useSWR(`movie-query-${search}`, async () => {
    if(search.length < 3){
      throw new Error("Minimum 3 caractères !")
    }

    const apiKey = localStorage.getItem("omdbApiKey");

    if(!apiKey){
      throw new Error("API KEY invalid")
    }

    const url = new URL("http://www.omdbapi.com")
    url.searchParams.set("apiKey", search);

    url.searchParams.set("apiKey", apiKey); 
    url.searchParams.set("s", search); 

    const json = await fetch(url.toString()).then((res)=>res.json());
    return json;
  })
}




