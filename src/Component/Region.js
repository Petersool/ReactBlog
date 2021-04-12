import React from 'react';
import { Button } from 'reactstrap';

function Region({ select, clear, selectedRegion }) {
    return (
        <div>
            <Button className="button-color" color="secondary" size="sm" onClick={clear}>All</Button>{' '}
            <Button className="button-color" color="primary" size="sm" onClick={() => select('Africa')}>Africa</Button>{' '}
            <Button className="button-color" color="primary" size="sm" onClick={() => select('North America')}>North America</Button>{' '}
            <Button className="button-color" color="primary" size="sm" onClick={() => select('Central America')}>Central America</Button>{' '}
            <Button className="button-color" color="primary" size="sm" onClick={() => select('Asia')}>Asia</Button>
        </div>
    )
}

export default Region



//  <button onClick={() => showAf()}>Africa</button>
//             <button onClick={() => showSa()}>South America</button>          
//             <button onClick={() => showNa()}>North America</button>          
//             <button onClick={() => showCa()}>Central America</button>          
//             <button onClick={() => showAs()}>Asia</button>          
//             <button onClick={() => removeFilter()}>remove Filter</button>       
//             {
//               filteredRegion && filteredRegion.map(({fields, sys}, index) => (
//                 <div key={index}>
//                   <Africa />
//                 </div>
//               ))
//             }

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
