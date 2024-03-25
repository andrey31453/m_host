import * as React from 'react'
import { Test } from '~widgets'
import { test1 } from 'arora-npm-ts'
import './test.scss'

// @ts-ignore
const App1_Header = React.lazy(() => import('app1/Header'))

const App = () => {
  test1()

  return (
    <>
      <h1 className='test'>Host</h1>

      <Test />

      <React.Suspense fallback='Loading Header'>
        <App1_Header />
      </React.Suspense>
    </>
  )
}

export default App
