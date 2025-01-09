// src/app/layout.tsx
import { AuthProvider } from '../context/AuthContext';
import '@/app/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="pt-BR">
        <head>
          <title>Login com Next.js</title>
        </head>
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
