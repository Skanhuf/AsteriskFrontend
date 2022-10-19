import React, { useState } from "react";
import {Col, Container, Row} from "react-bootstrap";

export default function Body(){
   const [checked, setChecked] = useState(false);
   const items = [" Дата "," Кто звонил "," Куда звонил "," Город "," Статус звока "];
   const [value, setValue] = useState("По убыванию");
    return(

      <Container fluid className = "mainBody">
        <Row>
          <Col sm = '2' className = "bodySearch p-2">
     <ul>
      {items.map(item => (
        <li key = {items}>
        <label>
        <input
              type="radio"
              checked={checked === item}
              onChange={() => setChecked(item)}
        />
          {item}
      </label>
      </li>
      ))}
    </ul>
    <select value = {value} onChange ={(e) => setValue(e.target.value)}>
      <option value = "По убыванию">По убыванию</option>
      <option value = "По возрастанию">По возрастанию</option>
    </select>
    </Col>
    <Col lg='8' className = 'bodyFilters'></Col>
    </Row>
    </Container>
    );
  }
      
      
    


      
     