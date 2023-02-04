import React from 'react'
import CardItem from './CardItem'
import './Facilities.css'
import pic1 from '../images/tc-consulting.jpg'
import pic2 from '../images/t2.jpg'


function Facilities() {
    return (
        <div className='cards'>
            <h1>Products</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic1}
                            text="Terms and Conditions Formation - Makes Terms and condition for you "
                            label='T&C Formation'
                            path='/t&cconsultancy'
                        />
                        <CardItem
                            src={pic2}
                            text="Formulate your the Terms and Condition"
                            label='T&C Formulation'
                            path='/t&cf'
                        />


                    </ul>


                </div>

            </div>

        </div>
    )
}

export default Facilities
