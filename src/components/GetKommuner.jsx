import { useFetch } from '../hooks/useFetch'
import styles from './GetKommuner.module.css'

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
      <div className={styles.title}>Kommune navn: </div>
      <div className={styles.inputFieldList}>
        <div>
          <select
            name='districtName'
            className={styles.navn}
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
        </div>
        <div className={styles.rowCol}>
          <div className={styles.title}>Kommune nummer: </div>
          <div>
            <input
              name='districtCode'
              className={styles.code}
              type='text'
              value={filters.kommuneCode}
              placeholder='####'
              onChange={(e) => updateFilter({ kommuneCode: e.target.value })}
            />
          </div>
        </div>
      </div>
    </>
  )
}
