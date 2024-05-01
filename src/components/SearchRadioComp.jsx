import styles from './SearchRadio.module.css'
export function SearchRadioComp({ filters, updateFilters }) {
  const typeRadio = [
    'konkurs',
    'underTvangsavviklingEllerTvangsopplosning',
    'underAvvikling',
    /*[TODO]*/
    // 'registrertIMvaregisteret',
    // 'registrertIForetaksregisteret',
    // 'registrertIStiftelsesregisteret',
    // 'registrertIFrivillighetsregisteret',
    // 'frivilligRegistrertIMvaregisteret',
  ]
  function upperCase(str) {
    const s1 = str
    const s2 = s1.toLowerCase()
    let result = ''
    for (let i = 0; i < s1.length; i++) {
      if (s1[i] !== s2[i]) result = result + ' ' + s1[i]
      else result = result + s2[i]
    }
    result = result[0].toUpperCase() + result.slice(1).toLowerCase()
    return result
  }
  return typeRadio.map((term, index) => {
    return (
      <div key={index} className={styles.breakPoint}>
        <div>{upperCase(term)}: </div>
        <div>
          <input
            type='radio'
            name={term}
            value={`${term}Yes`}
            onChange={() => updateFilters({ ...filters, [term]: `${term}Yes` })}
            checked={filters[term] === `${term}Yes` ? true : false}
          />{' '}
          <span className={styles.spanRight}>Ja</span>
          <input
            type='radio'
            name={term}
            value={`${term}No`}
            onChange={() => updateFilters({ ...filters, [term]: `${term}No` })}
            checked={filters[term] === `${term}No` ? true : false}
          />{' '}
          <span className={styles.spanRight}>Nei</span>
          <input
            type='radio'
            name={term}
            value={`${term}All`}
            onChange={() => updateFilters({ ...filters, [term]: `${term}All` })}
            checked={filters[term] === `${term}All` ? true : false}
          />{' '}
          Alle
        </div>
      </div>
    )
  })
}
