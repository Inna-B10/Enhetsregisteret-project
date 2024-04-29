export const CleanData = (data) => {
  const aktivitet = data.aktivitet && data.aktivitet
  const isAntallAnsatteRegistrert =
    data.harRegistrertAntallAnsatte && data.harRegistrertAntallAnsatte
      ? 'Ja'
      : 'Nei'
  const antallAnsatte = data.antallAnsatte && data.antallAnsatte
  const forretningsAdresse =
    data.forretningsadresse &&
    data.forretningsadresse.adresse +
      ', ' +
      data.forretningsadresse.poststed +
      ' ' +
      (data.forretningsadresse.postnummer
        ? data.forretningsadresse.postnummer
        : '') +
      ', ' +
      data.forretningsadresse.land
  const hjelpeenhetskodeDesc =
    data.hjelpeenhetskode && data.hjelpeenhetskode.beskrivelse
  const hjelpeenhetskodeCode =
    data.hjelpeenhetskode && data.hjelpeenhetskode.kode
  const hjemmeside = data.hjemmeside && data.hjemmeside
  const institusjonellSektorDesc =
    data.institusjonellSektorkode && data.institusjonellSektorkode.beskrivelse
  const institusjonellSektorCode =
    data.institusjonellSektorkode && data.institusjonellSektorkode.kode
  const konkurs = data.konkurs && data.konkurs ? 'Ja' : 'Nei'
  const lang = data.maalform && data.maalform
  const naeringskodeDesc = data.naeringskode1 && data.naeringskode1.beskrivelse
  const naeringskodeCode = data.naeringskode1 && data.naeringskode1.kode
  const name = data.navn && data.navn
  const organisasjonsformDesc =
    data.organisasjonsform && data.organisasjonsform.beskrivelse
  const organisasjonsformCode =
    data.organisasjonsform && data.organisasjonsform.kode
  const organisasjonsnummer =
    data.organisasjonsnummer && data.organisasjonsnummer
  const postadresse =
    data.postadresse &&
    data.postadresse.adresse +
      ', ' +
      data.postadresse.postnummer +
      ' ' +
      data.postadresse.poststed +
      ', ' +
      data.postadresse.land +
      ', Land kode = ' +
      data.postadresse.landkode
  const landCode = data.forretningsadresse
    ? data.forretningsadresse.landkode
    : data.postadresse
    ? data.postadresse.landkode
    : false
  const registrertIForetaksregisteret =
    data.registrertIForetaksregisteret && data.registrertIForetaksregisteret
      ? 'Ja'
      : 'Nei'
  const registrertIFrivillighetsregisteret =
    data.registrertIFrivillighetsregisteret &&
    data.registrertIFrivillighetsregisteret
      ? 'Ja'
      : 'Nei'
  const registrertIMvaregisteret =
    data.registrertIMvaregisteret && data.registrertIMvaregisteret
      ? 'Ja'
      : 'Nei'
  const registrertIStiftelsesregisteret =
    data.registrertIStiftelsesregisteret && data.registrertIStiftelsesregisteret
      ? 'Ja'
      : 'Nei'
  const registreringsDato =
    data.registreringsdatoEnhetsregisteret &&
    data.registreringsdatoEnhetsregisteret
  const sisteInnsendteAarsregnskap =
    data.sisteInnsendteAarsregnskap && data.sisteInnsendteAarsregnskap
  const stiftelsesdato = data.stiftelsesdato ? data.stiftelsesdato : '---'
  const tvangsavvikletPgaManglendeSlettingDato =
    data.tvangsavvikletPgaManglendeSlettingDato &&
    data.tvangsavvikletPgaManglendeSlettingDato
  const underAvvikling =
    data.underAvvikling && data.underAvvikling ? 'Ja' : 'Nei'
  const underAvviklingDato = data.underAvviklingDato && data.underAvviklingDato
  const underTvangsavviklingEllerTvangsopplosning =
    data.underTvangsavviklingEllerTvangsopplosning &&
    data.underTvangsavviklingEllerTvangsopplosning
      ? 'Ja'
      : 'Nei'
  const vedtektsdato = data.vedtektsdato && data.vedtektsdato
  const vedtektsfestetFormaal =
    data.vedtektsfestetFormaal && data.vedtektsfestetFormaal

  const kommune = data.kommune
    ? data.kommune
    : data.postadresse
    ? data.postadresse.kommune
    : data.forretningsadresse
    ? data.forretningsadresse.kommune
    : false
  const kommuneCode = data.kommunenummer
    ? data.kommunenummer
    : data.postadresse
    ? data.postadresse.kommunenummer
    : data.forretningsadresse
    ? data.forretningsadresse.kommunenummer
    : false

  const bedrift = {
    name,
    aktivitet,
    isAntallAnsatteRegistrert,
    antallAnsatte,
    forretningsAdresse,
    hjelpeenhetskodeDesc,
    hjelpeenhetskodeCode,
    hjemmeside,
    institusjonellSektorDesc,
    institusjonellSektorCode,
    konkurs,
    lang,
    naeringskodeDesc,
    naeringskodeCode,
    organisasjonsformDesc,
    organisasjonsformCode,
    organisasjonsnummer,
    postadresse,
    registrertIForetaksregisteret,
    registrertIFrivillighetsregisteret,
    registrertIMvaregisteret,
    registrertIStiftelsesregisteret,
    registreringsDato,
    sisteInnsendteAarsregnskap,
    stiftelsesdato,
    tvangsavvikletPgaManglendeSlettingDato,
    underAvvikling,
    underAvviklingDato,
    underTvangsavviklingEllerTvangsopplosning,
    vedtektsdato,
    vedtektsfestetFormaal,
    kommune,
    kommuneCode,
    landCode,
  }
  return bedrift
}
