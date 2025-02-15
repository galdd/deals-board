/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEALS_SHEET_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
