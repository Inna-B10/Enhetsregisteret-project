import { useState } from 'react'
import styles from './Pagination.module.css'

function Pagination({ page, lastPage, goToPage }) {
  const [goTo, setGoTo] = useState('')
  return (
    <>
      <div>
        <button
          className={styles.pageButton}
          disabled={page === 0}
          onClick={goToPage}
          name='first'>
          {'<<'}
        </button>
        <button
          disabled={page === 0}
          className={styles.pageButton}
          onClick={goToPage}
          name='prev'>
          {'<'}
        </button>
        <p className='bold'>{page + 1}</p>
        <button
          disabled={page + 1 === lastPage}
          className={styles.pageButton}
          onClick={goToPage}
          name='next'>
          {'>'}
        </button>
        <button
          disabled={page + 1 === lastPage}
          className={styles.pageButton}
          onClick={goToPage}
          name='last'>
          {'>>'}
        </button>
      </div>
      <div>
        <button className={styles.pageButton} onClick={goToPage} name={goTo}>
          gå til
        </button>
        <input
          className={styles.newPage}
          type='text'
          name='goTo'
          value={goTo}
          onChange={(e) => setGoTo(e.target.value)}
        />{' '}
        side
      </div>
    </>
  )
}

export default Pagination
