import './AutoComplete.css'
import { ReactNode, useState } from 'react'
import classNames from 'classnames'
import { TextField } from '../..'
import { BaseProps } from '../../utils/type'

export type RComboboxProps<T extends { id: number, name: string }> = {
  notFoundContent?: ReactNode
  data: T[]
} & BaseProps

export function AutoComplete<D extends { id: number, name: string }> ({
  data,
  id,
  className,
  style,
  notFoundContent = 'No results found',
}: RComboboxProps<D>) {
  const [query, setQuery] = useState('')
  const filteredData = query === ''
    ? data
    : data.filter((d) => d.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(query.toLowerCase().replace(/\s+/g, '')))
  return (
    <div>
      <div id={id} className={classNames('r-combobox', className)} style={style}>
        <div className="r-text-field-wrapper r-text-field-border">
          <TextField
            className={classNames('r-text-field')}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button className="r-combobox-btn" type="button">
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>

        <div className="r-combobox-options">
          {filteredData.length === 0 && query !== ''
            ? (
              <div className="r-combobox-not-found">{notFoundContent}</div>
            )
            : (
              filteredData.map((d) => <div key={d.id} />)
            )}
        </div>
      </div>
    </div>
  )
}
