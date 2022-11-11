import React from "react";
import { useActions } from "../hooks/actions";
import { IRepo } from "../models/models";

export function RepoCard({ repo }: { repo: IRepo }) {
    
  const { addFovourite } = useActions();

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    addFovourite(repo.html_url);
  };

  return (
    <div className="border py-3 px-5 rounded mb-2 hover:sahdow-md hover:gb-gray-100 transition-all">
      <a href={repo.html_url} target="_blanck">
        <h2 className="text-lg font-bold">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold">{repo.forks}</span>
          <br />
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>

        <button
          className="py-2 px-4 bg-yellow-400 rounded hover:shadow-md transition-all"
          onClick={addToFavourite}
        >
          Add
        </button>
      </a>
    </div>
  );
}
