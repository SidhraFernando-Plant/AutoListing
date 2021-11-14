import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Feature from './Feature';
import { foo } from './repository'
import FinalPopUp from './FinalPopUp';
import FirstInputs from './FirstInputs';
import { Routes ,Route, Router } from 'react-router-dom';
import SecondInputs from './SecondInputs';
import ThirdInputs from './ThirdInputs';
import Success from './Success';

function App() {
  const [inputs, setInputs] = useState({ name: "", description: "", youtube: "", featuresNum: '0', features: [], minReqs: "", recReqs: ""});
  const [generatedTxt, setGeneratedTxt] = useState(localStorage.getItem("finalGameText"));
  var name = '';
  var youtube = '';
  var description = '';
  var features = [];
  var minReqs = "";
  var recReqs = "";
  
  // When an input is entered into a field, update the corresponding valuue in the inputs state
  const handleChange = (e) => {

    var name = e.target.name;
    var value = e.target.value;
    
    // Copy the existing inputs so as not to overwrite
    var temp = {...inputs};
    // Update the value that has been enttered
    temp[name] = value;
    if(name==='featuresNum'&&parseInt(value)>0) {
      temp.features = Array.apply(null, Array(parseInt(value))).map(function () {});
    }
    else {
      temp.features = Array.apply(null, Array(0)).map(function () {});
    }
    setInputs(temp);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
    var str = foo(inputs.name, 'youtube-link-here', inputs.description, inputs.features);
    setGeneratedTxt(str);
    
  }

  const firstSubmit = (inputName, inputYoutube, inputDescription) => {
    inputs.name = inputName;
    inputs.youtube = inputYoutube;
    inputs.description = inputDescription;
    localStorage.setItem("nameOfGame", inputName);
    localStorage.setItem("gameYoutubeLink", inputYoutube);
    localStorage.setItem("descriptionOfGame", inputDescription);
    window.location.href = "/second-inputs";
    
  }

  const secondSubmit = (inputFeatures) => {
    inputs.features = inputFeatures;
    localStorage.setItem("featuresOfGame", JSON.stringify(inputFeatures));
    window.location.href = "/third-inputs";

  }

  const thirdSubmit = (inputMinReqs, inputReqRecs) => {
    var inputMinReqs = inputMinReqs.split("\n");
    var inputReqRecs = inputReqRecs.split("\n");
    localStorage.setItem("minReqsOfGame", JSON.stringify(inputMinReqs));
    localStorage.setItem("recReqsOfGame", JSON.stringify(inputReqRecs));
    var allInputs = { name: localStorage.getItem("nameOfGame"), 
    description: localStorage.getItem("descriptionOfGame"), 
    youtube: localStorage.getItem("gameYoutubeLink"), 
    features: JSON.parse(localStorage.getItem("featuresOfGame")),
    minReqs: JSON.parse(localStorage.getItem("minReqsOfGame")),
    recReqs: JSON.parse(localStorage.getItem("recReqsOfGame")),
  }
    var finalStr = foo(allInputs);
    localStorage.setItem("finalGameText", finalStr);
    setGeneratedTxt(finalStr);
    window.location.href = "/success";
    console.log(inputs);

  }

  const featureChange = (value, idx) => {
    console.log(value);
    console.log(idx);
    inputs.features[idx] = value;
  }

  return (
    <main>

          <div>
            <Routes>
              <Route path='/third-inputs' element={<ThirdInputs handleSubmit={thirdSubmit}/>} />
              <Route path='/second-inputs' element={<SecondInputs handleSubmit={secondSubmit}/>} />
              <Route path='/success' element={<Success generatedTxt={generatedTxt}/>} />
              <Route path='/' element={<FirstInputs handleSubmit={firstSubmit}/>} />
            </Routes>
          </div>

      
      {/* <FirstInputs/> */}
            {/* <form>
                  <label>
                    Game name
                   </label>
                    <input type="text" className="form-control" name="name" value={inputs.name} onChange={handleChange} placeholder="Game name"/>
                    <label className="mt-2">
                      Game description
                    </label>
                    <textarea type="text" className="form-control" name="description" rows="2" value={inputs.description} onChange={handleChange} placeholder="Description"/>
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
                    <button data-testid="test-btn" className="btn btn-info" onClick={handleSubmit}>  Generate</button>
                </div>
                
            </form>
            {generatedTxt!=='' &&
            <textarea type="text" className="form-control" name="description" rows="5" value={generatedTxt} onChange={handleChange} placeholder="Description"/>
            } */}
      </main>
  );
}

export default App;
