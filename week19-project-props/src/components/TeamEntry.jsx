import React from "react";

const style={
 
}
function TeamEntry(props) {
  return (
    <div className="col-md-4" style={{'textAlign':'center'}} >
    <div className="card mb-3" style={style}>
        <div className="row no-gutters" style={{'margin':'20px'}}>
          <div className="col-md-4">
            <img src={props.img} className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">
               {props.tel}
              </p>
              <p className="card-text">
               {props.email}
              </p>
              <p className="card-text">
                <small className="text-muted">{props.title}</small>
              </p>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
}

export default TeamEntry;
