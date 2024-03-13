import * as React from 'react'
import { Test } from '~widgets'

// @ts-ignore
const App1_Header = React.lazy(() => import('app1/Header'))

const App = () => {
  return (
    <>
      <h1>Host</h1>
      <hr />
      <Test />
      <hr />

      <React.Suspense fallback='Loading Header'>
        <App1_Header />
      </React.Suspense>
    </>
  )
}

export default App
