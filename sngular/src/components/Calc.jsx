import SeriesCalculate from '../helpers'

export default function Calc({ serie, onAction }){
    const calculateSerie = () => {
      const serieTotal = SeriesCalculate.calcSerie(serie);
      onAction(serieTotal);
    }
  
    return (
      <div>
        <button onClick={calculateSerie}>Ejecutar</button>
      </div>
    )
  }