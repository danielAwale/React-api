import './App.css';

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c31c0f80f4mshbb6b108a22becd7p1ccc72jsn990e3c358a6d',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };

  fetch('https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  return (
    <div className="App">
    </div>
  );
}

export default App;
