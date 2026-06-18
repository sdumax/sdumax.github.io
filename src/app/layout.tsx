import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maxwell Diogu - Personal Portfolio',
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          async
        />
        <script
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          async
          noModule={true}
        />
      </body>
    </html>
  )
}
