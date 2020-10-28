import React from "react";
import Button from "react-bootstrap/Button";
import NewMessageForm from "../chatbox/NewMessageForm";

const Keypad = (props) => {
  return (
    <div>
      <Button
        type="button"
        variant="light"
        name="("
        onClick={(e) => props.onClick(e.target.name)}
      >
        (
      </Button>
      <Button
        type="button"
        variant="light"
        name=")"
        onClick={(e) => props.onClick(e.target.name)}
      >
        )
      </Button>
      <Button
        type="button"
        variant="danger"
        name="←"
        onClick={(e) => props.onClick(e.target.name)}
      >
        ←
      </Button>
      <Button
        type="button"
        variant="danger"
        name="C"
        onClick={(e) => props.onClick(e.target.name)}
      >
        C
      </Button>
      <br />

      <Button
        type="button"
        variant="light"
        name="1"
        onClick={(e) => props.onClick(e.target.name)}
      >
        1
      </Button>
      <Button
        type="button"
        variant="light"
        name="2"
        onClick={(e) => props.onClick(e.target.name)}
      >
        2
      </Button>
      <Button
        type="button"
        variant="light"
        name="3"
        onClick={(e) => props.onClick(e.target.name)}
      >
        3
      </Button>
      <Button
        type="button"
        variant="warning"
        name="+"
        onClick={(e) => props.onClick(e.target.name)}
      >
        +
      </Button>
      <br />

      <Button
        type="button"
        variant="light"
        name="4"
        onClick={(e) => props.onClick(e.target.name)}
      >
        4
      </Button>
      <Button
        type="button"
        variant="light"
        name="5"
        onClick={(e) => props.onClick(e.target.name)}
      >
        5
      </Button>
      <Button
        type="button"
        variant="light"
        name="6"
        onClick={(e) => props.onClick(e.target.name)}
      >
        6
      </Button>
      <Button
        type="button"
        variant="warning"
        name="-"
        onClick={(e) => props.onClick(e.target.name)}
      >
        -
      </Button>
      <br />

      <Button
        type="button"
        variant="light"
        name="7"
        onClick={(e) => props.onClick(e.target.name)}
      >
        7
      </Button>
      <Button
        type="button"
        variant="light"
        name="8"
        onClick={(e) => props.onClick(e.target.name)}
      >
        8
      </Button>
      <Button
        type="button"
        variant="light"
        name="9"
        onClick={(e) => props.onClick(e.target.name)}
      >
        9
      </Button>
      <Button
        type="button"
        variant="warning"
        name="*"
        onClick={(e) => props.onClick(e.target.name)}
      >
        x
      </Button>
      <br />

      <Button
        type="button"
        variant="light"
        name="."
        onClick={(e) => props.onClick(e.target.name)}
      >
        .
      </Button>
      <Button
        type="button"
        variant="light"
        name="0"
        onClick={(e) => props.onClick(e.target.name)}
      >
        0
      </Button>
      <Button
        type="button"
        variant="danger"
        name="="
        onClick={(e) => props.onClick(e.target.name)}
      >
        =
      </Button>
      <Button
        type="button"
        variant="warning"
        name="/"
        onClick={(e) => props.onClick(e.target.name)}
      >
        ÷
      </Button>
      <br />
      <NewMessageForm
        result={props.resultPost}
        conversation_id={props.conversation_id}
        username={props.username}
      />
    </div>
  );
};

export default Keypad;
