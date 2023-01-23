import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import pic1 from '../images/contract.jpg'
import pic2 from '../images/link.jpg'


function Cards() {
    return (
        <div className='cards'>
            <h1>Bla Bla Bla</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic1}
                            text="Terms and Conditions Processor - Gives you processed summary and main keywords of your agreements and contracts  "
                            label='T&C PROCESSOR'
                            path='/t&c'
                        />
                        <CardItem
                            src={pic2}
                            text="Authenticate Website urls and find whether they are fishy or Safe"
                            label='Authenticate your links'
                            path='/services'
                        />


                    </ul>


                </div>

            </div>

        </div>
    )
}

export default Cards