/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    // Fügen Sie hier weitere Umgebungsvariablen hinzu
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  