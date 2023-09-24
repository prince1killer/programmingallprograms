import React from 'react'

function Alert(props) {
  return (
    <div className='alert' id="alert">
        {props.alert &&<div class={`alert alert-${props.alert.txt} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.txt}</strong>: {props.alert.mes}
        </div>}
    </div>
  )
}

export default Alert