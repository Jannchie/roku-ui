import "./style.css";
import classnames from "classnames";
import { useState, Fragment, ReactNode } from "react";
export type RComboboxProps<T extends { id: number; name: string }> = {
  className?: string;
  notFoundContent?: ReactNode;
  data: T[];
};

export function RCombobox<D extends { id: number; name: string }>({
  data,
  notFoundContent = "No results found",
}: RComboboxProps<D>) {
  const [selected, setSelected] = useState(data[0]);
  const [query, setQuery] = useState("");
  const filteredData =
    query === ""
      ? data
      : data.filter((data) =>
          data.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div>
      <div className="r-combobox">
        <div className="r-text-field-wrapper r-text-field-border">
          <input
            className={classnames("r-text-field")}
            // displayValue={(person: any) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="r-combobox-btn">
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>

        <div className="r-combobox-options">
          {filteredData.length === 0 && query !== "" ? (
            <div className="r-combobox-not-found">{notFoundContent}</div>
          ) : (
            filteredData.map((d) => <div key={d.id}></div>)
          )}
        </div>
      </div>
    </div>
  );
}
