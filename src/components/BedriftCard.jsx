import styles from './BedriftCard.module.css'

export function BedriftCard({ bedrift }) {
  return (
    <>
      <hr />
      <div className={styles.card}>
        <div className={styles.bedriftDetaljerLeft}>
          {bedrift.aktivitet && (
            <div>
              <span className={styles.title}>Aktivitet:</span>{' '}
              {bedrift.aktivitet}
            </div>
          )}
          {bedrift.isAntallAnsatteRegistrert && (
            <div>
              <span className={styles.title}>
                Har registrert antall ansatter:
              </span>{' '}
              {bedrift.isAntallAnsatteRegistrert}
            </div>
          )}
          {bedrift.antallAnsatter && (
            <div>
              <span className={styles.title}>Antall ansatter:</span>{' '}
              {bedrift.antallAnsatter}
            </div>
          )}
          {bedrift.forretningsAdresse && (
            <div>
              <span className={styles.title}>Forretningsadresse:</span>{' '}
              {bedrift.forretningsAdresse}
            </div>
          )}
          {bedrift.hjelpeenhetskodeDesc && (
            <div>
              <span className={styles.title}>
                Hjelpeenhetskode beskrivelse:
              </span>{' '}
              {bedrift.hjelpeenhetskodeDesc}
            </div>
          )}
          {bedrift.hjelpeenhetskodeCode && (
            <div>
              <span className={styles.title}>Hjelpeenhetskode:</span>{' '}
              {bedrift.hjelpeenhetskodeCode}
            </div>
          )}
          {bedrift.hjemmeside && (
            <div>
              <span className={styles.title}>Hjemmeside:</span>{' '}
              {bedrift.hjemmeside}
            </div>
          )}
          {bedrift.institusjonellSektorDesc && (
            <div>
              <span className={styles.title}>
                Institusjonell sektor beskrivelse:
              </span>{' '}
              {bedrift.institusjonellSektorDesc}
            </div>
          )}
          {bedrift.institusjonellSektorCode && (
            <div>
              <span className={styles.title}>Institusjonell sektor kode:</span>{' '}
              {bedrift.institusjonellSektorCode}
            </div>
          )}
          {bedrift.naeringskodeDesc && (
            <div>
              <span className={styles.title}>Næringskode beskrivelse:</span>{' '}
              {bedrift.naeringskodeDesc}
            </div>
          )}
          {bedrift.naeringskodeCode && (
            <div>
              <span className={styles.title}>Næringskode:</span>{' '}
              {bedrift.naeringskodeCode}
            </div>
          )}
          {bedrift.organisasjonsformDesc && (
            <div>
              <span className={styles.title}>
                Organisasjonsform beskrivelse:
              </span>{' '}
              {bedrift.organisasjonsformDesc}
            </div>
          )}
          {bedrift.organisasjonsformCode && (
            <div>
              <span className={styles.title}>Organisasjonsform kode:</span>{' '}
              {bedrift.organisasjonsformCode}
            </div>
          )}
        </div>
        <div className={styles.bedriftDetaljerRight}>
          {bedrift.postadresse && (
            <div>
              <span className={styles.title}>Postadresse:</span>{' '}
              {bedrift.postadresse}
            </div>
          )}
          {bedrift.registrertIForetaksregisteret && (
            <div>
              <span className={styles.title}>
                Registrert i Foretaksregisteret:
              </span>{' '}
              {bedrift.registrertIForetaksregisteret}
            </div>
          )}
          {bedrift.registrertIFrivillighetsregisteret && (
            <div>
              <span className={styles.title}>
                Registrert i Frivillighetsregisteret:
              </span>{' '}
              {bedrift.registrertIFrivillighetsregisteret}
            </div>
          )}
          {bedrift.registrertIMvaregisteret && (
            <div>
              <span className={styles.title}>Registrert i MVA-registeret:</span>{' '}
              {bedrift.registrertIMvaregisteret}
            </div>
          )}
          {bedrift.registrertIStiftelsesregisteret && (
            <div>
              <span className={styles.title}>
                Registrert i Stiftelsesregisteret:
              </span>{' '}
              {bedrift.registrertIStiftelsesregisteret}
            </div>
          )}
          {bedrift.sisteInnsendteAarsregnskap && (
            <div>
              <span className={styles.title}>Siste innsendte årsregnskap:</span>{' '}
              {bedrift.sisteInnsendteAarsregnskap}
            </div>
          )}
          {bedrift.registreringsDato && (
            <div>
              <span className={styles.title}>Registreringsdato:</span>{' '}
              {bedrift.registreringsDato}
            </div>
          )}
          {bedrift.tvangsavvikletPgaManglendeSlettingDato && (
            <div>
              <span className={styles.title}>
                Tvangsavviklet pga manglende sletting dato:
              </span>{' '}
              {bedrift.tvangsavvikletPgaManglendeSlettingDato}
            </div>
          )}
          {bedrift.konkurs && (
            <div className={bedrift.konkurs === 'Ja' ? styles.attention : ''}>
              <span
                className={
                  bedrift.konkurs === 'Ja' ? styles.attention : styles.title
                }>
                Konkurs:
              </span>{' '}
              {bedrift.konkurs}
            </div>
          )}
          {bedrift.underAvvikling && (
            <div
              className={
                bedrift.underAvvikling === 'Ja' ? styles.attention : ''
              }>
              <span
                className={
                  bedrift.underAvvikling === 'Ja'
                    ? styles.attention
                    : styles.title
                }>
                Under avvikling:
              </span>{' '}
              {bedrift.underAvvikling}
            </div>
          )}
          {bedrift.underAvviklingDato && (
            <div>
              <span className={styles.title}>Under avvikling dato:</span>{' '}
              {bedrift.underAvviklingDato}
            </div>
          )}
          {bedrift.underTvangsavviklingEllerTvangsopplosning && (
            <div
              className={
                bedrift.underTvangsavviklingEllerTvangsopplosning === 'Ja'
                  ? styles.attention
                  : ''
              }>
              <span
                className={
                  bedrift.underTvangsavviklingEllerTvangsopplosning === 'Ja'
                    ? styles.attention
                    : styles.title
                }>
                Under tvangsavvikling eller tvangsopplosning:
              </span>{' '}
              {bedrift.underTvangsavviklingEllerTvangsopplosning}
            </div>
          )}
          {bedrift.vedtektsdato && (
            <div>
              <span className={styles.title}>Vedtektsdato:</span>{' '}
              {bedrift.vedtektsdato}
            </div>
          )}
          {bedrift.vedtektsfestetFormaal && (
            <div>
              <span className={styles.title}>Vedtektsfestet formål:</span>{' '}
              {bedrift.vedtektsfestetFormaal}
            </div>
          )}
          {bedrift.kommune && (
            <div>
              <span className={styles.title}>Kommune:</span> {bedrift.kommune}
            </div>
          )}
          {bedrift.kommuneCode && (
            <div>
              <span className={styles.title}>Kommune nummer: </span>
              {bedrift.kommuneCode}
            </div>
          )}
          {bedrift.landCode && (
            <div>
              <span className={styles.title}>Land kode:</span>{' '}
              {bedrift.landCode}
              {bedrift.lang && (
                <div>
                  <span className={styles.title}>Språk:</span> {bedrift.lang}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  )
}
