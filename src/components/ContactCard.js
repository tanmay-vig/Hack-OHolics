import React from "react";

import { Link, useParams, useLocation } from 'react-router-dom';
//this file is basically concatanating each entry receiving from  {app.js--->contactlist.js--->contactcard.js} in this file

//receiving props from contactlist file it has all details
const CardContact = (props) => {

    //console.log(props);
    const { id, url, type } = props.contact;
    //console.log(props.contact);
    return (

        <div class="content">


            <div>

                <Link to={url}>
                    <b>{url}</b>
                </Link>

            </div>

            <br></br>

            <div class="align-trash">

                {type}


            </div>

            <br></br>
            <hr />



        </div>

    );
}

export default CardContact; //name of function you are exporting(bahr bhejna)
