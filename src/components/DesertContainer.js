import React, { useState } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import desert from "../img/desert.jpg";
import { buyDesert } from "../redux";

function DesertContainer(props) {
  const [number, setnumber] = useState(1);
  return (
    <div className="cakeContainer">
      <Card style={{ width: "50vw", backgroundColor: "#C8DAB2" }}>
        <Card.Img variant="top" src={desert} />
        <Card.Body>
          <Card.Title>
            <h3>Desert</h3>
          </Card.Title>
          <Card.Text>
            <h3>Number of Deserts - {props.numOfDesert}</h3>
            <input
              type="number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              placeholder="buy extra(default is 1)"
              className="input"
            />{" "}
          </Card.Text>
          <Button variant="dark" onClick={() => props.buyDesert(number)}>
            Buy {number} Desert
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfDesert: state.desert.numOfDesert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyDesert: (number) => dispatch(buyDesert(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DesertContainer);
