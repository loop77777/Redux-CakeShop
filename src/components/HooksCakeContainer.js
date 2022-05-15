import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";
import { Card, Button } from "react-bootstrap";
import cake from "../img/cake2.jpg";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const [number, setnumber] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="cakeContainer">
      <Card style={{ width: "50vw", backgroundColor: "#FEC560" }}>
        <Card.Img variant="top" src={cake} />
        <Card.Body>
          <Card.Title>
            <h3>Cake</h3>
          </Card.Title>
          <Card.Text>
            <h3> Number of Cakes - {numOfCakes} </h3>
            <input
              type="number"
              value={number}
              onChange={(e) => setnumber(e.target.value)}
              placeholder="buy extra(default is 1)"
              className="input"
            />
          </Card.Text>
          <Button
            variant="dark"
            onClick={() => dispatch(buyCake(number))}
          >
            Buy {number} Cake
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default HooksCakeContainer;
