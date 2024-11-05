import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CreateToDo =(action) =>{
    const [showModal, setShowModal] = useState(false);
    setShowModal(action)
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="container mt-4">
      <h2>Bootstrap Modal Example</h2>
      <button className="btn btn-primary" onClick={handleShow}>
        Open Modal
      </button>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden={!showModal}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal Title</h5>
              <button type="button" className="close" onClick={handleClose} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              This is a simple modal example using Bootstrap in React.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
              <button type="button" className="btn btn-primary" onClick={handleClose}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <div className="modal-backdrop fade show"></div>}
    </div>
  );
}

const DraggableDiv = () => {
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [toDoData,setToDoData] = useState([])
    const handleDragStart = (e) => {
        // Store the initial position of the mouse when dragging starts
        e.dataTransfer.setData("text/plain", JSON.stringify(position));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const dropX = e.clientX;
        const dropY = e.clientY;

        // Update the position of the div based on the drop location
        setPosition({ x: dropX, y: dropY });
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default to allow drop
    };

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/')
          .then(response => response.json())
          .then((json) =>{ 
            
            console.log(json)
            setToDoData(json)}
        )
      },[]);
    return (
        <div className="container">
        <div className="row">
          {/* Section 1 */}
          
          <div className="col-md-4">
          {toDoData && toDoData.map((todo) => (
            <>
              {!todo.completed ?
             <div className="card mb-2" style={{ width: '18rem',lineHeight:'17px' }}>
        
             <div className="card-body">
                <div className='flex justify-between' style={{display: 'flex', justifyContent: 'space-between'}}>
                <h5 className="card-title">To-Do</h5>
              
           
            <span className="badge bg-secondary me-2" style={{lineHeight:'20px'}}>To-Do</span>    
               
                
                </div>
               
               <p className="card-text">
                 {todo.title}
               </p>
               <div style={{ fontSize: '1.2rem',display: 'flex',justifyContent: 'flex-end' }}>
                <span title="Create" style={{ cursor: 'pointer' }}>
          <i className="bi bi-plus-circle pointer" />
        </span>
        <span title="Edit" style={{ cursor: 'pointer' }}>
          <i className="bi bi-pencil" />
        </span>
        <span title="Delete" style={{ cursor: 'pointer' }}>
          <i className="bi bi-trash" />
        </span>
        <span title="View" style={{ cursor: 'pointer' }}>
          <i className="bi bi-eye" />
        </span>
      </div>
             </div>
           </div>
           :
           <div></div>
        }
        </>
               ))}
          </div>

          <div className="col-md-4">
          {toDoData && toDoData.map((todo) => (
            <>
              {todo.completed ?
             <div className="card mb-2" style={{ width: '18rem',lineHeight:'17px' }}>
        
             <div className="card-body">
                <div className='flex justify-between' style={{display: 'flex', justifyContent: 'space-between'}}>
                <h5 className="card-title">To-Do</h5>
              
           
            <span className="badge bg-success me-2" style={{lineHeight:'20px'}}>completed</span>    
               
                
                </div>
               
               <p className="card-text">
                 {todo.title}
               </p>
               <div style={{ fontSize: '1.2rem',display: 'flex',justifyContent: 'flex-end' }}>
        <span title="Create" style={{ cursor: 'pointer' }}>
          <i className="bi bi-plus-circle pointer" />
        </span>
        <span title="Edit" style={{ cursor: 'pointer' }}>
          <i className="bi bi-pencil" />
        </span>
        <span title="Delete" style={{ cursor: 'pointer' }}>
          <i className="bi bi-trash" />
        </span>
        <span title="View" style={{ cursor: 'pointer' }}>
          <i className="bi bi-eye" />
        </span>
      </div>
             </div>
           </div>
           :
           <div></div>
        }
        </>
               ))}
          </div>
     
  
         
        </div>
        
      </div>
    );
};

export default DraggableDiv;
