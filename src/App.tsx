import React, { useState, useEffect } from "react";
import './App.css';

function App() {

  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch("https://frankhe169-scaling-guide-q79w6qgp9rvc67qx-3000.preview.app.github.dev/") // Make a GET request to the API endpoint
      .then(response => {
        if (!response.ok) {
          throw new Error("Error fetching visitor count"); // Catch any errors and throw a new error
        }
        return response.text(); // Get the response as plain text
      })
      .then(count => setVisitorCount(Number(count))) // Convert the count to a number and update the visitorCount state
      .catch(error => console.error(error)); // Catch the error and log it to the console
  }, []);


  return (
    <div className="app">
      <div className="header">        
          <h2>My Blog</h2>
          <img src="trumpportraitt-632x800.jpg"></img>
      </div>

      <div className="content">
        Write something here
      </div>

      <div>Visitor Count: {visitorCount}</div>
      
    </div>
  );
}

export default App;
