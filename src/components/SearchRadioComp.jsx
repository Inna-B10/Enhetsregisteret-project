export function SearchRadioComp({ filters, updateFilters }) {
  const typeRadio = [
    'konkurs',
    'underTvangsavviklingEllerTvangsopplosning',
    'underAvvikling',
    // 'registrertIMvaregisteret',
    // 'registrertIForetaksregisteret',
    // 'registrertIStiftelsesregisteret',
    // 'registrertIFrivillighetsregisteret',
    // 'frivilligRegistrertIMvaregisteret',
  ]

  return typeRadio.map((term, index) => {
    // console.log(filters.term)
    return (
      <div key={index}>
        <div>{term}: </div>
        <div>
          <input
            type='radio'
            name={term}
            value={`${term}Yes`}
            onChange={() => updateFilters({ ...filters, [term]: `${term}Yes` })}
            checked={filters[term] === `${term}Yes` ? true : false}
          />{' '}
          Ja
          <input
            type='radio'
            name={term}
            value={`${term}No`}
            onChange={() => updateFilters({ ...filters, [term]: `${term}No` })}
            checked={filters[term] === `${term}No` ? true : false}
          />{' '}
          Nei
          <input
            type='radio'
            name={term}
            value={`${term}All`}
            onChange={() => updateFilters({ ...filters, [term]: `${term}All` })}
            checked={filters[term] === `${term}All` ? true : false}
          />{' '}
          Begge
        </div>
      </div>
    )
  })
}
