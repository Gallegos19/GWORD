'use client'
import React from 'react'
import Swal from 'sweetalert2'
import Palabras from '../../palabra/Palabras'
import Input from '../../input/Input'
import Loader from '../../loader/loader'
import Alert from '../../Alert/Alert'
import AlertSuccess from '../../Alert/AlertSuccess'
import Contador from '../../contador/Contador'
import Button from '../../button/button'
import Title from '../../title/title'
import Subtitle from '../../subtitle/Subtitle'
import './home.css'
export default function home() {

    
  return (
    <div className='container'> 
        <Title />
        <Subtitle />
        <Palabras />
       
     
    </div>
  )
}
