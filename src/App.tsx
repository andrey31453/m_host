import * as React from 'react'
// @ts-ignore
const App1_Header = React.lazy(() => import('app1/Header'))

const App = () => {
  return (
    <>
      <div>
        <h1>Host</h1>
      </div>

      <hr />

      <React.Suspense fallback='Loading Header'>
        <App1_Header />
      </React.Suspense>
    </>
  )
}

export default App
