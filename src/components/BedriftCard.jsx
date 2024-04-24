export function BedriftCard({ bedrift }) {
  return (
    <>
      <ul>
        {bedrift.aktivitet && <li>Aktivitet: {bedrift.aktivitet}</li>}
        {bedrift.isAntallAnsatteRegistrert && (
          <li>
            Har registrert antall ansatter: {bedrift.isAntallAnsatteRegistrert}
          </li>
        )}
        {bedrift.antallAnsatter && (
          <li>Antall ansatter: {bedrift.antallAnsatter}</li>
        )}
        {bedrift.forretningsAdresse && (
          <li>Forretningsadresse: {bedrift.forretningsAdresse}</li>
        )}
        {bedrift.hjelpeenhetskodeDesc && (
          <li>Hjelpeenhetskode beskrivelse: {bedrift.hjelpeenhetskodeDesc}</li>
        )}
        {bedrift.hjelpeenhetskodeCode && (
          <li>Hjelpeenhetskode: {bedrift.hjelpeenhetskodeCode}</li>
        )}
        {bedrift.hjemmeside && <li>Hjemmeside: {bedrift.hjemmeside}</li>}
        {bedrift.institusjonellSektorDesc && (
          <li>
            Institusjonell sektor beskrivelse:{' '}
            {bedrift.institusjonellSektorDesc}
          </li>
        )}
        {bedrift.institusjonellSektorCode && (
          <li>
            institusjonell sektor kode: {bedrift.institusjonellSektorCode}
          </li>
        )}
        {bedrift.konkurs && <li>Konkurs: {bedrift.konkurs}</li>}
        {bedrift.lang && <li>Språk: {bedrift.lang}</li>}
        {bedrift.naeringskodeDesc && (
          <li>Næringskode beskrivelse: {bedrift.naeringskodeDesc}</li>
        )}
        {bedrift.naeringskodeCode && (
          <li>Næringskode: {bedrift.naeringskodeCode}</li>
        )}
        {bedrift.organisasjonsformDesc && (
          <li>
            Organisasjonsform beskrivelse: {bedrift.organisasjonsformDesc}
          </li>
        )}
        {bedrift.organisasjonsformCode && (
          <li>Organisasjonsform kode: {bedrift.organisasjonsformCode}</li>
        )}
        {bedrift.postadresse && <li>Postadresse: {bedrift.postadresse}</li>}
        {bedrift.registrertIForetaksregisteret && (
          <li>
            Registrert i Foretaksregisteret:{' '}
            {bedrift.registrertIForetaksregisteret}
          </li>
        )}
        {bedrift.registrertIFrivillighetsregisteret && (
          <li>
            Registrert i Frivillighetsregisteret:{' '}
            {bedrift.registrertIFrivillighetsregisteret}
          </li>
        )}
        {bedrift.registrertIMvaregisteret && (
          <li>
            Registrert i MVA-registeret: {bedrift.registrertIMvaregisteret}
          </li>
        )}
        {bedrift.registrertIStiftelsesregisteret && (
          <li>
            Registrert i Stiftelsesregisteret:{' '}
            {bedrift.registrertIStiftelsesregisteret}
          </li>
        )}
        {bedrift.sisteInnsendteAarsregnskap && (
          <li>
            Siste innsendte årsregnskap: {bedrift.sisteInnsendteAarsregnskap}
          </li>
        )}
        {bedrift.registreringsDato && (
          <li>Registreringsdato: {bedrift.registreringsDato}</li>
        )}
        {bedrift.tvangsavvikletPgaManglendeSlettingDato && (
          <li>
            Tvangsavviklet pga manglende sletting dato:{' '}
            {bedrift.tvangsavvikletPgaManglendeSlettingDato}
          </li>
        )}
        {bedrift.underAvvikling && (
          <li>Under avvikling: {bedrift.underAvvikling}</li>
        )}
        {bedrift.underAvviklingDato && (
          <li>Under avvikling dato: {bedrift.underAvviklingDato}</li>
        )}
        {bedrift.underTvangsavviklingEllerTvangsopplosning && (
          <li>
            Under tvangsavvikling eller tvangsopplosning:{' '}
            {bedrift.underTvangsavviklingEllerTvangsopplosning}
          </li>
        )}
        {bedrift.vedtektsdato && <li>Vedtektsdato: {bedrift.vedtektsdato}</li>}
        {bedrift.vedtektsfestetFormaal && (
          <li>Vedtektsfestet formål: {bedrift.vedtektsfestetFormaal}</li>
        )}
        {bedrift.kommune && <li>Kommune: {bedrift.kommune}</li>}
        {bedrift.kommuneCode && <li>Kommune nummer: {bedrift.kommuneCode}</li>}
        {bedrift.landCode && <li>Land kode: {bedrift.landCode}</li>}
      </ul>
    </>
  )
}
