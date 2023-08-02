import React from 'react'

export default function MyAlert(props) {
  return (
    props.alertMsg && <div className='container my-2'  style={{height:'50px'}} >
         <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{props.alertMsg.type}</strong> : {props.alertMsg.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    </div>
  )
}