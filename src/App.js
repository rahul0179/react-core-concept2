import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">



    </div>
  );
}
/* -------------------------------------------------------------------------------
                make component / props /dynamic data set
 ------------------------------------------------------------------------------
const students = ['Rahul barman', 'Zubayer Tolon', 'Turja', 'Arnob']
const people = [
  { name: 'Rahul barman', varsity: 'Diu' },
  { name: 'Sharmin sadiya', varsity: 'Diu' },
  { name: 'MD Rakib', varsity: 'Diu' },
  { name: 'Rakibul Hasan', varsity: 'Diu' },
  { name: 'Mhathir Shipon', varsity: 'Diu' },
]

function App() {
  return (
<div className="App">

{
  people.map(p => <Product name={p.name} varsity={p.varsity}></Product>)
}

{
  students.map(student => <Product name={student}></Product>)
}
</div>
  );
}



function Product(props) {
  return (
    <div className='product'>
      <p>{props.name}</p>
      <p>{props.varsity}</p>
    </div>
  )
}
--------------------------------------------------------------------------------- */





export default App;
