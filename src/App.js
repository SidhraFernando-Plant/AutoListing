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
import Header from './Header';

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

  const firstSubmit = (inputName, inputYoutube, inputDescription, inputOpenCritic) => {
    inputs.name = inputName;
    inputs.youtube = inputYoutube;
    inputs.description = inputDescription;
    localStorage.setItem("nameOfGame", inputName);
    localStorage.setItem("gameYoutubeLink", inputYoutube);
    localStorage.setItem("gameOpenCritic", inputOpenCritic);
    localStorage.setItem("descriptionOfGame", JSON.stringify(inputDescription));
    window.location.href = "/second-inputs";
    
  }

  const secondSubmit = (inputFeatures) => {
    inputs.features = inputFeatures;
    localStorage.setItem("featuresOfGame", JSON.stringify(inputFeatures));
    window.location.href = "/third-inputs";

  }

  const thirdSubmit = (inputMinReqs, inputReqRecs, inputKeyType) => {
    var inputMinReqs = inputMinReqs.split("\n");
    var inputReqRecs = inputReqRecs.split("\n");
    localStorage.setItem("minReqsOfGame", JSON.stringify(inputMinReqs));
    localStorage.setItem("recReqsOfGame", JSON.stringify(inputReqRecs));
    localStorage.setItem("gameKeyType", inputKeyType);
    var allInputs = { name: localStorage.getItem("nameOfGame"), 
    description: JSON.parse(localStorage.getItem("descriptionOfGame")), 
    youtube: localStorage.getItem("gameYoutubeLink"), 
    openCritic: localStorage.getItem("gameOpenCritic"), 
    features: JSON.parse(localStorage.getItem("featuresOfGame")),
    minReqs: JSON.parse(localStorage.getItem("minReqsOfGame")),
    recReqs: JSON.parse(localStorage.getItem("recReqsOfGame")),
    keyType: localStorage.getItem("gameKeyType"),
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
            <Header/>
            <Routes>
              <Route path='/third-inputs' element={<ThirdInputs handleSubmit={thirdSubmit}/>} />
              <Route path='/second-inputs' element={<SecondInputs handleSubmit={secondSubmit}/>} />
              <Route path='/success' element={<Success generatedTxt={generatedTxt}/>} />
              <Route path='/' element={<FirstInputs handleSubmit={firstSubmit}/>} />
            </Routes>
          </div>
      </main>
  );
}

export default App;
