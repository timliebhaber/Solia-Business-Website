<script setup lang="ts"></script>

<template>
  <div class="legal-page">
    <div class="legal-container">
      <h1>Allgemeine Geschäftsbedingungen</h1>

      <section>
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen [Ihr
          Firmenname] und unseren Kunden über IT-Dienstleistungen, Softwareentwicklung und
          Beratungsleistungen.
        </p>
      </section>

      <section>
        <h2>2. Vertragsschluss</h2>
        <p>[Fügen Sie hier Ihre Bestimmungen zum Vertragsschluss ein]</p>
      </section>

      <section>
        <h2>3. Leistungsumfang</h2>
        <p>[Fügen Sie hier die Beschreibung Ihrer Leistungen ein]</p>
      </section>

      <section>
        <h2>4. Preise und Zahlungsbedingungen</h2>
        <p>[Fügen Sie hier Ihre Preis- und Zahlungsbedingungen ein]</p>
      </section>

      <section>
        <h2>5. Urheberrechte und Nutzungsrechte</h2>
        <p>[Fügen Sie hier Ihre Bestimmungen zu Urheberrechten ein]</p>
      </section>

      <section>
        <h2>6. Gewährleistung</h2>
        <p>[Fügen Sie hier Ihre Gewährleistungsbestimmungen ein]</p>
      </section>

      <section>
        <h2>7. Haftung</h2>
        <p>[Fügen Sie hier Ihre Haftungsbeschränkungen ein]</p>
      </section>

      <section>
        <h2>8. Vertragslaufzeit und Kündigung</h2>
        <p>[Fügen Sie hier Ihre Bestimmungen zur Vertragslaufzeit ein]</p>
      </section>

      <section>
        <h2>9. Schlussbestimmungen</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist [Ihr Ort], soweit
          gesetzlich zulässig.
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
