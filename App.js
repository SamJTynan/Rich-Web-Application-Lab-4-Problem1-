const {useState} = React;
 
 function App() {
  const [names, setNames] = useState([ ]);
  
 const Yellow = (e) => {
		 const parentDiv = e.target.parentNode;
     parentDiv.style.backgroundColor = 'Yellow'; 
  }
  
  const Blue = (e) => {
		 const parentDiv = e.target.parentNode;
     parentDiv.style.backgroundColor = 'Blue'; 
  }
  
  const Red = (e) => {
		 const parentDiv = e.target.parentNode;
     parentDiv.style.backgroundColor = 'Red'; 
  }
  
  const Grey = (e) => {
		 const parentDiv = e.target.parentNode;
     parentDiv.style.backgroundColor = 'Grey'; 
  }
  
   const Delete = (e) => {
		 const parentDiv = e.target.parentNode;
    // parentDiv.style.backgroundColor = 'Grey'; 
    // document.getElementById('main').removeChild(input.parentNode);
     parentDiv.remove();
  }
  
  
  
  const element  = (
   <div class = "Note">
   <textarea>Add note.</textarea>
   <br></br>
    <button class ="button yellow" onClick={Yellow}></button>
   <button class ="button blue" onClick={Blue}></button>
   <button class ="button red" onClick={Red}></button>
   <button class ="button grey" onClick={Grey}></button>
    <br></br>
    <br></br>
   <button class ="button delete" onClick={Delete}>Delete</button>
   </div>
);
 

 
  const handleClick = () => {
    setNames(current => [...current, element]);
		
   
  }
   return (
    <div>
      <div>
        <button onClick={handleClick}>Add Note</button>
      </div>

      {names.map((element, index) => {
        return (
          <div key={index}>
            <h2>{element}</h2>
          </div>
        );
      })}
    </div>
  );
};
  

 
ReactDOM.render(<App/>, document.getElementById('root'));
