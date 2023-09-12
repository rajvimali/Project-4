import React, { useState } from "react";
import { InputGroup, Form, Table, Container } from "react-bootstrap";
import { Data } from "./Test-1/Data";

function App() {
  return function App({ cards }) {
    const [search, setSearch] = useState("");

    return (
      <div className="app">
        <Container>
          <h1 className="text-center mt-4">Contact Keeper</h1>
          <form action="">
            <InputGroup className="mb-3">
              <Form.Control
                onChange={(e) => setSearch(e.target.vale)}
                placeholder="Search Contact"
              />
            </InputGroup>
          </form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {Data.filter((item) => {
                return search.toLocaleLowerCase()
                  ? item
                  : item.first_name.toLocaleLowerCase().includes(search);
              }).map((item) => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  };
}

export default App;
