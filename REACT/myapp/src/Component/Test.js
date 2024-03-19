import React from 'react'
import Data from './Data.js'
import { useParams } from 'react-router-dom'

function Test() {

    const {id} = useParams()
    console.log (typeof (id))
    // console.log (Data)
    const DatId = Data.find((data) => data.id === Number(id))
    console.log(typeof (DatId.id))
  return (
    <>
        <h1>{DatId.id}</h1>
        <h1>{DatId.name}</h1>
    </>
  )
}

export default Test