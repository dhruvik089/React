import React, { useContext } from 'react'
import { childContext } from "./Parent";
import SubChild from './SubChild';

function Child() {
    const Childname=useContext(childContext)
    return (
        <>
            <h1>{Childname}</h1>
            <SubChild/>
        </>
    )
}

export default Child