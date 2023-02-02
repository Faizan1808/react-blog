// import { useParams, useLocation } from "react-router-dom"
// import { Link } from "react-router-dom"
// import back from '../../image/back-arrow.png'
// import face from '../../image/faceLogo.png'
// import insta from '../../image/instagram.svg'
// import fb from '../../image/facebook.svg'
// import yt from '../../image/youtube.svg'
// import twitter from '../../image/twitter.svg'

// const TechnologyData = () =>{

//     const params = useParams();
//     const location = useLocation();
//     console.log("details", params, location)

//     const data = location.state.item
//     // console.log(data)

//     return(
//         <>
//             <div id='logo'>
//                 <h3 className='therotate'>The</h3>
//                 <h1 className='siren'>Siren</h1>
//                 <button className="btn">Get Started</button>
//             </div>
//             <div key={data.source.index} className="main-Api">
      
//                 <h1>{data.title}</h1>
                
//                 <p className="logo-content">
//                     <img src={face} alt="Logo" className="face-logo"/>
//                     <div className="logo-cont">
//                     <p><b>Author Name: {data.author}</b></p> 
//                     <p className="time">Jan 25, 2023 · 10 min read</p>
//                     </div>  
//                     <img src={insta} alt="instagram" className="social-media" />
//                     <img src={fb} alt="instagram" className="social-media" />
//                     <img src={yt} alt="instagram" className="social-media" />
//                     <img src={twitter} alt="instagram" className="social-media" />
//                 </p>
                
//                 <img src={data.urlToImage} alt="" id="api-img"/>
                
//                 <p className="content">{data.content} </p>
                
//                 <h3>Description: {data.description }</h3>
//                 <h4 >FOR MORE INFO CLICK ON BELOW Link: <br/> <br/>
//                 <a href={data.url}>"{data.url}"</a>
//                 </h4>

//                 {/* Back Button */}

//                 <button className="back">
//                     <Link to={"/Technology"} >
//                     <img src={back} alt="back" className="back-arrow"/>
//                     Go Back</Link>
//                 </button>
//             </div>
//         </>
//     )
// }

// export default TechnologyData


