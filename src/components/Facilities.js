import React from 'react'
import CardItem from './CardItem'
import './Facilities.css'
import pic1 from '../images/tc-consulting.jpg'
import pic2 from '../images/NFT.jpg'


function Facilities() {
    return (
        <div className='cards'>
            <h1>Products</h1>

            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={pic1}
                            text="Terms and Conditions Processor - Gives you processed summary and main keywords of your agreements and contracts  "
                            label='T&C PROCESSOR'
                            path='/t&cconsultancy'
                        />
                        <CardItem
                            src={pic2}
                            text="Authenticate Website urls and find whether they are fishy or Safe"
                            label='Authenticate your links'
                            path='/nft'
                        />


                    </ul>


                </div>

            </div>

        </div>
    )
}

export default Facilities