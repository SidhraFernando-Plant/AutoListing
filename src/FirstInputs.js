import React from 'react'
import { useState } from 'react';

export default function FirstInputs(props) {
    const [inputs, setInputs] = useState({ name: "", description: "", youtube: '', openCritic: ""});
    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
        // Copy the existing inputs so as not to overwrite
        var temp = {...inputs};
        // Update the value that has been enttered
        temp[name] = value;
        setInputs(temp);
    }

    const featureChange = (value, idx) => {
    console.log(value);
    console.log(idx);
    inputs.features[idx] = value;
  }

  const handleNext = (e) => {
    e.preventDefault();
    props.handleSubmit(inputs.name, inputs.youtube, inputs.description, inputs.openCritic);
  }

    return (
      <div className="sign-up-form m-auto">
        <form>
          <label>Game name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Game name"
          />
          <label>Youtube embed</label>
          <textarea
            type="text"
            className="form-control"
            name="youtube"
            value={inputs.youtube}
            onChange={handleChange}
            placeholder="Youtube link"
            rows="7"
          />
            <label className="mt-2">
                Open Critic Number
            </label>
            <input type="number" className="form-control" name="openCritic" value={inputs.openCritic} onChange={handleChange} placeholder="OpenCritic number"/>
          <label className="mt-2">Game description</label>
          <textarea
            type="text"
            className="form-control"
            name="description"
            rows="10"
            value={inputs.description}
            onChange={handleChange}
            placeholder="Description"
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
        <p>
            {props.hi}
        </p>
      </div>
    );
}
