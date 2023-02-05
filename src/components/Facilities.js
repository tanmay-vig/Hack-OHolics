import React from 'react'
import CardItem2 from './CardItem2'
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
                        <CardItem2
                            src={pic1}
                            text= <a href='http://127.0.0.1:5500/T_and_C_Formation/form.html'> Terms and Conditions Formation - Makes Terms and condition for you </a>
                            label='T&C Formation'
                        />
                        <CardItem2
                            src={pic2}
                            text= <a href='https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/16057901895862908649661142886022720228921913520366323783314533470392866045953/'> Revenue </a>
                            label='NFT Purchase'
                        />


                    </ul>


                </div>

            </div>

        </div>
    )
}

export default Facilities
