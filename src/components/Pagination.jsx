import { useState } from 'react'
import styles from './Pagination.module.css'

function Pagination({ page, lastPage, goToPage }) {
  const [goTo, setGoTo] = useState('')
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
      <button className={styles.pageButton} onClick={goToPage} name={goTo}>
        gå til
      </button>
      <input
        className={styles.newPage}
        type='text'
        value={goTo}
        onChange={(e) => setGoTo(e.target.value)}
      />{' '}
      side
    </>
  )
}

export default Pagination
