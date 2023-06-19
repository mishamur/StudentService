import 'normalize.css'
import type { AppProps } from 'next/app'

import { AppEntry } from 'app/AppEntry'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppEntry>
      <Component {...pageProps} />
    </AppEntry>
  )
}