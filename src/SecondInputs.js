import React from 'react'
import { useState } from 'react';
import Feature from './Feature';

export default function SecondInputs(props) {
    const [inputs, setInputs] = useState({ featuresNum: '0', features: []});
    const handleChange = (e) => {
        var name = e.target.name;
        var value = e.target.value;
    
        // Copy the existing inputs so as not to overwrite
        var temp = {...inputs};
        // Update the value that has been enttered
        temp[name] = value;
        console.log(parseInt(value));
        console.log(inputs.featuresNum);
        // If a feature is added, expand the array
        if(parseInt(value)>0&&parseInt(value)>inputs.featuresNum) {
            temp.features.push("");
            console.log(temp.features);
        }
        // If a feature is added, contract the array
        else if(parseInt(value)>0&&parseInt(value)<inputs.featuresNum) {
            temp.features.pop();
            console.log(temp.features);
        }
        else {
            temp.features = [];
        }
        setInputs(temp);
    }

    const featureChange = (value, idx) => {
        inputs.features[idx] = value;
      }
      
    const handleNext = (e) => {
        e.preventDefault();
        props.handleSubmit(inputs.features);
    }
    

    return (
        <div className="sign-up-form m-auto">
        <form>
        <label className="mt-2">
                      Number of key features
                    </label>
                    <input type="number" className="form-control" name="featuresNum" value={inputs.featuresNum} onChange={handleChange} placeholder="Number of features"/>
        <label className="mt-2">
                      Features
                    </label>
                    {parseInt(inputs.featuresNum)>0
                    ?
                      <div>
                      {inputs.features.map((feature, index) => (
                          <Feature key={index} handleChange={featureChange} idx={index}/>
                        ))}
                      </div>
                    :
                      <p className="text-muted">To start adding features, increase the number of key features.</p>
                    }    
          
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
    )
}
