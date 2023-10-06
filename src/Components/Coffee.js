import React from 'react'
import styled from 'styled-components'
import download from '../Assests/download.jpeg'
import download1 from '../Assests/download (1).jpeg'
import download2 from '../Assests/download (2).jpeg'
import icon from '../Assests/clipart--person-icon--cliparts-15.png'
import search from '../Assests/download.png'
import types from '../Assests/download (3).jpeg'
import images from '../Assests/images.png'
import facebook from '../Assests/download (1).png'
import linked from '../Assests/download (2).png'
import twitter from '../Assests/download (3).png'
import instagram from '../Assests/download (4).jpeg'


const Coffee = () => {
  return (
    <StyledWrap>
    <div className='wrapper'>
        <img src={download} alt='' className='wrap'/>
        <div className='list'>
            <ul className='home'>
                <li>Home</li>
                <li>About</li>
                <li>Coffees</li>
                <li>Shop</li>
                <li>Blog</li>
                <li>Contact</li>
                <br />
                <li className='login'>
                    <img src={icon} alt="" className='icon'/>
                    Login
                </li>
                <li className='login'> 
                    <img src={search} alt="" className='icon'/>
                </li>
            </ul>
        </div>
        <div>
        <h2>OUR Coffee OFFER</h2>
        <img src={download1} alt="" /> <br />
        <img src={download2} alt="" />
        </div>
        <div>
            <h3>TYPES OF COFFEE</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
        <div>
            <h3>BEAN VARIETIES</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
        <div>
            <h3>COFFEE & PASTRY</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
        <div>
            <h3>COFFEE TO GO</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
 
        <div>
            <h3>TYPES OF COFFEE</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
        <div>
            <h3>BEAN VARIETIES</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
        <div>
            <h3>COFFEE & PASTRY</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>
        <div>
            <h3>COFFEE TO GO</h3>
            <p>looking at its layout. The point of</p>
            <p className='read'>Read More</p>
            <img src={types} alt="" />
        </div>


        <div>
        <h2>Address</h2> <br />
        <p>here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use</p>
        <div>
            <ul>
                <li>+01 123456789</li>
                <li>demo@gmail.com</li>
            </ul>
        </div>
        <div>
            <input type="text" className='email' placeholder='Your Email'/>
            <p className='reserved'>2020 All Rights Reserved. Design by <span>Free Html Templates</span></p>
            <ul>
            <li>
                    <img src={facebook} alt="" className='faceboo'/>
                </li>
                <li>
                    <img src={instagram} alt="" className='facebook'/>
                </li>
                <li>
                    <img src={linked} alt="" className='facebook'/>
                </li>
                <li>
                    <img src={twitter} alt="" className='facebook'/>
                </li>
            </ul>
        </div>
        </div>
    </div>
</StyledWrap>
  )
}

export default Coffee

export const StyledWrap = styled.div`
.wrapper{
    text-align: start;
padding-left: 20px;
}
.wrap{
    width: 50px;
}
.list>ul>li{
    cursor: pointer;
}
.list>ul>li:hover{
    color: red;
}
.home{
    color: blue;
    text-decoration: underline;
}
.login{
    color: purple;
    text-decoration: underline;
}
.icon{
    height: 3vh;
    color: purple;
    padding-right: 2px;
}
.read{
    color: purple;
    text-decoration: underline;
    cursor: pointer;
}
.read:hover {
    color: red;
}
.images{
    height: 30px;
}
.reserved>span{
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}
.reserved>span:hover{
    color: red;
}
.email{
    height: 10vh;
}
.facebook{
    width: 30px;
}
.faceboo{
    width: 40px;
}
`