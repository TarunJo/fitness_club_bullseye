import { useState } from 'react';
import './App.css';
import TableRows from "./Table.jsx"

function App() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [data, setData] = useState([]);
  const [stat, setStat] = useState(true);

  function store(e) {
    e.preventDefault();
    data.push({
      Name: name,
      Email: email,
      Phone: phone,
      Address: address
    });
    console.log(data);
    alert("Entry Recorded!");
  }

  const [rowsData, setRowsData] = useState([]);

  function Members(e) {
    e.preventDefault();
    for (let i = 0; i < data.length; i++) {
        setRowsData([...rowsData, data[i]])
    }
    
    setStat(false);
  }

  function Back(e){
    e.preventDefault();
    setStat(true);
  }

  if (stat) {
    return (
      <div className="App">
        <div id="container">
          <p id="Heading">Fitness Club Registration</p>
          <form onSubmit={store}>
            <input type="text" placeholder="Name" onChange={(e) => { setName(e.target.value) }} required></input><br />
            <input type="text" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} required></input><br />
            <input type="number" placeholder="Phone number" onChange={(e) => { setPhone(e.target.value) }} required></input><br />
            <input type="text" placeholder="address" onChange={(e) => { setAddress(e.target.value) }} required></input><br />
            <input type="submit" id="submit" value="Add Member"></input>
          </form>
        </div>
        <input type="submit" id="showData" value="View Member List" onClick={Members}></input>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <div id="container">
          <p id="Heading">Member List</p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Address</th>
              </tr>
            </thead>
          </table>
        </div>
        <input type="submit" id="showData" value="Back TO Home" onClick={Back}></input>
      </div>
    );
  }
}
export default App;
