import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "@/assets/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "VIA - Orientação Vocacional",
  description: "Descubra o curso ideal para seu futuro profissional",
  generator: "VIA",
  applicationName: "VIA",
  keywords: [
    "via",
    "orientação vocacional",
    "teste vocacional",
    "carreira",
    "futuro profissional",
    "escolha de curso",
    "universidade",
    "faculdade",
    "educação",
    "autoconhecimento",
    "habilidades",
    "interesses profissionais",
    "mercado de trabalho",
    "desenvolvimento pessoal",
    "planejamento de carreira",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${inter.variable} ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
