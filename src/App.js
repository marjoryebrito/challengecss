import './App.css';
import CarDetails from './components/CarDetails';

function App() {


    const cars = [
      {id: 1, brand:"Jipe", km: 100, color: "Verde"},
      {id: 2, brand:"Kia", km: 0, color: "Branco"},
      {id: 3, brand:"BMW", km: 1500, color: "preto"},
    ];

  return (
    <div className="App">
      <h1 className='title_app'>Challenge CSS</h1>
    {
        cars.map((car) =>(
          <CarDetails key= {car.id} brand={car.brand} color={car.color} km={car.km}/>
        ))
      }
    </div>
  );
}

export default App;
