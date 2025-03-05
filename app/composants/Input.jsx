"use client";
import { Fragment } from "react";
import { useQueryState } from "nuqs";
import { useDebounceValue } from "../hooks/useDebounceValue";
import { useApiKeyRequired } from "../hooks/useApiKeyRequired";
import { useMovieQuery } from "../hooks/useMovieQuery";

export const Input = () => {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" }); // Évite un undefined
  const debouncedSearch = useDebounceValue(search, 500);
  useApiKeyRequired();
  const { data, error, isLoading } = useMovieQuery(debouncedSearch);

  return (
    <Fragment>
      <form className="w-6/12">
        <fieldset className="p-3 rounded-md border-gray-50 opacity-80 border-2 font-bold">
          <legend className="font-bold opacity-70 text-white text-xl cursor-default">
            Find your movie
          </legend>
          <label className="input input-bordered flex items-center gap-2">
            <input
              value={search || ""}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="grow"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </fieldset>
      </form>

      <div className="text-white opacity-70 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {error && <p>Error : {error.message}</p>}
        {isLoading && <span className="loading loading-bars loading-lg"></span>}
        {data?.Search?.length > 0 &&
          data.Search.map((movie) => (
            <div className="flex flex-col gap-4" key={movie.imdbID}>
              <img
                src={movie.Poster}
                alt={`${movie.Title}'s poster`}
                className="w-full h-full object-cover rounded-md shadow aspect-[2/3]"
              />
              <div>
                <p className="text-sm font-medium">{movie.Title}</p>
                <p className="text-xs text-neutral-content font-medium">
                  {movie.Year} | {movie.Type}
                </p>
              </div>
            </div>
          ))}
      </div>
    </Fragment>
  );
};
