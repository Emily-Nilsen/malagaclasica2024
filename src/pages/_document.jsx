import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-white antialiased" lang="no">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/kow2pgi.css" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Flemmen%20Co/C_F_favicon_cv5p2k.svg"
        />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
