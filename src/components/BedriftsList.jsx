import { useState } from 'react'
import KonkursIcon from '../assets/vite.svg'
import { BedriftCard } from './BedriftCard'
// import styles from './BedriftsList.module.css'
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
      <h1>
        {enhet.name} {konkursImage}
      </h1>
      <ul>
        <li>Organisasjonsnummer: {enhet.organisasjonsnummer}</li>
        <li>Stiftelsesdato: {enhet.stiftelsesdato}</li>
        <li>
          <div>
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
          </div>
        </li>
      </ul>
    </article>
  )
}
