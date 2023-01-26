import React from 'react';

//helps to navigate with help of button
import { Link } from 'react-router-dom';


//for receiving items from contactcard file which is exporting
import ContactCard from './ContactCard';


//function component
const contactList = (props) => {


    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} ></ContactCard>
        );
    })

    return (


        //div referencing above render function
        < div class="render" >
            < div class="render-heading" >
                <hr />
                <h1>URL CHECKER</h1>
                <br></br>
                <br></br>
                <br></br>
            </div >

            <div class="ui action input" >
                <input type="text" placeholder="Search..." fdprocessedid="o5ywvh" id="bar"
                    // value={props.term}
                    onChange={(e) => {
                        props.searchkey(e.target.value);
                    }}
                />

                <br></br>
                <br></br>
                <br></br>
                <br></br>

            </div>

         

               

                { renderContactList.length > 0 ? renderContactList : <b>OOPS!!! Not in our dataset  :(  Probabaly Fishy Website  We will soon Expand our Dataset</b> }

        </div >
    );
};


export default contactList; 
