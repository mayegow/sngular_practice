import {useState} from 'react'

export default function Form({ onCalc }){
  const [number, setNumber] = useState(0)

  const handleInputChange = (e) => {
    setNumber(parseInt(e.target.value, 10))
  }

  const handleSubmit = e => {
    e.preventDefault()
    onCalc(number)
  }

  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <label>
        Ingrese un valor:
        <input className="campo" type="number" value={number} onChange={handleInputChange} />
      </label>
      <div className="campo">
        <button type="submit">Calcular Término</button>
      </div>
    </form>
  )
}


