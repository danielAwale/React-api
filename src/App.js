import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [endPoint, setEndPoint] = useState('')
  const [container, setContainer] = useState([])
  const [finalPoint, setFinalPoint] = useState('')

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'c31c0f80f4mshbb6b108a22becd7p1ccc72jsn990e3c358a6d',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    fetch(`https://imdb8.p.rapidapi.com/auto-complete?q=+${endPoint}`, options)
      .then(response => { return response.json()})
      .then(data => setContainer(data.d))
      .catch(err => console.error(err));
  },[finalPoint])


    const submitHandler = (e) => {
      e.preventDefault()
      setFinalPoint(endPoint)
    }

    const changeEndpoing = (e) => {
      setEndPoint(e.target.value)
    }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input type="text" value={endPoint} onChange={changeEndpoing}/>
        <button type='submit'>submit</button>
      </form>

      {container.map((item,index) => {
        return (
          <div key={index}>
            <img src={item.i.imageUrl} alt="" />
            <p>{item.l}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
