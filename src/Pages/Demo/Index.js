
import { useState, useEffect } from 'react'

const Common = () =>{
    const [data, setData] = useState([])

    const fetchData = () =>{
        return fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=90b5566f6c314946a71f7e0be8d307c4')
                    .then((response)=>{
                        return response.json();

                    })
                    .then((res)=>{
                        setData(res.articles);
                        console.log(res.articles)
                    })
    }

    useEffect(() =>{
        fetchData()
    }, [])


    return(
        <div>
            <h1>API Call</h1>
            {
                data.map((element ,index ) => (
                        <div key = {element.id}>
                            <h1>name: {element.author}</h1>
                            <h3> {element.content}</h3>
                            <img src={element.urlToImage} alt="images"/>
                        </div>
                    ))
                    // console.log(data)
            }
        </div>
    )
}

export default Common











// function Common(props){
//     console.log("data",BollywoodData)

//     const nav = useNavigate()

//     const handleNavigate = (id, item) =>{
//         nav(`/${props.name}/${id}`,{ state: {item}})
//     }
//     return(

//       <>
//         <Logo></Logo>
//         <Navbar></Navbar>
//         <div id="Main-container">
//             <div>
//                 {/* Main container */}
//                 <h1>{props.navName}</h1>
//                 < hr className="subhr"/>
                
//                 {BollyData.map((item, index) =>{
//                     return(
//                         <>
                            
//                             <div key={item.id} className="holly">
//                                 <img src={item.urlToImage} alt="" className='image2' onClick={() => handleNavigate(item.id , item)}/>
//                                 <div className="holly-content">
//                                     <h3  onClick={() => handleNavigate(item.id , item)}>author: {item.author}</h3>
                                    
//                                         <br/>

//                                     <p className="api-content"  onClick={() => handleNavigate(item.id , item)}>{item.title} </p>

//                                     <p>{item.publishedAt}</p>
//                                 </div>
//                             </div>
                            
//                             <hr className="api-hr"/>
//                         </>
//                     )
//                 })}     
//             </div>

//             {/* Right container*/}

//             <div id="Api-post-main">
//                 <div className='post' id="Api-post">Top Posts</div>
//                 <hr className='subhr' id='hr'/>

//                 <div><img src={image} alt='' className='img'/></div>
//                 <h2 className='postTitle'>Catch waves with an adventure guide</h2>
//                 <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

//                 <Posts travel = "Travel" day = "/ january 14 2023"></Posts>
//                 <Posts travel = "Travel" day = "/ january 14 2023"></Posts>
//                 <Posts travel = "Travel" day = "/ january 14 2023"></Posts>   
//                 <br/> <br/> 
//                 <div className='ad'><span id='ad'>Advertistement</span></div>
//             </div>
//        </div>
//       </>
//     )
// }

// export default Common







