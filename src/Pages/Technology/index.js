import { useNavigate } from "react-router-dom"
import { Posts } from "../Home/HomeContent"
import image from '../../image/moun.jpg'
import Navbar from "../../Components/Navbar/Navbar"
import '../../CSS/page.css'
import Logo from "../../Components/Logo/logo"
import { useState, useEffect } from "react"

function Technology(){
    const [data, setData] = useState([])

    const fetchData = () =>{
        return fetch('https://blogapi-9ibr.onrender.com/technology')
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
        nav(`/Technology/${id}`,{ state: {item}})
        console.log(id)
    }
    return(
           <>
                <Logo></Logo>
                <Navbar></Navbar>
                <div id="Main-container">
           
                <div>
                        <h1 className='heading'>Technology</h1>

                        <div>
                            {
                                data.slice(0,7).map((item, index) =>{
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
                                })
                            }
                        </div>
                </div>

                    <div id="Api-post-main">
                        <div className='post' id="Api-post">Top Posts</div>
                        <hr className='subhr' id='hr'/>

                        <div><img src={image} alt='' className='img'/></div>
                        <h2 className='postTitle'>Catch waves with an adventure guide</h2>
                        <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

                        <Posts></Posts>
                       
                        <br/> <br/> 
                        <div className='ad'><span id='ad'>Advertistement</span></div>
                    </div>
                </div>

           </>
        
    )
}

export default Technology