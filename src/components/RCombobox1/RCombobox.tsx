import "./style.css";
import classnames from "classnames";
import { useState, Fragment, ReactNode } from "react";
import { Combobox, Transition } from "@headlessui/react";
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
    <Combobox value={selected} onChange={setSelected}>
      <div className="r-combobox">
        <div className="r-text-field-wrapper r-text-field-border">
          <Combobox.Input
            className={classnames("r-text-field")}
            displayValue={(person: any) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="r-combobox-btn">
            <span className="material-symbols-outlined">expand_more</span>
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className="r-combobox-options">
            {filteredData.length === 0 && query !== "" ? (
              <div className="r-combobox-not-found">{notFoundContent}</div>
            ) : (
              filteredData.map((d) => (
                <Combobox.Option
                  key={d.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-primary-500 dark:bg-primary-600 text-zinc-200"
                        : "text-zinc-900 dark:text-zinc-200"
                    }`
                  }
                  value={d}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {d.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active
                              ? "text-zinc-200"
                              : "text-primary-500 dark:text-primary-600"
                          }`}
                        >
                          ✔
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}
