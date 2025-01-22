import "./page.css"

export const metadata = {
  title: "Multi-Page PagedJS App",
  description: "A multi-page document using PagedJS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
