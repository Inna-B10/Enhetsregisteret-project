import styles from './BedriftCard.module.css'

export function BedriftCard({ bedrift }) {
  return (
    <>
      <hr />
      <div className={styles.card}>
        <div className={styles.bedriftDetaljerLeft}>
          {bedrift.aktivitet && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Aktivitet: </div>
              <div>{bedrift.aktivitet}</div>
            </div>
          )}
          {bedrift.isAntallAnsatteRegistrert && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Har registrert antall ansatte:</div>
              <div>{bedrift.isAntallAnsatteRegistrert}</div>
            </div>
          )}
          {bedrift.antallAnsatte && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Antall ansatte: </div>
              <div>{bedrift.antallAnsatte}</div>
            </div>
          )}
          {bedrift.forretningsAdresse && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Forretningsadresse: </div>
              <div>{bedrift.forretningsAdresse}</div>
            </div>
          )}
          {bedrift.hjelpeenhetskodeDesc && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Hjelpeenhetskode beskrivelse: </div>
              <div>{bedrift.hjelpeenhetskodeDesc}</div>
            </div>
          )}
          {bedrift.hjelpeenhetskodeCode && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Hjelpeenhetskode: </div>
              <div>{bedrift.hjelpeenhetskodeCode}</div>
            </div>
          )}
          {bedrift.hjemmeside && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Hjemmeside: </div>
              <div>{bedrift.hjemmeside}</div>
            </div>
          )}
          {bedrift.institusjonellSektorDesc && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>
                Institusjonell sektor beskrivelse:
              </div>
              <div>{bedrift.institusjonellSektorDesc}</div>
            </div>
          )}
          {bedrift.institusjonellSektorCode && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Institusjonell sektor kode: </div>
              <div>{bedrift.institusjonellSektorCode}</div>
            </div>
          )}
          {bedrift.naeringskodeDesc && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Næringskode beskrivelse: </div>
              <div>{bedrift.naeringskodeDesc}</div>
            </div>
          )}
          {bedrift.naeringskodeCode && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Næringskode: </div>
              <div>{bedrift.naeringskodeCode}</div>
            </div>
          )}
          {bedrift.organisasjonsformDesc && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Organisasjonsform beskrivelse:</div>
              <div>{bedrift.organisasjonsformDesc}</div>
            </div>
          )}
          {bedrift.organisasjonsformCode && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Organisasjonsform kode: </div>
              <div>{bedrift.organisasjonsformCode}</div>
            </div>
          )}
        </div>
        <div className={styles.bedriftDetaljerRight}>
          {bedrift.postadresse && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Postadresse: </div>
              <div>{bedrift.postadresse}</div>
            </div>
          )}
          {bedrift.registrertIForetaksregisteret && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>
                Registrert i Foretaksregisteret:
              </div>
              <div>{bedrift.registrertIForetaksregisteret}</div>
            </div>
          )}
          {bedrift.registrertIFrivillighetsregisteret && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>
                Registrert i Frivillighetsregisteret:
              </div>
              <div>{bedrift.registrertIFrivillighetsregisteret}</div>
            </div>
          )}
          {bedrift.registrertIMvaregisteret && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Registrert i MVA-registeret: </div>
              <div>{bedrift.registrertIMvaregisteret}</div>
            </div>
          )}
          {bedrift.registrertIStiftelsesregisteret && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>
                Registrert i Stiftelsesregisteret:
              </div>
              <div>{bedrift.registrertIStiftelsesregisteret}</div>
            </div>
          )}
          {bedrift.sisteInnsendteAarsregnskap && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Siste innsendte årsregnskap: </div>
              <div>{bedrift.sisteInnsendteAarsregnskap}</div>
            </div>
          )}
          {bedrift.registreringsDato && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Registreringsdato: </div>
              <div>{bedrift.registreringsDato}</div>
            </div>
          )}
          {bedrift.tvangsavvikletPgaManglendeSlettingDato && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>
                Tvangsavviklet pga manglende sletting dato:
              </div>
              <div>{bedrift.tvangsavvikletPgaManglendeSlettingDato}</div>
            </div>
          )}
          {bedrift.konkurs && (
            <div
              className={
                bedrift.konkurs === 'Ja' ? styles.attention : styles.breakPoint
              }>
              <div
                className={
                  bedrift.konkurs === 'Ja' ? styles.attention : styles.title
                }>
                Konkurs:
              </div>
              <div>{bedrift.konkurs}</div>
            </div>
          )}
          {bedrift.underAvvikling && (
            <div
              className={
                bedrift.underAvvikling === 'Ja'
                  ? styles.attention
                  : styles.breakPoint
              }>
              <div
                className={
                  bedrift.underAvvikling === 'Ja'
                    ? styles.attention
                    : styles.title
                }>
                Under avvikling:
              </div>
              <div>{bedrift.underAvvikling}</div>
            </div>
          )}
          {bedrift.underAvviklingDato && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Under avvikling dato: </div>
              <div>{bedrift.underAvviklingDato}</div>
            </div>
          )}
          {bedrift.underTvangsavviklingEllerTvangsopplosning && (
            <div
              className={
                bedrift.underTvangsavviklingEllerTvangsopplosning === 'Ja'
                  ? styles.attention
                  : styles.breakPoint
              }>
              <div
                className={
                  bedrift.underTvangsavviklingEllerTvangsopplosning === 'Ja'
                    ? styles.attention
                    : styles.title
                }>
                Under tvangsavvikling eller tvangsopplosning:
              </div>
              <div>{bedrift.underTvangsavviklingEllerTvangsopplosning}</div>
            </div>
          )}
          {bedrift.vedtektsdato && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Vedtektsdato: </div>
              <div>{bedrift.vedtektsdato}</div>
            </div>
          )}
          {bedrift.vedtektsfestetFormaal && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Vedtektsfestet formål: </div>
              <div>{bedrift.vedtektsfestetFormaal}</div>
            </div>
          )}
          {bedrift.kommune && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Kommune: </div>
              <div>{bedrift.kommune}</div>
            </div>
          )}
          {bedrift.kommuneCode && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Kommune nummer: </div>
              <div>{bedrift.kommuneCode}</div>
            </div>
          )}
          {bedrift.landCode && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Land kode: </div>
              <div>{bedrift.landCode}</div>
            </div>
          )}
          {bedrift.lang && (
            <div className={styles.breakPoint}>
              <div className={styles.title}>Språk: </div>
              <div>{bedrift.lang}</div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
