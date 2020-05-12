import { useState, useEffect } from 'react'
import Fetch from 'isomorphic-unfetch'

import Prices from '../components/Prices'
import Layout from '../components/Layout'

const Index = (props) => {
  const [currency, setCurrency] = useState('USD')
  const [bpi, setBpi] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      const data = await res.json()
      setBpi(data.bpi)
    }

    getData()
  }, [currency])

  return (
    <Layout>
      <div>
        <h1>Welcome to Next Bitcoin</h1>
        {bpi && (
          <Prices
            bpi={bpi[currency]}
            currencies={props.currencies}
            currency={currency}
            setCurrency={setCurrency}
          />
        )}
      </div>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const curr = await fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
  const dataCurr = await curr.json()

  return {
    currencies: dataCurr,
  }
}

export default Index
