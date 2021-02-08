import React from 'react'
import './App.css';
import ProfileComponent from './Profile/ProfileComponent'


function App() {
const fullName= "Wael Mhamdi"

  const handleName=()=> {

    alert(fullName)
  }
 
  const inlineStyle = {
    width: '700px',
    height: '300px',
    color: 'white',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    padding: '100px',
    float: 'left',
    backgroundColor: 'yellow',
    backgroundImage: "url(MyPic.jpg)",
    backgroundSize: 'cover',
  }
return (
    <div style={{backgroundColor : "#098091"}}>
       <ProfileComponent 
       fullName={fullName}
       bio="high"
       profession="Developer"
      handleName= {handleName}
      
      >
        <div style={inlineStyle}>
         <img src="MyPic.jpg" width="400" height="500" alt="mypic"/>
         </div>
       </ProfileComponent>
    </div>
    
)

}


export default App;
