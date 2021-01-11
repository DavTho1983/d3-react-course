import Head from 'next/head'
import ChartWrapper from '../components/ChartWrapper'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import GenderDropdown from '../components/GenderDropdown'
import { ErrorBoundary } from 'react-error-boundary'
import { useEffect, useState } from 'react'

function ErrorFallback({error}) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{color: 'red'}}>{error.message}</pre>
    </div>
  )
}

export default function Home() {
  const [ gender, setGender ] = useState('male')

  const changeGender = (gender) => setGender(gender)

  useEffect(() => {
    console.log("GENDER SELECTED", gender)
  }, [gender])

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
          <Container>
            <Row>
              <Col xs={12}>
                <GenderDropdown genderSelected={changeGender}/>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <ChartWrapper gender={gender}/>
              </Col>
            </Row>
          </Container>
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