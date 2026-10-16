import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full antialiased bg-white" lang="en">
      <Head>
        <link rel="icon" href="/media/favicon_qyejeq.svg" />
      </Head>
      <body className="flex flex-col h-full">
        <Main />

        <NextScript />
      </body>
    </Html>
  )
}
