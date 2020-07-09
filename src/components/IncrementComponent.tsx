import * as React from 'react'

interface Iprops { 
    value: number
 }

const IncrementComponent: React.FunctionComponent<Iprops> = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <h1>Increment Component</h1>
            <p>Increment: <span>{props.value}</span></p>
        </div>
    )
}
IncrementComponent.defaultProps = {};

export default IncrementComponent;