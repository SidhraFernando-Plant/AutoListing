import React from 'react'
import { useState } from 'react';
import Feature from './Feature';

export default function ThirdInputs(props) {
    const [inputs, setInputs] = useState({ minReqs: '', recReqs: '', keyType: ''});
    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        // Copy the existing inputs so as not to overwrite
        var temp = {...inputs};
        // Update the value that has been enttered
        temp[name] = value;
        setInputs(temp);
        console.log(inputs);
    }

    const radioChange = (e) => {
        console.log(e.target.value);
    }
      
    const handleNext = (e) => {
        e.preventDefault();
        props.handleSubmit(inputs.minReqs, inputs.recReqs, inputs.keyType);
    }

    return (
      <div className="sign-up-form m-auto">
        <form>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="keyType"
              id="exampleRadios1"
              value="steam"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Steam
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="keyType"
              id="exampleRadios2"
              value="origin"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Origin
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="keyType"
              id="exampleRadios3"
              value="gog"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
              GOG.com
            </label>
          </div>
          <label className="mt-2">Minimum Requirements</label>
          <textarea
            type="text"
            className="form-control"
            name="minReqs"
            rows="9"
            value={inputs.minReqs}
            onChange={handleChange}
            placeholder="Minimum requirements"
          />
          <label className="mt-2">Recommended Requirements:</label>
          <textarea
            type="text"
            className="form-control"
            name="recReqs"
            rows="9"
            value={inputs.recReqs}
            onChange={handleChange}
            placeholder="Recommended requirements"
          />
        </form>
        <div className="d-flex justify-content-center mt-2">
          <a href="/second-inputs">
            <button className="btn btn-outline-info mr-2">← Back</button>
          </a>
          <button
            data-testid="test-btn"
            className="btn btn-info"
            onClick={handleNext}
          >
            Next →
          </button>
        </div>
      </div>
    );
}
