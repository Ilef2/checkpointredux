import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo, editTodo } from "./redux/action/Action";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Todo = ({ el }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [todoUpd, setTodoUpd] = useState(el);
  const dispatch = useDispatch();
  const removeTodo = () => {
    dispatch(deleteTodo(el.id));
  };

  const handleEdit = () => {
    dispatch(editTodo(todoUpd));
    handleClose();
  };

  return (
    <div>
      
      <div>
        <div className="do">
        <input
          type="checkbox"
          onClick={() => {
            dispatch(toggleTodo(el.id));
          }}
        />
        <h3 className="des" style={{ textDecoration: el.isDone ? "line-through" : "none" }}>
          {el.description}
        </h3>

        <Button variant="primary" onClick={handleShow}>
          {" "}
          update{" "}
        </Button>
        <Button variant="danger" onClick={removeTodo}>delete</Button>{' '}
        </div>


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>update todo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>todo</Form.Label>
                <Form.Control
                  type="text"
                  value={todoUpd.description}
                  onChange={(e) =>
                    setTodoUpd({ ...todoUpd, description: e.target.value })
                  }
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              ></Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleEdit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        

      </div>
    </div>
  );
};

export default Todo;
/*<input type="text" value={todoUpd.description} onChange={(e)=>setTodoUpd({...todoUpd, description: e.target.value})}/>
  <button onClick={handleEdit}>update</button>*/
