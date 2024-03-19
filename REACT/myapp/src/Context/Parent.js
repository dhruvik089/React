import React, { createContext, useState } from 'react'
import Child from "./Child";
import SubChild from './SubChild';
export const childContext = createContext()
export const subchildContext = createContext()
function Parent() {
    const [childname, setChildName] = useState('child');
    const [subchildname, setSubChildName] = useState('Subchild');

    return (
        <>
            <childContext.Provider value={{ Childname: childname }}>
                <h1>Parent</h1>
                <Child />
            </childContext.Provider>

            {/* <subchildContext.Provider value={{ Subchildname: subchildname }}>
                <h1>SubParent</h1>
                <SubChild />
            </subchildContext.Provider> */}

        </>

    )
}

export default Parent