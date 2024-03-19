import React, { useContext } from 'react'
import { subchildContext } from "./Parent";

function SubChild() {
    const { Subchildname } = useContext(subchildContext);
    return (
        <>
            {/* <h1><Subchildname/></h1> */}
        </>
    )
}

export default SubChild
