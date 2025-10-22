<script setup lang="ts"></script>

<template>
  <footer id="footer">
    <div class="footer-content">
      <div class="col col1">
        <router-link to="/" class="logo-link">
          <h3>Solia Solutions</h3>
        </router-link>
        <p>Professionelle IT-Lösungen für Ihr Unternehmen</p>
        <p style="color: #818181; font-size: 0.9rem; margin-top: 1rem">
          © 2024 Solia Solutions. Alle Rechte vorbehalten.
        </p>
      </div>
      <div class="col col2">
        <h4>Leistungen</h4>
        <p>Webentwicklung</p>
        <p>App-Entwicklung</p>
        <p>IT-Beratung</p>
      </div>
      <div class="col col3">
        <h4>Rechtliches</h4>
        <router-link to="/impressum" class="footer-link">Impressum</router-link>
        <router-link to="/datenschutz" class="footer-link">Datenschutz</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: #0a0a0a;
  color: #d5d5d5;
  padding: 3rem 2rem;
  margin-top: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
}

.col1 {
  flex: 1.5;
}

.col2,
.col3 {
  flex: 1;
}

h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 0.5rem 0;
}

p {
  margin: 0;
  font-size: 0.95rem;
  color: #b5b5b5;
  line-height: 1.6;
  cursor: pointer;
  transition: color 0.2s ease;
}

p:hover {
  color: #ffffff;
}

.footer-link {
  margin: 0;
  font-size: 0.95rem;
  color: #b5b5b5;
  line-height: 1.6;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ffffff;
}

.logo-link {
  text-decoration: none;
  display: inline-block;
  transition: opacity 0.2s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo-link h3 {
  color: #ffffff;
}

@media screen and (max-width: 768px) {
  footer {
    padding: 2rem 1.5rem;
  }

  .footer-content {
    flex-direction: column;
    gap: 2rem;
  }

  .col1 {
    flex: 1;
  }
}
</style>
