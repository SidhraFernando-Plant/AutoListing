import React from 'react'
import { useState } from 'react';
import Feature from './Feature';

export default function ThirdInputs(props) {
    const [inputs, setInputs] = useState({ minReqs: '', recReqs: ''});
    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        // Copy the existing inputs so as not to overwrite
        var temp = {...inputs};
        // Update the value that has been enttered
        temp[name] = value;
        setInputs(temp);
    }
      
    const handleNext = (e) => {
        e.preventDefault();
        props.handleSubmit(inputs.minReqs, inputs.recReqs);
    }

    return (
      <div className="sign-up-form m-auto">
        <form>
          <label className="mt-2">Minimum Requirements</label>
          <textarea
            type="text"
            className="form-control"
            name="minReqs"
            rows="2"
            value={inputs.minReqs}
            onChange={handleChange}
            placeholder="Minimum requirements"
          />
          <label className="mt-2">Recommended Requirements:</label>
          <textarea
            type="text"
            className="form-control"
            name="recReqs"
            rows="2"
            value={inputs.recReqs}
            onChange={handleChange}
            placeholder="Recommended requirements"
          />

          <div className="d-flex justify-content-center mt-2">
            <button
              data-testid="test-btn"
              className="btn btn-info"
              onClick={handleNext}
            >
              Next →
            </button>
          </div>
        </form>
      </div>
    );
}
