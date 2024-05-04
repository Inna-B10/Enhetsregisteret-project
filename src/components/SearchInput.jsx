import { GetKommuner } from './GetKommuner'
import { SaveSearch } from './SaveSearch'
import styles from './SearchInput.module.css'
import { SearchRadioComp } from './SearchRadioComp'
import { SortSearch } from './SortSearch'

function SearchInput({ handleSearch, filters, updateFilters, resetFilters }) {
  return (
    <>
      {/* ------------------------------ Bedriftsnavn */}
      <div className={styles.breakPoint}>
        <div>Bedriftsnavn: </div>
        <div className={styles.inputField}>
          <input
            type='text'
            name='name'
            autoComplete='off'
            value={filters.bedriftName}
            placeholder='Bedriftsnavn'
            onChange={(e) => updateFilters({ bedriftName: e.target.value })}
          />
        </div>
      </div>
      {/* --------------------------- Organisasjonsnummer */}
      <div className={styles.breakPoint}>
        <div>Organisasjonsnummer: </div>
        <div className={styles.inputField}>
          <input
            type='text'
            name='number'
            autoComplete='off'
            value={filters.organisasjonsnummer}
            placeholder='Organisasjonsnummer'
            onChange={(e) =>
              updateFilters({ organisasjonsnummer: e.target.value })
            }
          />
        </div>
      </div>
      {/* ---------------------------- Registreringsdato */}
      <div className={styles.breakPoint}>
        <div>Registreringsdato: </div>
        <div className={styles.inputFieldData}>
          <div className={styles.fra}>
            fra{' '}
            <input
              type='text'
              name='fromDate'
              autoComplete='off'
              value={filters.fraRegistreringsdato}
              placeholder='yyyy-mm-dd'
              onChange={(e) =>
                updateFilters({ fraRegistreringsdato: e.target.value })
              }
            />
          </div>
          <div className={styles.til}>
            til{' '}
            <input
              type='text'
              name='toDate'
              autoComplete='off'
              value={filters.tilRegistreringsdato}
              placeholder='yyyy-mm-dd'
              onChange={(e) =>
                updateFilters({ tilRegistreringsdato: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      {/* -------------------------------- Kommuner */}
      <div className={styles.breakPoint}>
        <GetKommuner filters={filters} updateFilter={updateFilters} />
      </div>
      <SearchRadioComp filters={filters} updateFilters={updateFilters} />
      <SortSearch filters={filters} updateFilters={updateFilters} />
      <div>
        <button
          className={styles.searchButton}
          onClick={() => {
            {
              handleSearch(filters)
              SaveSearch(filters)
            }
          }}>
          Søk
        </button>
        <button className={styles.searchButton} onClick={() => resetFilters()}>
          Nullstill
        </button>
      </div>
    </>
  )
}

export default SearchInput
