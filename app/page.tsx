app/page.tsx
app/success/page.tsx                  ← (crea uno simple que diga “¡Pago recibido! Revisa tu correo en 60 seg”)
app/api/generate/route.ts
app/api/webhook/culqi/route.ts
components/FormDocente.tsx
lib/prompts.ts
lib/generateDocx.ts
package.json
next.config.js                       ← crea uno vacío o copia este:
                                      module.exports = {}
tailwind.config.ts                    ← copia este:
                                      /** @type {import('tailwindcss').Config} */
                                      module.exports = {
                                        content: [
                                          "./app/**/*.{js,ts,jsx,tsx}",
                                          "./components/**/*.{js,ts,jsx,tsx}",
                                        ],
                                        theme: { extend: {} },
                                        plugins: [],
                                      }
tsconfig.json                         ← copia el estándar de Next.js (te lo paso abajo)

{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

