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

  const [user, setUser]= useState({
    ime: "",  
    prezime: "", 
    gender: "", 
    age: "", 
    number: "", 
    hobby: "" 
  }
  );

  const [userList,setUserList]=useState([]);

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(user !== null){
      userList.push(user)
      setUserList(userList);
      console.log(userList);
      setUser({
        ime: "",  
        prezime: "", 
        gender: "", 
        age: "", 
        number: "", 
        hobby: "" 
      });
      
    }else{
      return;
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="App">
       <aside className="editor">
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
              <input type="radio" name="gender" id="male"  value={"male"} onChange={(event) => handleInputChange(event)} required/>
              <label htmlFor="male">Male: </label>
              <input type="radio" name="gender" id="female" value={"female"} onChange={(event) => handleInputChange(event)} required/>
              <label htmlFor="female">Female: </label>
            </div>
            <select name="age" id="age" onChange={(event) => handleInputChange(event)}>
              <option value="12 - 17 " seleced = "true">12 - 17</option>
              <option value="18 - 33" >18 - 33</option>
              <option value="34 - 50" >33 - 50</option>
            </select>
            <div>
              <label htmlFor="hobby">Your Hobby: </label>
              <input type="text" name="hobby" id="hobby" placeholder="Enter your hobby..." value={user.hobby} onChange={(event) => handleInputChange(event)} required/>
            </div>
            <button type="submit">Add Member</button>
          </form>
       </aside>
      <main>
        {
          userList.map(userItem=>(
            <Card user={userItem} key={userItem && userItem.ime}/>
          ))
        }
        
         
      </main>
    </div>
  );
}

export default App;
