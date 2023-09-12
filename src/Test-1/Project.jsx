import React, { useState } from 'react';
import { InputGroup, Form, Table, Container } from "react-bootstrap";
import { Data } from "./Data";

export default function Project() {
    const [search, setSearch] = useState("");
    return (
        <div className="app">
            <Container>
                <h1 className="text-center mt-4">Contact Keeper</h1>
                <form action="">
                    <InputGroup className="mb-3">
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
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
                        const searchLowerCase = search.toLowerCase();
                        return (
                            searchLowerCase === "" || // Show all data when the search input is empty
                            item.first_name.toLowerCase().includes(searchLowerCase) ||
                            item.last_name.toLowerCase().includes(searchLowerCase) ||
                            item.email.toLowerCase().includes(searchLowerCase) ||
                            item.phone.includes(searchLowerCase)
                        );
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
}
