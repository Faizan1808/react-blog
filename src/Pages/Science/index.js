import '../../CSS/page.css'
import { useNavigate } from "react-router-dom"
import { Posts } from '../Home/HomeContent'
import image from '../../image/moun.jpg'
import Navbar from '../../Components/Navbar/Navbar'
import Logo from '../../Components/Logo/logo'
import { useState, useEffect } from 'react'



function Science(){
    
    const [data, setData] = useState([])

    const fetchData = () =>{
        return fetch('https://blogapi-9ibr.onrender.com/science')
                    .then((response)=>{
                        return response.json();

                    })
                    .then((res)=>{
                        setData(res);
                        console.log(res)
                    })
    }

    useEffect(() =>{
        fetchData()
    }, [])

    const nav = useNavigate()

    const handleNavigate = (id, item) =>{
        nav(`/Science/${id}`,{ state: {item}})
    }
    return(

      <>
        <Logo></Logo>
        <Navbar></Navbar>
        <div id="Main-container">
            <div>
                {/* Main container */}
                <h1 className='heading'>Science</h1>
                < hr className="subhr"/>
                
                {data.slice(1,8).map((item, index) =>{
                    return(
                        <>
                            
                            <div key={index} className="holly">
                                <img src={item?.urlToImage} alt="" className='image2' onClick={() => handleNavigate(item.id , item)}/>
                                <div className="holly-content">
                                    <h3  onClick={() => handleNavigate(item.id , item)}>author: {item?.author}</h3>
                                    
                                        <br/>

                                    <p className="api-content"  onClick={() => handleNavigate(item.id , item)}>{item?.title} </p>

                                    <p className="Published">{item?.publishedAt}</p>
                                </div>
                            </div>
                            
                            <hr className="api-hr"/>
                        </>
                    )
                })}     
            </div>

            {/* Right container*/}

            <div id="Api-post-main">
                <div className='post' id="Api-post">Top Posts</div>
                <hr className='subhr' id='hr'/>

                <div><img src={image} alt='' className='img'/></div>
                <h2 className='postTitle'>Catch waves with an adventure guide</h2>
                <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

                <Posts ></Posts>   
                <br/> <br/> 
                <div className='ad'><span id='ad'>Advertistement</span></div>
            </div>
       </div>
      </>
    )
}

export default Science