import { appStore, persistor } from './appStore'
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react'
import { Provider as ReduxProvider } from 'react-redux'

type AppEntryProps = {
  children: string | JSX.Element | JSX.Element[]
}

export const AppEntry = ({ children }: AppEntryProps) => {
  return (
    <ReduxProvider store={appStore}>
      <ReduxPersistGate loading={null} persistor={persistor}>
        {children}
      </ReduxPersistGate>
    </ReduxProvider>
  )
}
