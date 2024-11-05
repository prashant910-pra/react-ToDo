import React from 'react';
import DraggableDiv from './DragAndDrop';

function App() {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          To-Do Example
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
      </div>
    </nav>
    <div className='mt-5'>
            <DraggableDiv />
        </div>
        </>
    );
}

export default App;
