import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import ContactList from './contactList';


import api from '../api/contacts';

//importing react router dom

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [contacts, update] = useState([]);
  const [st, sst] = useState("");


  const [sr, ssr] = useState([]);



  //retrieve contacts
  const retrieveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };


  //useeffect hook
  useEffect(() => {

    const getallcontacts = async () => {
      const allcontacts = await retrieveContacts();
      if (allcontacts) update(allcontacts);
    };
    getallcontacts();
  }, []);


  useEffect(() => {

  }, [contacts])




  const searchhandler = (searchterm) => {
    console.log(searchterm);
    sst(searchterm);
    if (searchterm !== "") {
      const ncl = contacts.filter((contact) => {

        return Object.values(contact).join("").toLowerCase().includes(searchterm.toLowerCase());
      });
      ssr(ncl);
    }
    else {
      ssr(contacts);
    }
  };
  return (
    <div>

      {/* router will contain all components to be route */}
      <Router>

        <Navbar />


        {/* //switch helps to switch between them   */}
        <Routes>


          {/* //exact matches the exact adderess */}

          <Route
            exact
            path="/services"
            element={
              <ContactList term={st}
                contacts={st.length < 1 ? contacts : sr}

                searchkey={searchhandler} />

            }
          />


          <Route exact
            path="/"
            element={<Home />}
          ></Route>
          

          
        </Routes>




      </Router>



    </div>

  );
}

export default App;

