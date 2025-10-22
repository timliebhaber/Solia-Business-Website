<script setup lang="ts"></script>

<template>
  <div class="legal-page">
    <div class="legal-container">
      <h1>Impressum</h1>

      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          Tim Liebhaber<br />
          Hauptstraße 90A<br />
          89233 Neu-Ulm<br />
        </p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>Tim Liebhaber</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: 01575 - 3524518<br />
          E-Mail: info@solia-solutions.de
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          DE344841391
        </p>
      </section>

      <section>
        <h2>Redaktionell verantwortlich</h2>
        <p>Tim Liebhaber</p>
      </section>

      <section>
        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/ </a
          ><br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>

      <section>
        <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <div class="back-link">
        <router-link to="/">← Zurück zur Startseite</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.legal-page {
  min-height: 100vh;
  background-color: #000000;
  color: #ffffff;
  padding: 6rem 2rem 4rem;
}

.legal-container {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
}

section {
  margin-bottom: 2rem;
}

p {
  line-height: 1.8;
  color: #d5d5d5;
  margin-bottom: 1rem;
}

a {
  color: #4a9eff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #6eb3ff;
    text-decoration: underline;
  }
}

.back-link {
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid #333;

  a {
    font-size: 1.1rem;
    font-weight: 500;
  }
}

@media screen and (max-width: 768px) {
  .legal-page {
    padding: 4rem 1.5rem 3rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 1.3rem;
  }
}
</style>
