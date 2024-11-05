import { useState } from "react";
import Card from "./Card";

 
function App() {
  // const primer = {
  //   ime: "", // input -> text
  //   prezime: "", // input -> text
  //   gender: "", // male || female, input -> radio
  //   age: "", // od 18 - 30, input -> select
  //   number: "", // input -> number,
  //   hobby: "", // input -> text
  // };

  let [isIncluded, setIsIncluded] = useState(true);

  const [user, setUser]= useState({
    ime: "",  
    prezime: "", 
    gender: "male", 
    age: "12-17", 
    number: "", 
    hobby: "" 
  }
  );

  const [userList,setUserList]=useState([]);

  const handleSubmit = (e)=>{
    
    if(user !== null && !userList.includes(user.ime && user.prezime)){
      setIsIncluded(false);
      userList.push(user)
      setUserList(userList);
      console.log(userList);
      setUser({
        ime: "",  
        prezime: "", 
        gender: "", 
        age: "12 - 17", 
        number: "", 
        hobby: "" 
      });
      
    }else{
      return
    }
    e.preventDefault();
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
       <aside className="editor">
          <div style={{paddingTop:"70px"}}>
            <h1 style={{fontSize:40}}>Imenik</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <h1>Add a Member</h1>
            <p>Please fill out the form</p>
            <div>
              <label htmlFor="ime">First Name:</label> 
              <input type="text" placeholder="Enter your first name..." name="ime"  value={user.ime} onChange={(event) => handleInputChange(event)} required/>  
            </div>
            <div>
              <label htmlFor="prezime">Last Name:</label> 
              <input type="text" placeholder="Enter your last name..." name="prezime" value={user.prezime} onChange={(event) => handleInputChange(event)} required/>  
            </div>
            <div className="radio-btns">
              <input type="radio" name="gender" id="male"  value={"male"} onChange={(event) => handleInputChange(event)}required/>
              <label htmlFor="male">Male: </label>
              <input type="radio" name="gender" id="female" value={"female"} onChange={(event) => handleInputChange(event)}required/>
              <label htmlFor="female">Female: </label>
            </div>
            <select name="age" id="age" onChange={(event) => handleInputChange(event)} required>
              <option value="12 - 17">12 - 17</option>
              <option value="18 - 33" >18 - 33</option>
              <option value="34 - 50" >33 - 50</option>
            </select>
            <div>
              <label htmlFor="phoneNumber">Phone Number: </label>
              <input type="text" name="number" id="phoneNumber" placeholder="Enter your phone number..." value={user.number} onChange={(event) => handleInputChange(event)} required/>
            </div>
            <div>
              <label htmlFor="hobby">Your Hobby: </label>
              <input type="text" name="hobby" id="hobby" placeholder="Enter your hobby..." value={user.hobby} onChange={(event) => handleInputChange(event)} required/>
            </div>
            <button type="submit">Add Member</button>
          </form>
          <p>Created by Adem Mulic 2024</p>
       </aside>
      {/* <main> 
          { 
            userList.map((userItem, i)=> <Card user={userItem} key={i}/>)
          } 
       

      </main> */}
      <div className="data-grid">
     
      {
       
      <table>
        <tr>
          <th>Ime i prezime</th> <th>Gender: </th> <th>Age: </th> <th>Hobby</th><th>Phone number</th>
        </tr>
        {isIncluded && <h1 style={{padding:10}}>No Item added yet</h1>}
        {
        userList.map(userItem=>(
        <tr><td>{userItem.ime} {userItem.prezime}</td><td>{userItem.gender}</td><td>{userItem.age}</td><td>{userItem.hobby}</td><td>{userItem.number}</td></tr>
        ))
        }
      </table>
        }

      </div>
    </div>
  );
}

export default App;
