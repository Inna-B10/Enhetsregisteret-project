import styles from './AboutPage.module.css'

export function AboutPage() {
  return (
    <article className={styles.article}>
      <h2 className={styles.h2}>Om prosjektet</h2>
      <div className={styles.paragraf}>
        <h3>
          Kjernen i oppgaven går ut på å lage et brukergrensesnitt som lister
          opp alle bedrifter som er opprettet i en valgt kommune innenfor et
          gitt år.
        </h3>
        <ul className={styles.list}>
          <li>
            Brukeren velger en kommune fra en nedtrekksliste over alle kommuner
            i Norge.
          </li>
          <li>Brukeren velger/angir årstall</li>
          <li>Brukeren trykker på "Finn bedrifter"</li>
          <li>
            Applikasjonen gjør en spørring mot Brønnøysundregistrene sitt API og
            presenterer en liste over bedriftene som ble funnet. Lista skal
            inneholde navn, stiftelsesdato og organisasjonsnummer.
          </li>
        </ul>
      </div>
      <div className={styles.paragraf}>
        <h3>Forslag til videre oppgaver:</h3>
        <ul className={styles.list}>
          <li>
            I første versjon kan man bruke den vedlagte JSON-fila som kilde for
            kommunenavn/kommunenummer. I neste versjon kan man i stedet hente
            inn en komplett kommuneliste fra SSB sitt API.
          </li>
          <li>
            Lage løsningen så robust og brukervennlig som mulig. Forhindre søk
            dersom ikke nødvendige felter er fylt ut. Informere brukeren om hva
            som er nødvendig/mangler for å kunne gjøre et søk. Informere gjerne
            brukeren om hvor mange treff det er, og å gi brukeren tydelig
            beskjed når søkeresultatet er tomt.
          </li>
          <li>
            Lage funksjonalitet for å kunne klikke på et bedriftselement i
            lista, og presentere dette i et eget brukergrensesnitt (en
            modal-dialog eller lignende). All informasjon fra det valgte
            bedriftsobjektet skal vises i et strukturert skjema.
          </li>
          <li>
            Utvide søkekriteriene slik at man kan søke på for eksempel
            firmanavn, organisasjonsnummer, bransje, osv.
          </li>
          <li>
            Markere alle konkursbo i lista med rød bakgrunnsfarge og et
            ikon/utropstegn.
          </li>
          <li>
            Lagre brukerens tidligere søk (søkekriteriene, ikke søkeresultatet)
            i local-storage, slik at man kan bla i søkehistorien sin (hvert søk
            må da få et "navn", dette kan for eksempel være søketidspunktet:
            "12:17:57 12.12.2023")
          </li>
          <li>
            Forbedre det visuelle uttrykket. Jobbe med fonter, størrelser,
            spacing, alignment, tittel, ledetekster osv.
          </li>
        </ul>
      </div>
      <div className={styles.paragraf}>
        <h3 className={styles.marBot}>API-er</h3>
        <div className={styles.marBot}>
          Brønnøysundregistrene Bruk /enheter - endepunktet for å søke etter
          enheter.
          <br />
          https://data.brreg.no/enhetsregisteret/api/docs/index.html
        </div>
        <div className={styles.marBot}>
          Kommuneoppslag SSB <br />
          https://data.ssb.no/api/klass/v1/versions/1847.json
          <br />
          Kommuneobjektene ligger under "classificationItems"
        </div>
        <h4>Visse begrensninger</h4>
        <div className={styles.marBot}>
          (Page+1)*size kan ikke overskride 10 000.
        </div>
      </div>
    </article>
  )
}
