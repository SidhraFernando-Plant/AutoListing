import React from 'react'

export default function Success(props) {
    return (
        <div className="sign-up-form m-auto">
            <textarea readOnly type="text" className="form-control" name="description" rows="20" value={props.generatedTxt}/>
            <div className="d-flex justify-content-center mt-2">
                <a href="/">
                    <button
                    className="btn btn-info mr-2"
                    >
                    Start again
                    </button>
                </a>
            </div>
        </div>
    )
}
