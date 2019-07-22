import React from 'react';
import FileListItem from './FileListItem';
import data from './data.json';
import './App.css';



function App() {
  return (
    <div className="App">
      
      <table>
        <tbody>
         {data.map((e,i) => <FileListItem key={i} data={e}/>)}
        </tbody>
      </table>
    </div>

  );
}



export default App;
