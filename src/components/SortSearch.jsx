import styles from './SortSearch.module.css'

export function SortSearch({ filters, updateFilters }) {
  const sortBy = [
    'Navn',
    'Organisasjonsnummer',
    'Antall ansatte',
    'Registreringsdato',
  ]
  return (
    <>
      <div className={styles.breakPoint}>
        <div>Sortering: </div>
        <select
          className={styles.select}
          name='sortBy'
          value={filters.sortBy}
          onChange={(e) => updateFilters({ sortBy: e.target.value })}>
          {sortBy.map((opt, index) => {
            return (
              <option key={index} data={opt}>
                {opt}
              </option>
            )
          })}
        </select>
        <div className={styles.spanButtons}>
          <input
            type='radio'
            name='ASC'
            value='ASC'
            onChange={() => updateFilters({ sortDirection: 'ASC' })}
            checked={filters.sortDirection === 'ASC' ? true : false}
          />
          <span>Stigende</span>
          <input
            type='radio'
            name='DESC'
            value='DESC'
            onChange={() => updateFilters({ sortDirection: 'DESC' })}
            checked={filters.sortDirection === 'DESC' ? true : false}
          />
          <span>Synkende</span>
        </div>
      </div>
    </>
  )
}
