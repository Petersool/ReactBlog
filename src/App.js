import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

import useApi from './Component/useApi';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [post, isLoading, modal, selectedCoffee, selectCoffee, toggle ] = useApi();

  // Region filtering
      // const [filteredRegion, setfilteredRegion] = useState(null);

      // const Africa = post.filter( e => e.origin === "Africa");
      // const SouthAmerica = post.filter( e => e.origin === "South America");
      // const NorthAmerica = post.filter( e => e.origin === "North America");
      // const CentralAmerica = post.filter( e => e.origin === "Central America");
      // const Asia = post.filter( e => e.origin === "Asia");
      
      // const showAf = () => setfilteredRegion(Africa);
      // const showSa = () => setfilteredRegion(SouthAmerica);
      // const showNa = () => setfilteredRegion(NorthAmerica);  
      // const showCa = () => setfilteredRegion(CentralAmerica);
      // const showAs = () => setfilteredRegion(Asia);
      // const removeFilter = () => setfilteredRegion(post);

      // get Region from Contentful
      // const selectRegion = (id) => {
      //   Client.getEntry(id)
      //     .then(({fields})=> {
      //       setIsLoading(false)
      //       setSelectedRegion({
      //         origin: fields.origin
      //       })
      //       console.log(fields.origin)
      //   })
      //   .catch(()=> console.log('error'));
      // }

  return (
      <div className="App App_bg">
        <header>
          <div>
            <h2>Coffee of the World</h2>
          </div>
        </header>

  {/* button for the region */}
  {/* Region : Africa, South America, North America, Central America, Asia */}
        <div>
          <nav>
          <Button color="primary" size="sm">Africa</Button>{' '}
          <Button color="primary" size="sm">South America</Button>{' '}
          <Button color="primary" size="sm">North America</Button>{' '}
          <Button color="primary" size="sm">Central America</Button>{' '}
          <Button color="primary" size="sm">Asia</Button>{' '}
          <Button color="secondary" size="sm">Remove Filter</Button>
            {/* <button onClick={() => showAf()}>Africa</button>
            <button onClick={() => showSa()}>South America</button>          
            <button onClick={() => showNa()}>North America</button>          
            <button onClick={() => showCa()}>Central America</button>          
            <button onClick={() => showAs()}>Asia</button>          
            <button onClick={() => removeFilter()}>remove Filter</button>       
            {
              filteredRegion && filteredRegion.map(({fields, sys}, index) => (
                <div key={index}>
                  <Africa />
                </div>
              ))
            } */}
          </nav>
        </div>

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