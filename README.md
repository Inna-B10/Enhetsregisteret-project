# React + Vite

Applikasjonen i React som gjør en spørring mot Brønnøysundregistrene sitt API og presenterer en liste over bedriftene som ble funnet.

### Installed

- react-router-dom
- gh-pages

## Minstekrav til oppgaven:

List ut alle bedrifter som er opprettet i en gitt kommune i et gitt år

## videre oppgaver

**velge/skrive:**

- navn
- organisasjonsnummer
- fra RegistreringsdatoEnhetsregisteret til RegistreringsdatoEnhetsregisteret
- konkurs
- under Tvangsavvikling Eller Tvangsopplosning
- underAvvikling

- markere alle konkursbo i lista
- lagre brukenes tidligere søkekriteriene i local storage
- sortere resultat
- vise hvor mange treff
- vise hvis resultatet er tomt

**sorteing:**

- navn
- organisasjonsnummer
- antallAnsatte
- registreringsdatoEnhetsregisteret

sort={feltnavn},{ASC/DESC}
`https://data.brreg.no/enhetsregisteret/api/enheter?sort=antallAnsatte,DESC`

## [TODO]

noe data kommer som array og må parses
for eks. firma:INNSIKT

```
//forretningsadresse - adresse:
// (2) ['c/o Gjørva', 'Hellerud gårdsvei 5B']

// aktivitet:
// (2) ['Oversettingstjenester for dokumenter, tjenester, film og media med', 'mere.']

// vedtektsfestetFormaal:
// (2) ['Investeringer, eiendom, konsulentvirksomhet og rådgivning innenfor', 'finansielle områder samt forretningsutvikling.']

// organisasjonsform:
// {kode: 'ENK', beskrivelse: 'Enkeltpersonforetak', \_links: {…}}
```

**flere data og filtrer**

- registrertIMvaregisteret
- registrertIForetaksregisteret
- registrertIStiftelsesregisteret
- registrertIFrivillighetsregisteret
- frivilligRegistrertIMvaregisteret

- fraStiftelsesdato --> tilStiftelsesdato
- fraAntallAnsatte --> tilAntallAnsatte

- naeringskode
- sisteInnsendteAarsregnskap

- overordnetEnhet
- organisasjonsform
- institusjonellSektorkode
- forretningsadresse.landkode
- postadresse.landkode

**vise brukenes tidligere søkekriteriene**
