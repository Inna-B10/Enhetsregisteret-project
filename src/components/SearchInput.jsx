import { GetKommuner } from './GetKommuner'
import { SaveSearch } from './SaveSearch'

function SearchInput({ handleSearch, filters, updateFilters, resetFilters }) {
  return (
    <>
      <div>
        Bedriftsnavn:{' '}
        <input
          type='text'
          value={filters.bedriftName}
          placeholder='Bedriftsnavn'
          onChange={(e) => updateFilters({ bedriftName: e.target.value })}
        />
      </div>
      <div>
        <GetKommuner filters={filters} updateFilter={updateFilters} />
      </div>
      <div>
        Organisasjonsnummer:{' '}
        <input
          type='text'
          value={filters.organisasjonsnummer}
          placeholder='Organisasjonsnummer'
          onChange={(e) =>
            updateFilters({ organisasjonsnummer: e.target.value })
          }
        />
      </div>
      <div>
        Registreringsdato fra:{' '}
        <input
          type='text'
          value={filters.fraRegistreringsdato}
          placeholder='yyyy-mm-dd'
          onChange={(e) =>
            updateFilters({ fraRegistreringsdato: e.target.value })
          }
        />
        til:{' '}
        <input
          type='text'
          value={filters.tilRegistreringsdato}
          placeholder='yyyy-mm-dd'
          onChange={(e) =>
            updateFilters({ tilRegistreringsdato: e.target.value })
          }
        />
      </div>
      <div>
        Konkurs:{' '}
        <input
          type='radio'
          name='konkurs'
          value='konkursYes'
          onChange={() => updateFilters({ konkurs: 'konkursYes' })}
          checked={filters.konkurs === 'konkursYes' ? true : false}
        />{' '}
        Ja
        <input
          type='radio'
          name='konkurs'
          value='konkursNo'
          onChange={() => updateFilters({ konkurs: 'konkursNo' })}
          checked={filters.konkurs === 'konkursNo' ? true : false}
        />{' '}
        Nei
        <input
          type='radio'
          name='konkurs'
          value='konkursAll'
          onChange={() => updateFilters({ konkurs: 'konkursAll' })}
          checked={filters.konkurs === 'konkursAll' ? true : false}
        />{' '}
        Begge
      </div>
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
