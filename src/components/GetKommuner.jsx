import { useFetch } from '../hooks/useFetch'

const URL_Kommuner_API = 'https://data.ssb.no/api/klass/v1/versions/1710'

export function GetKommuner({ filters, updateFilter }) {
  const { data, error, isLoading } = useFetch(URL_Kommuner_API)

  return (
    <>
      {isLoading ? (
        'Loading data'
      ) : error ? (
        'Kunne ikke hente kommuner data'
      ) : !data ? (
        'Kunne ikke hente kommuner list'
      ) : (
        <KommunerList
          list={data.classificationItems}
          filters={filters}
          updateFilter={updateFilter}
        />
      )}
    </>
  )
}

function KommunerList({ list, filters, updateFilter }) {
  if (list) {
    if (list.every((obj) => 'name' in obj)) {
      list.sort((a, b) =>
        a.name.localeCompare(b.name, 'no', { sensitivity: 'base' })
      )
    }
  }
  return (
    <>
      Kommune navn:{' '}
      <select
        value={filters.selectedKommune}
        onChange={(e) => {
          updateFilter({
            kommuneCode: e.target.selectedOptions[0].attributes.code.value,
            kommuneName: e.target.value,
            selectedKommune: e.target.value,
          })
        }}>
        <option code={''}></option>
        {list.map((kommune) => {
          return (
            <option key={kommune.code} code={kommune.code}>
              {kommune.name}
            </option>
          )
        })}
      </select>
      Kommune nummer:{' '}
      <input
        type='text'
        value={filters.kommuneCode}
        placeholder='Kommune nummer'
        onChange={(e) => updateFilter({ kommuneCode: e.target.value })}
      />
    </>
  )
}
