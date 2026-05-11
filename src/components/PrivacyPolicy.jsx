export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[var(--bgSoft)] text-[var(--blackWarm)]">
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6">
          <a
            href="/"
            className="inline-flex rounded-full bg-[var(--blackWarm)] px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            ← Torna al sito
          </a>

          <div className="mt-10 rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_18px_45px_rgba(33,26,29,0.10)] sm:p-10">
            <p className="text-xl font-semibold tracking-wide text-[var(--pink)]">
              PRIVACY POLICY
            </p>

            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">
              Informativa sul trattamento dei dati personali
            </h1>

            <p className="mt-4 text-sm text-[var(--blackWarm)]/60">
              Ultimo aggiornamento: 11 maggio 2026
            </p>

            <div className="mt-10 space-y-8 text-base leading-relaxed text-[var(--blackWarm)]/75">
              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  1. Titolare del trattamento
                </h2>
                <p className="mt-3">
                  Il titolare del trattamento dei dati personali è{" "}
                  <strong>Ilaria Motta</strong>.
                </p>
                <p className="mt-2">
                  Per qualsiasi richiesta relativa al trattamento dei dati
                  personali è possibile scrivere all’indirizzo email:{" "}
                  <a
                    href="mailto:ilariamotta.webdev@gmail.com"
                    className="font-semibold text-[var(--pink)] underline underline-offset-4"
                  >
                    ilariamotta.webdev@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  2. Dati personali raccolti
                </h2>
                <p className="mt-3">
                  Attraverso il form di contatto presente sul sito possono essere
                  raccolti i seguenti dati personali:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>nome;</li>
                  <li>indirizzo email;</li>
                  <li>messaggio inviato tramite il form;</li>
                  <li>eventuali altre informazioni inserite volontariamente nel messaggio.</li>
                </ul>
                <p className="mt-3">
                  Si invita a non inserire nel messaggio dati particolarmente
                  sensibili o non necessari alla richiesta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  3. Finalità del trattamento
                </h2>
                <p className="mt-3">
                  I dati raccolti tramite il form vengono utilizzati esclusivamente
                  per:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>rispondere alle richieste inviate dall’utente;</li>
                  <li>valutare eventuali collaborazioni o progetti web;</li>
                  <li>gestire comunicazioni preliminari relative ai servizi richiesti.</li>
                </ul>
                <p className="mt-3">
                  I dati non vengono utilizzati per finalità di marketing,
                  newsletter o comunicazioni promozionali non richieste.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  4. Base giuridica del trattamento
                </h2>
                <p className="mt-3">
                  Il trattamento dei dati inviati tramite il form si basa sulla
                  necessità di rispondere a una richiesta dell’utente e, se
                  necessario, adottare misure precontrattuali richieste
                  dall’interessato.
                </p>
                <p className="mt-3">
                  Per questo motivo, la compilazione del form è necessaria per
                  poter ricevere una risposta alla richiesta inviata.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  5. Modalità del trattamento
                </h2>
                <p className="mt-3">
                  I dati vengono trattati con strumenti informatici e telematici,
                  adottando misure ragionevoli per proteggerli da accessi non
                  autorizzati, perdita, uso improprio o divulgazione non
                  consentita.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  6. Servizi di terze parti
                </h2>
                <p className="mt-3">
                  Per la gestione del form di contatto questo sito utilizza{" "}
                  <strong>Formspree</strong>, servizio esterno che consente di
                  ricevere messaggi inviati tramite form senza utilizzare un
                  backend proprietario.
                </p>
                <p className="mt-3">
                  I dati inseriti nel form vengono quindi trasmessi a Formspree
                  per permettere l’invio della richiesta e la notifica via email.
                </p>
                <p className="mt-3">
                  Per maggiori informazioni sul trattamento dei dati da parte di
                  Formspree, si invita a consultare la documentazione e la privacy
                  policy del servizio.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  7. Conservazione dei dati
                </h2>
                <p className="mt-3">
                  I dati inviati tramite il form vengono conservati per il tempo
                  necessario a gestire la richiesta ricevuta e le eventuali
                  comunicazioni successive.
                </p>
                <p className="mt-3">
                  Qualora dalla richiesta nasca una collaborazione, alcuni dati
                  potranno essere conservati per il tempo necessario alla gestione
                  del rapporto professionale e agli eventuali obblighi previsti
                  dalla legge.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  8. Comunicazione dei dati
                </h2>
                <p className="mt-3">
                  I dati non vengono venduti né ceduti a terzi per finalità
                  commerciali.
                </p>
                <p className="mt-3">
                  Potranno essere trattati da servizi tecnici necessari al
                  funzionamento del sito e del form, come Formspree e il provider
                  di hosting utilizzato per pubblicare il sito.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  9. Diritti dell’utente
                </h2>
                <p className="mt-3">
                  L’utente può richiedere in qualsiasi momento:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  <li>accesso ai propri dati personali;</li>
                  <li>rettifica dei dati inesatti;</li>
                  <li>cancellazione dei dati;</li>
                  <li>limitazione o opposizione al trattamento, nei casi previsti;</li>
                  <li>informazioni sui trattamenti effettuati.</li>
                </ul>
                <p className="mt-3">
                  Per esercitare questi diritti è possibile scrivere a{" "}
                  <a
                    href="mailto:ilariamotta.webdev@gmail.com"
                    className="font-semibold text-[var(--pink)] underline underline-offset-4"
                  >
                    ilariamotta.webdev@gmail.com
                  </a>
                  .
                </p>
                <p className="mt-3">
                  L’utente ha inoltre il diritto di proporre reclamo all’Autorità
                  Garante per la protezione dei dati personali.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  10. Cookie e strumenti di tracciamento
                </h2>
                <p className="mt-3">
                  Questo sito, nella sua configurazione attuale, non utilizza
                  cookie di profilazione, strumenti di advertising, pixel di
                  tracciamento o sistemi di analytics di terze parti.
                </p>
                <p className="mt-3">
                  Qualora in futuro venissero introdotti strumenti di analisi,
                  marketing o altri servizi che comportano l’uso di cookie o
                  tecnologie simili, questa informativa verrà aggiornata e,
                  quando necessario, verrà predisposto un apposito banner cookie.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--blackWarm)]">
                  11. Modifiche alla presente informativa
                </h2>
                <p className="mt-3">
                  La presente Privacy Policy può essere aggiornata nel tempo per
                  adeguarla a modifiche del sito, dei servizi utilizzati o della
                  normativa applicabile.
                </p>
                <p className="mt-3">
                  Si consiglia di consultare periodicamente questa pagina.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}