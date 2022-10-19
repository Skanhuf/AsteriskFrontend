import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Header(){
    return(
     <header>
    <Container className = "container text-center p-2"> 
        <Row>
            <Col >Сортировка</Col>
            <Col  sm = '6' >Фильтры</Col>
            <Col  >Дополнительные функции</Col>
        </Row>
    </Container>
    </header>
)} 
