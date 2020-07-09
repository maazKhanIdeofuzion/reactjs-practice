import * as React from 'react'
import { useState } from 'react';

interface Iprops {
 }

const DatabindingComponent: React.FunctionComponent<Iprops> = (props) => {
    const [inputValue, setInputValue] = useState('')

    const inputOnChangeClicked = (e: any) => {
        setInputValue(e.target.value)
    }
    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1>DatabindingComponent Component</h1>
            <input type="text" onChange={inputOnChangeClicked} value={inputValue}/>
            <p>Input Value <span>{inputValue}</span></p>
        </div>
    )
}
DatabindingComponent.defaultProps = {};

export default DatabindingComponent;