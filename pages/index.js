import Head from 'next/head'
import ChartWrapper from '../components/ChartWrapper'
import Navbar from 'react-bootstrap/Navbar'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}

export default function Home() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className="container">
        <Head>
          <title>d3 Udemy Lesson 1</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Navbar>
            <Navbar.Brand>Barchartly</Navbar.Brand>
          </Navbar>
          <ChartWrapper/>
        </main>

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />

      </div>
    </ErrorBoundary>
  )
}