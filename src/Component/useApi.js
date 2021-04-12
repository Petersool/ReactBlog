import { useState, useEffect } from 'react';
import Client from '../client';

function useApi(){
    const [post, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const [selectedCoffee, setSelectedCoffee] = useState({});

    function loadPost(){
        Client.getEntries()
              .then((json) => {
                  setIsLoading(false)
                  setPost(json.items)
                  console.log(json.items);
              })
              .catch(() => console.log("API error"))
    }

    useEffect(loadPost, []);

// get API from Contentful
//   useEffect(() => {
//     Client.getEntries()
//           .then((json) => {
//             setIsLoading(false)
//             setPost(json.items)
//             console.log(json.items);
//           })
//           .catch(() => console.log("API error"))
//     }, [])

    const toggle = () => setModal(!modal);

// get modals from contentful
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
        .catch(() => console.log('Modal error'));
    }


    return [post, isLoading, modal, selectedCoffee, selectCoffee, toggle];
}

export default useApi;