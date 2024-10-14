"use client";

import { FormEvent, useState } from "react";
import style from "./SearchForm.module.css";
import { useRouter } from "next/navigation";

function SearchForm() {
  const router = useRouter();

  const [input, setInput] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${input}`);
    setInput("");
  };

  return (
    <form className={style.searchForm} onSubmit={handleSearch}>
      <input
        type="search"
        name="search"
        value={input}
        placeholder="Search recipe..."
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
