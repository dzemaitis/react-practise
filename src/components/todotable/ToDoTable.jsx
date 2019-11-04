import React, {Component} from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Row';
import nextId from "react-id-generator";
import Container from 'react-bootstrap/Container'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tableContent: [],
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleClick(){
        let updatedTable = this.state.tableContent;
        updatedTable.push({
            key: nextId(),
            subject: this.state.subject,
            priority: this.state.priority,
            due_date: this.state.due_date,
            status: "In progress",
            date: new Date().toLocaleString(),

        });
        this.setState({
            tableContent: updatedTable,
        });
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
        })

    }

    handleDelete(key){
        let update = this.state.tableContent;
        for(let i of update){
            if(key === i.key){
                update = update.filter(item => item !== i)
            }
        }
        this.setState({
            tableContent: update,
        });
    }
    //sumeciau i containerio viena row, kad salia butu.
    render(){
        return (
            <Container>
                <Row>
                    <Col sm={12}>
                        <Form>
                            <Form.Group as={Row} controlId="formHorizontalEmail">
                                <Form.Label column sm={2}>
                                    Subject
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Subject" name="subject" value={this.state.value} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>

                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label as="legend" column sm={2}>
                                        Priority
                                    </Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            type="radio"
                                            value="low"
                                            onChange={this.handleChange}
                                            label="Low"
                                            name="priority"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            type="radio"
                                            value="medium"
                                            onChange={this.handleChange}
                                            label="Medium"
                                            name="priority"
                                            id="formHorizontalRadios2"
                                        />
                                        <Form.Check
                                            type="radio"
                                            value="high"
                                            onChange={this.handleChange}
                                            label="High"
                                            name="priority"
                                            id="formHorizontalRadios3"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>

                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                <Form.Label column sm={2}>
                                    Due date
                                </Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="text" placeholder="Subject" name="due_date" value={this.state.value} onChange={this.handleChange}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mx-0">
                                <Col sm={{ span: 10, offset: 2 }}>
                                    <Button onClick={this.handleClick} type="submit">Add Task</Button>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col sm={12}>
                        <Table responsive striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Subject</th>
                                <th>Priority</th>
                                <th>Due date</th>
                                <th>Status</th>
                                <th>Percent completed</th>
                                <th>Modified on</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.tableContent.map((item) =>
                                <tr key={item.key}>
                                    <td></td>
                                    <td>{item.subject}</td>
                                    <td>{item.priority}</td>
                                    <td>{item.due_date}</td>
                                    <td>{item.status}</td>
                                    <td></td>
                                    <td>{item.date}</td>
                                    <td><button onClick={() => this.handleDelete(item.key)}>Delete</button></td>
                                </tr>
                            )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default App;