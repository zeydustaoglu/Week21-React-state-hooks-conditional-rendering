import React from "react";
import mentors from "./dataSchool";

const [zeyd, angela] = mentors;

const {
  name: zeydName,
  branch: zeydBranch,
  contact: {
    tel: zeydTel,
    email: zeydEmail,
    adres: zeydAdres
  },
  experience:[zeydExperience]
} = zeyd;

const {
    name: angelaName,
    branch: angelaBranch,
    contact: {
      tel: angelaTel,
      email: angelaEmail,
      adres: angelaAdres
    },
    experience:[angelaExperience]
  } = angela;

function App2() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Branch</th>
          <th scope="col">Tel</th>
          <th scope="col">Email</th>
          <th scope="col">Adres</th>
          <th scope="col">Experience</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{zeyd.name}</td>
          <td>{zeydBranch}</td>
          <td>{zeydTel}</td>
          <td>{zeydEmail}</td>
          <td>{zeydAdres}</td>
          {zeydExperience>5 ? <td style={{backgroundColor:'yellow'}}>{zeydExperience}</td> : <td>{zeydExperience}</td>}          
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>{angela.name}</td>
          <td>{angelaBranch}</td>
          <td>{angelaTel}</td>
          <td>{angelaEmail}</td>
          <td>{angelaAdres}</td>
          {angelaExperience>5 ? <td style={{backgroundColor:'yellow'}}>{angelaExperience}</td> : <td>{angelaExperience}</td>}
        </tr>
      </tbody>
    </table>
  );
}

export default App2;
