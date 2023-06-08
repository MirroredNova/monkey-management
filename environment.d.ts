declare namespace NodeJS {
  interface ProcessEnv {
    DB_USER: string;
    DB_PASS: string;
    NEXT_PUBLIC_CLOUDINARY_NAME: string;
    NEXT_PUBLIC_CLOUDINARY_PRESET: string;
  }
}
