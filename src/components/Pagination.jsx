import styles from './Pagination.module.css'

function Pagination({ page, lastPage, goToPage }) {
  return (
    <>
      {page !== 0 && (
        <button className={styles.pageButton} onClick={goToPage} name='first'>
          {'<<'}
        </button>
      )}
      {page !== 0 && (
        <button className={styles.pageButton} onClick={goToPage} name='prev'>
          {'<'}
        </button>
      )}
      <p className='bold'>{page + 1}</p>
      {page + 1 !== lastPage && (
        <button className={styles.pageButton} onClick={goToPage} name='next'>
          {'>'}
        </button>
      )}
      {page + 1 !== lastPage && (
        <button className={styles.pageButton} onClick={goToPage} name='last'>
          {'>>'}
        </button>
      )}
    </>
  )
}

export default Pagination
