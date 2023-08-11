"use client";

import { useState } from "react";
import { Input } from "../ui/input";

export default function SearchUser() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <Input
      type="text"
      placeholder="Search..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className="bg-dark-2 border-none text-light-1"
    />
  );
}
