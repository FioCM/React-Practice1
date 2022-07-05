import logo from './logo.svg';
import './App.css';
import Superior from './Superior';
import Tarjeta from './Tarjeta';
import Inferior from './Inferior';

function App() {
  return (
    <div className="App">

      <div className='Superior'>
        <Superior titulo={"Mis Gatitos"} texto={"Esta será una página acerca de mis gatitos"} />
      </div>

      <br></br>
      <br></br>

      <div className='Tarjetas'>
        <Tarjeta className='cards' nombre={"Conny"} age={"Tiene 2 añitos y 6 meses"} info={"Es una gata tricolor, amoroso pero aveces enojona, aunque bastante tranquila y callada, recordando que también es muy hermosa."}/>
        <Tarjeta className='cards' nombre={"Simón"} age={"Tiene 1 añito y 6 meses"} info={"Es una gato bicolor, muy amoroso y gordito,tranquilito pero aveces se vuelve loco, demasiado hermoso, todos lo amamos."}/>
        <Tarjeta className='cards' nombre={"Bella"} age={"Tiene 6 meses"} info={"Es una gata tricolor, amorosa y muy juguetona, bastante loca pero también muy dormilona, también es muy hermosa."}/>
      </div>

      <br></br>

      <div className='Inferior'>
        <Inferior nombre={"Ashley Castillo"} info={"Estudiante de la UCreativa, Desarrolladora Web Junior, Aspirante a carrera de Medicina"}/>
      </div>

    </div>
  );
}

export default App;
