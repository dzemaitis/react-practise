import React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navigation from "./components/navbar/Navigation";
import Main from "./components/Main/Main";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Aside from "./components/aside/Aside";
import ToDoTable from './components/todotable/ToDoTable';
import Converter from "./components/converter/Converter";

export default function App() {
  return (
      //<BrowserRouter> pakeiciau i Hasrouter, kad githubpages servuose veiktu.
        <HashRouter basename='/'>
          <Container fluid className="mx-0 width-50">
              <Row>
                  <Col className="px-0">
                      <Navigation/>
                  </Col>

              </Row>
              <Row className="justify-content-center">
                  <Col md={9} className="mx-0">
                      <Header className="bg-dark"></Header>
                      <Switch>
                          <Route exact path="/" component={Main}/>
                          <Route path="/todotable" component={ToDoTable}/>
                          <Route path="/converter" component={Converter}/>
                      </Switch>
                  </Col>
                  <Col md={3} className="bg-dark">
                      <Aside/>
                  </Col>
              </Row>
              <Row className="justify-content-center bg-secondary">
                  <Footer/>
              </Row>

          </Container>
        </HashRouter>


  );
}


