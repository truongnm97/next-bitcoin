const Prices = ({ currencies, currency, setCurrency, bpi }) => {
  return (
    <div>
      {bpi ? (
        <ul className='list-group'>
          <li className='list-group-item'>
            Bitcoin rate for {bpi.description}:{' '}
            <span className='badge badge-primary'>{bpi.code}</span> <strong>{bpi.rate}</strong>
          </li>
        </ul>
      ) : (
        <div className='spinner-border mx-auto my-3 d-block' role='status'>
          <span className='sr-only'>Loading...</span>
        </div>
      )}
      <br />
      <select
        className='form-control'
        onChange={(e) => setCurrency(e.target.value)}
        value={currency}>
        {currencies.map((curr, index) => (
          <option key={index} value={curr.currency}>
            {curr.currency}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Prices
