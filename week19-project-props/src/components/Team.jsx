import React from "react";
import TeamEntry from "./TeamEntry";
import ourTeam from "../ourTeam";

function createEntry(teamTerm) {
  return (
    <TeamEntry
      key = {teamTerm.id}
      name = {teamTerm.name}
      tel = {teamTerm.tel}
      email = {teamTerm.email}
      title = {teamTerm.title}
      img = {teamTerm.img}
    />
  );
}

function Team() {
  return (
    <div >
      <h1 style={{'textAlign':'center'}}>
        <span>Our Team</span>
      </h1>   
      <div className="row" style={{'textAlign':'center'}}>
      {ourTeam.map(createEntry)}   
      </div>   
     
    </div>
  );
}

export default Team;
