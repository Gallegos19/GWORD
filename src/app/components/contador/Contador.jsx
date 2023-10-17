'use client'
import './Contador.css'

export default function Contador(props) {

let num = props.contador

  return (
    <div className='containerContador'>
    <h3>
        {props.texto}
    </h3>
    <p>
        {num}
    </p>
    </div>
  )
}
