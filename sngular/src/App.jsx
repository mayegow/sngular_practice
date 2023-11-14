import { useState } from 'react'
import Form from './components/Form'
import Result from './components/Result'
import SeriesCalculate from './helpers'

const App = () => {
  const [serie, setSerie] = useState(null);

  const calcSerie = number => {
    let serie = new SeriesCalculate()
    const result = (3 * SeriesCalculate.fibonacci(number) - 3 * SeriesCalculate.triangular(number-1)) / (number - 10) * SeriesCalculate.primo(number + 2)
    return result
  }

  const hanldeSerie = n => {
    const serieCaculed = calcSerie(n)
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
