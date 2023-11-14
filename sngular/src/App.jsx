import { useState } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import SeriesCalculate from './helpers'

const App = () => {
  const [serie, setSerie] = useState(null);

  const hanldeSerie = n => {
    const serieCaculed = SeriesCalculate.calcSerie(n)
    setSerie(serieCaculed)
  };

  return (
    <div className="contenedor">
      <h1>Calculador de Serie</h1>
      <Form onCalc={hanldeSerie} />
      {serie !== null && <Result serie={serie} />}
    </div>
  )
}

export default App
