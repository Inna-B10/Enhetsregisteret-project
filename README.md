# [TODO]

velge:
årstall
kommune
vise:
navn
stiftelsesdato
organisasjonsnummer

    hvor mange treff
    hvis resultatet er tomt

# ++

velge/skrive:
navn
organisasjonsnummer
fraRegistreringsdatoEnhetsregisteret tilRegistreringsdatoEnhetsregisteret
konkurs
underTvangsavviklingEllerTvangsopplosning
underAvvikling

registrertIMvaregisteret
registrertIForetaksregisteret
registrertIStiftelsesregisteret
registrertIFrivillighetsregisteret
frivilligRegistrertIMvaregisteret

fraStiftelsesdato tilStiftelsesdato
fraAntallAnsatte tilAntallAnsatte

naeringskode
sisteInnsendteAarsregnskap

overordnetEnhet
organisasjonsform
institusjonellSektorkode
forretningsadresse.landkode
postadresse.landkode

https://data.brreg.no/enhetsregisteret/api/enheter?navn=Sesam&fraRegistreringsdatoEnhetsregisteret=2017-10-20&tilRegistreringsdatoEnhetsregisteret=2017-10-20&konkurs=false

# sortere resultat:

stiftelsesdato 1277-09-13-----2024
registreringsdatoEnhetsregisteret 1995-02-19-----2024

sort={feltnavn},{ASC/DESC}
https://data.brreg.no/enhetsregisteret/api/enheter?sort=antallAnsatte,DESC

# !!!

markere alle konkursbo i lista med background color og ikon

# +++

lagre brukenes tidligere søkekriteriene i local storage

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
