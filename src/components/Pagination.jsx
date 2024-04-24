function Pagination({ page, lastPage, prevPage, nextPage }) {
  return (
    <div className='pagination'>
      <button disabled={page === 0} onClick={prevPage}>
        Prev
      </button>
      <p>{page + 1}</p>
      <button disabled={page + 1 === lastPage} onClick={nextPage}>
        Next
      </button>
    </div>
  )
}

export default Pagination
