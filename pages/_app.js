import '@/styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux'
import { store } from '@/Redux/store'
export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
