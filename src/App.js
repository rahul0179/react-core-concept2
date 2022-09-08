import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {

  return (
    <div className="App">
      <ExtrernalUsers></ExtrernalUsers>


    </div>
  );
}

function ExtrernalUsers() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(jData => setUser(jData))
  }, [])
  return (
    <div>
      <h1>Extrenal Users</h1>


      {
        user.map(u => <User name={u.name} email={u.email}></User>)
      }
    </div>

  )
}

function User(props) {
  return (
    <div style={{ border: '2px solid red', margin: '4px' }}>
      <h3>Name:{props.name}</h3>
      <h3>Email: {props.email}</h3>
    </div>



  )
}




/* ----------------------------------------------------
             useState()
---------------------------------------------------             
function App() {

  return (
    <div className="App">
      <Counter></Counter>


    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(55)


  const increaseCount = () => setCount(count + 1)
  const decreaseCount = () => setCount(count - 1)



   const increaseCount = () => {
     const newCount = count + 1;
     setCount(newCount); 
} 

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Incress</button>
      <button onClick={decreaseCount}>Decress</button>
    </div>
  )
}
----------------------------------------------------
 */


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
