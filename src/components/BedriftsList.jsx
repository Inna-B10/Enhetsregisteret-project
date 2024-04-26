import { useState } from 'react'
import KonkursIcon from '../assets/vite.svg'
import { BedriftCard } from './BedriftCard'
import styles from './BedriftsList.module.css'
import { DetailsButton } from './DetailsButton'

export function BedriftsList({ enhet }) {
  // console.log(enhet)
  const [detailsVisible, setDetailsVisible] = useState(false)
  const konkursImage =
    enhet.konkurs.toLowerCase() === 'ja' ? (
      <img src={KonkursIcon} alt='konkurs icon' />
    ) : (
      ''
    )

  return (
    <article>
      <h2>
        {enhet.name} {konkursImage}
      </h2>
      <ul>
        <li>
          <span className={styles.title}>Organisasjonsnummer:</span>{' '}
          {enhet.organisasjonsnummer}
        </li>
        <li>
          <span className={styles.title}>Stiftelsesdato: </span>
          {enhet.stiftelsesdato}
        </li>
        <li>
          {detailsVisible ? (
            <>
              <BedriftCard bedrift={enhet} />
              <DetailsButton onClick={() => setDetailsVisible(false)}>
                Lukk
              </DetailsButton>
            </>
          ) : (
            <DetailsButton onClick={() => setDetailsVisible(true)}>
              Mer detaljer
            </DetailsButton>
          )}
        </li>
      </ul>
    </article>
  )
}
