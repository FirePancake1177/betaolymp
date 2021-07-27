import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Card, FormText, Modal} from "react-bootstrap";
import hse from "../img/hse.jpg"
import mipt from "../img/mipt.jpg"
import msu from "../img/msu.jpg"
import itmo from "../img/itmo.jpg"
import baumanka from "../img/baumanka.jpg"
import spbgu from "../img/spbgu.jpg"
import {Checkbox, FormControl, FormControlLabel, FormGroup} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom"


function ContentDisplay() {
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    a1: false,
    a2: false,
    a3: false,
    a4: false,
    a5: false,

  });



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [result, setResult] = useState()
  const [loading, setLoading] = useState(false)
  const [dis, setDis] = useState(false)
  const handleChange = (event) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  const {a1, a2, a3, a4, a5} = state;

  const func = () => {
    setDis(true)
  }

  const redirect = () => {
    setShow(false)
    return <Link to="/hello"/>
  }

  useEffect(() => {
    axios.get("http://localhost:5000/posts")
      .then((data) => {
        for (let i = 0; i < data["data"].length; ++i) {
          if (data["data"][i]["Факультет"] === "ФКН ПМИ ВШЭ") {
            setResult(data["data"][i])
            console.log(data["data"][i])
            setLoading(true)
          }
        }
      })
  }, [])
  if (loading) {
    return (
      <div className="info">
        <div className="cards">
          <Card className="main-card">
            <Card.Body>
              <Card.Title><h3>НИУ ВШЭ</h3></Card.Title>
              <Card.Img variant="top" src={hse} className="pic"/>
              <Card.Text>Перейдите по ссылке ниже, чтобы найти факультет данного вуза.</Card.Text>
              <Button variant="primary" className="button" onClick={handleShow}>Факультеты</Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                  <Modal.Title>НИУ ВШЭ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="checkboxes primary">
                    <FormControl component="fieldset">
                      <FormText>Выберите Факультет(ы):</FormText>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox checked={a1} color="primary" onChange={handleChange} name="a1"/>}
                          label="Прикладная математика и информатика"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={a2} color="primary" onChange={handleChange} name="a2"/>}
                          label="Программная инженерия"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={a3} color="primary" onChange={handleChange} name="a3"/>}
                          label="Математика"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={a4} color="primary" onChange={handleChange} name="a4"/>}
                          label="Прикладная математика"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={a5} color="primary" onChange={handleChange} name="a5"/>}
                          label="Информатика и вычислительная техника"
                        />
                      </FormGroup>
                    </FormControl>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Закрыть
                  </Button>
                  <Link to="/info" className="btn btn-primary">
                    Далее
                  </Link>

                </Modal.Footer>
              </Modal>

            </Card.Body>
          </Card>
          <Card className="main-card">
            <Card.Body>
              <Card.Title><h3>МФТИ</h3></Card.Title>
              <Card.Img variant="top" src={mipt} className="pic"/>
              <Card.Text>Перейдите по ссылке ниже, чтобы найти факультет данного вуза.</Card.Text>
              <Button variant="primary" className="button">Факультеты</Button>
            </Card.Body>
          </Card>
          <Card className="main-card">
            <Card.Body>
              <Card.Title><h3>МГУ им. Ломоносова</h3></Card.Title>
              <Card.Img variant="top" src={msu} className="pic"/>
              <Card.Text>Перейдите по ссылке ниже, чтобы найти факультет данного вуза.</Card.Text>
              <Button variant="primary" className="button">Факультеты</Button>
            </Card.Body>
          </Card>
          <Card className="main-card">
            <Card.Body>
              <Card.Title><h3>Университет ИТМО</h3></Card.Title>
              <Card.Img variant="top" src={itmo} className="pic"/>
              <Card.Text>Перейдите по ссылке ниже, чтобы найти факультет данного вуза.</Card.Text>
              <Button variant="primary" className="button">Факультеты</Button>
            </Card.Body>
          </Card>
          <Card className="main-card">
            <Card.Body>
              <Card.Title><h3>МГТУ им. Баумана</h3></Card.Title>
              <Card.Img variant="top" src={baumanka} className="pic"/>
              <Card.Text>Перейдите по ссылке ниже, чтобы найти факультет данного вуза.</Card.Text>
              <Button variant="primary" className="button">Факультеты</Button>
            </Card.Body>
          </Card>
          <Card className="main-card">
            <Card.Body>
              <Card.Title><h3>СПбГУ</h3></Card.Title>
              <Card.Img variant="top" src={spbgu} className="pic"/>
              <Card.Text>Перейдите по ссылке ниже, чтобы найти факультет данного вуза.</Card.Text>
              <Button variant="primary" className="button">Факультеты</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="card-footer footer">
          @2021 Olympus
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <div className="center1">
          <h3>Загрузка, пожалуйста, подождите...</h3>
        </div>
      </div>
    )
  }
}

export default ContentDisplay;