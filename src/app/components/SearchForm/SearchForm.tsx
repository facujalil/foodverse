"use client";

import React, { useState } from "react";
import style from "./SearchForm.module.css";
import { useRouter } from "next/navigation";

function SearchForm() {
  const [searched, setSearched] = useState("");

  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${searched}`);
    setSearched("");
  };

  return (
    <form id={style.searchForm} onSubmit={handleSubmit}>
      <input
        type="search"
        name="search"
        value={searched}
        placeholder="Search recipe..."
        onChange={(e) => setSearched(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
