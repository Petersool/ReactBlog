import React, { useState, useEffect } from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Client from './client';
// import { createClient } from 'contentful';

// import useContentfulData from "./useContentfulData";

import './App.css';

function App() {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [selectedCoffee, setSelectedCoffee] = useState({});

  useEffect(() => {
    Client.getEntries()
          .then((json) => {
            setIsLoading(false)
            setPost(json.items)
          })
          .catch(() => console.log("error"))
    }, [])

  const toggle = () => setModal(!modal);

// test for modals
  const selectCoffee = (id) => {
    Client.getEntry(id)
    .then(({ fields }) => {
      setSelectedCoffee({
        description: fields.description2,
        origin: fields.origin,
        image: fields.image.fields.file.url,
        sort: fields.sort
      });
      toggle();
    })
    .catch(() => console.log('error'));
  }

  return (
      <div className="App App_bg">
        <header>
          <div>
            <h2>Coffee of the World</h2>
          </div>
        </header>

        <main>
          <div className="App_post">
          {isLoading
          ? "loading..."
          : post.map(({ fields, sys }, index) => (
            <div onClick={()=> selectCoffee(sys.id)} key={index}>
              <div className="App_post_prop">{fields.sort}</div>
              {/* Image */}
              <img src={fields.image?.fields.file.url} alt={fields.sort} width="200"/>
            </div>
            ))
          }
          </div>
        </main>
{/* Modal - Modal header:{fields.sort}, Modal Body:{fields.origin, fields.description2}, Modal Footer:{cancel button} */}      
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>{selectedCoffee.sort}</ModalHeader>
            <ModalBody>
              <img src={selectedCoffee.image} alt={selectedCoffee.sort} width="150"/>
              <div>
                <div><span className="App_post_prop">Origin: </span>{selectedCoffee.origin}</div>
                <div><span className="App_post_prop">Description: </span>{selectedCoffee.description}</div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
      </div>
  );
}

export default App;