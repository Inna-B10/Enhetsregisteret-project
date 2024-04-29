import { GetKommuner } from './GetKommuner'
import { SaveSearch } from './SaveSearch'
import styles from './SearchImput.module.css'
import { SearchRadioComp } from './SearchRadioComp'

function SearchInput({ handleSearch, filters, updateFilters, resetFilters }) {
  return (
    <>
      {/* ------------------------------ Bedriftsnavn */}
      <div className={styles.breakPoint}>
        <div>Bedriftsnavn: </div>
        <div>
          <input
            type='text'
            value={filters.bedriftName}
            placeholder='Bedriftsnavn'
            onChange={(e) => updateFilters({ bedriftName: e.target.value })}
          />
        </div>
      </div>
      {/* --------------------------- Organisasjonsnummer */}
      <div className={styles.breakPoint}>
        <div>Organisasjonsnummer: </div>
        <div>
          <input
            type='text'
            value={filters.organisasjonsnummer}
            placeholder='Organisasjonsnummer'
            onChange={(e) =>
              updateFilters({ organisasjonsnummer: e.target.value })
            }
          />
        </div>
      </div>
      {/* -------------------------------- Kommuner */}
      <div className={styles.breakPoint}>
        <GetKommuner filters={filters} updateFilter={updateFilters} />
      </div>
      {/* ---------------------------- Registreringsdato */}
      <div className={styles.breakPoint}>
        <div>Registreringsdato fra: </div>
        <div className={styles.fra}>
          <input
            type='text'
            className={styles.inputDate}
            value={filters.fraRegistreringsdato}
            placeholder='yyyy-mm-dd'
            onChange={(e) =>
              updateFilters({ fraRegistreringsdato: e.target.value })
            }
          />
        </div>
        <div>til: </div>
        <div className={styles.til}>
          <input
            type='text'
            className={styles.inputDate}
            value={filters.tilRegistreringsdato}
            placeholder='yyyy-mm-dd'
            onChange={(e) =>
              updateFilters({ tilRegistreringsdato: e.target.value })
            }
          />
        </div>
      </div>
      <SearchRadioComp filters={filters} updateFilters={updateFilters} />
      <div>
        <button
          onClick={() => {
            {
              handleSearch(filters)
              SaveSearch(filters)
            }
          }}>
          Søk
        </button>
        <button onClick={() => resetFilters()}>Nullstill</button>
      </div>
    </>
  )
}

export default SearchInput
