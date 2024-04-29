function Pagination({ page, lastPage, prevPage, nextPage }) {
  return (
    <>
      <button disabled={page === 0} onClick={prevPage}>
        Prev
      </button>
      <p className='bold'>{page + 1}</p>
      <button disabled={page + 1 === lastPage} onClick={nextPage}>
        Next
      </button>
    </>
  )
}

export default Pagination
