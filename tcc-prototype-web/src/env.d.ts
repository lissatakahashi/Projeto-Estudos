/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ENV?: string;
  readonly VITE_DEV?: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
