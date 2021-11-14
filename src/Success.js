import React from 'react'

export default function Success(props) {
    return (
        <div className="sign-up-form m-auto">
            <textarea readOnly type="text" className="form-control" name="description" rows="20" value={props.generatedTxt}/>
        </div>
    )
}
