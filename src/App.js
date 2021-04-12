import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import useApi from './Component/useApi';
import Region from './Component/Region';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [post, setPost, initialPosts, isLoading, modal, selectedCoffee, selectCoffee, toggle ] = useApi();
  const [region, setRegion] = useState('');

  const filterByRegion = (selectedRegion) => {
    console.log(selectedRegion)
    const filtered = initialPosts.filter(item => item.fields.origin.includes(selectedRegion))
    setRegion(selectedRegion)
    setPost(filtered)
  }

  const clearFilter = () => {
    setRegion('');
    setPost(initialPosts)
  }

  // Region filtering from blog
  // const [filter, setFilter] = useState('all');
  // const [projects, setProjects] = useState([]);
  
  //   useEffect(() => {
  //       setProjects(post);
  //     }, []);

    // useEffect(() => {
    // setPost([]);
  
    // const filtered = post.map(p => ({ ...p,
    //   filtered: p.fields?.origin.includes(filter) }));
    // setPost(filtered);
    // }, [filter]);
  // End of blog

  return (
      <div className="App App_bg">
        <header>
          <div>
            <h2>Coffees of the World</h2>
          </div>
        </header>

        <nav>
            <Region select={filterByRegion} clear={clearFilter} selectedRegion={region} />
        </nav>

        <main>
          <div className="App_post">
          {isLoading
          ? "loading..."
          : post.map(({ fields, sys }, index) => (
            <div onClick={()=> selectCoffee(sys.id)} key={index}>
              <div className="App_post_prop">{fields.sort}</div>
              {/* Image */}
              <img className="App_post_image" src={fields.image?.fields.file.url} alt={fields.sort} width="200" height="200"/>
            </div>
              // {projects.map(item =>
              //   item.filtered === true ? <span key={item.name}>{item.name}</span> : ""
              // )}
            ))
          }
          </div>
        </main>
        
          {/* Modal - Modal header:sort, Modal Body:origin, description2}, Modal Footer:{cancel button} */}
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