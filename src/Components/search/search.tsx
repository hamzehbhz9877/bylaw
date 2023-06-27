import { FC, useEffect, useState } from "react";

type Props= {
  onChange: (data: string) => void;
  placeholder?: string;
}

const UseDebouncedEffect = (
  onChange: (data: string) => void,
  delay: number,
  value: string
) => {
  useEffect(() => {
    const handler = setTimeout(() => onChange(value), delay);
    return () => clearTimeout(handler);
  }, [value]);
};

const TableSearch= ({ onChange, placeholder }:Props) => {

  const [search, setSearch] = useState("");

  UseDebouncedEffect(onChange, 500, search);

  return (
    <>
      <div className="position-relative">
        <input
          value={search}
          className="form-control table__search-input"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder={placeholder}
          type="text"
        />
      </div>
    </>
  );
};

export default TableSearch;