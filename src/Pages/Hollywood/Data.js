// // imports

// import { useParams } from "react-router-dom"
// import { useLocation } from "react-router-dom"
// import { Link } from "react-router-dom"
// import back from '../../image/back-arrow.png'
// import face from '../../image/faceLogo.png'
 

// // Data's
// export const hollyData = [
    
//     {
//       "id": 1,
//       "name": "CNBC",
//       "author": "Samantha Subin, Tanaya Macheel",
//       "title": "Dow jumps 300 points to start the week as investors weigh next Fed rate move - CNBC",
//       "description": "Investors are weighing a potential slowdown or pause in Federal Reserve rate hikes and looked ahead to a busy week of earnings.",
//       "url": "https://www.cnbc.com/2023/01/22/stock-market-futures-open-to-close-news.html",
//       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107181944-1674239488917-NYSE_Traders-OB-20230120-CC-PRESS-11.jpg?v=1674487478&w=1920&h=1080",
//       "publishedAt": "2023-01-23T18:34:00Z",
//       "content": "Stocks rallied Monday as investors contemplated a potential slowdown in rate hikes from the Federal Reserve and braced for a busy week of earnings. \r\nThe Dow Jones Industrial Average jumped 330 point."
//     },
//     {
//       "id": 2,
//       "name": "Reuters",
//       "author": "Reuters",
//       "title": "Wall Street extends gains as chipmakers lead tech shares higher - Reuters",
//       "description": "U.S. stock indexes rose on Monday, with the Nasdaq jumping nearly 2%, as gains in shares of chipmakers helped ease pressure on the battered technology sector at the start of another big week for corporate earnings.",
//       "url": "https://www.reuters.com/markets/us/futures-subdued-with-earnings-full-swing-salesforce-up-elliot-stake-2023-01-23/",
//       "urlToImage": "https://www.reuters.com/resizer/W46uDg8zq3bdExa5NJL87HFEQvY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6MZJH7SKTBOVBOZZA3Y7GU27U4.jpg",
//       "publishedAt": "2023-01-23T18:14:00Z",
//       "content": "Jan 23 (Reuters) - U.S. stock indexes rose on Monday, with the Nasdaq jumping nearly 2%, as gains in shares of chipmakers helped ease pressure on the battered technology sector at the start of another."
//     },
//     {
//       "id": 3,
//       "name": "CNN",
//       "author": "Matt McFarland",
//       "title": "'420 price was not a joke.' Elon Musk testifies again in trial over controversial tweet - CNN",
//       "description": "Tesla CEO Elon Musk took the witness stand for a second day on Monday and attempted to explain the thought process behind his controversial \"funding secured\" tweet from 2018, pushing back at the idea that it was partly a joke.",
//       "url": "https://www.cnn.com/2023/01/23/business/tesla-trial-funding-secured-elon-musk/index.html",
//       "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230123123003-01-elon-musk-tesla-shareholder-lawsuit-0120-sketch.jpg?c=16x9&q=w_800,c_fill",
//       "publishedAt": "2023-01-23T17:47:00Z",
//       "content": "Tesla CEO Elon Musk took the witness stand for a second day on Monday and attempted to explain the thought process behind his controversial funding secured tweet from 2018, pushing back at the idea."
//     },
//     {
//       "id": 4,
//       "name": "TheStreet",
//       "author": "Daniel Kline",
//       "title": "Coca-Cola Leans Into a New Market (Pepsi Is Already There) - TheStreet",
//       "description": "Both soft drink giants need to go into new spaces as the beverage market shifts.",
//       "url": "https://www.thestreet.com/restaurants/coca-cola-leans-into-a-new-market-pepsi-is-already-there",
//       "urlToImage": "https://www.thestreet.com/.image/t_share/MTk1MDcxODk5ODQ2MzIxODkw/thumb-pepsi-coke-js-011023.jpg",
//       "publishedAt": "2023-01-23T17:29:40Z",
//       "content": "For decades Coca-Cola (KO) - Get Free Report and PepsiCo (PEP) - Get Free Report have battled about which had the better-tasting cola. That led to the famous \"Pepsi Challenge\" marketing campaign,"
//     },
//     {
//       "id": 5,
//       "name": "CNBC",
//       "author": "Hakyung Kim",
//       "title": "Stocks making the biggest moves midday: Wayfair, Meta, Apple, Spotify, Qualcomm and more - CNBC",
//       "description": "These are the stocks posting the largest moves in midday trading.",
//       "url": "https://www.cnbc.com/2023/01/23/stocks-making-the-biggest-moves-midday-wayfair-meta-apple-and-more.html",
//       "urlToImage": "https://image.cnbcfm.com/api/v1/image/107009052-1643658535381-gettyimages-1238099038-SPOTIFY_BOYCOTTS.jpeg?v=1674494294&w=1920&h=1080",
//       "publishedAt": "2023-01-23T17:16:15Z",
//       "content": "Check out the companies making headlines in midday trading.\r\nWayfair Shares of the furniture retailer jumped 24.1% on Monday after Wayfair received upgrades from multiple Wall Street firms,"
//     },
//     {
//       "id": 6,
//       "name": "WXII12 Winston-Salem",
//       "author": "Louie Tran",
//       "title": "NC woman captures viral photo of flight attendant comforting woman who was nervous about flying - WXII12 Winston-Salem",
//       "description": "A North Carolina woman captured a viral photo of a flight attendant comforting a woman passenger who was nervous about flying.",
//       "url": "https://www.wxii12.com/article/nc-woman-captures-viral-photo-of-flight-attendant-comforting-woman-who-was-nervous-about-flying/42606708",
//       "urlToImage": "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/poster-image-2023-01-21t205210-088-1674352334.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
//       "publishedAt": "2023-01-23T17:01:00Z",
//       "content": "CHARLOTTE, N.C. —A North Carolina woman captured a viral photo of a flight attendant comforting a woman passenger who was nervous about flying.\r\nWXII 12 News talked with Molly Lee from Raleigh."
//     },
//     {
//       "id": 7,
//       "name": "Yahoo Entertainment",
//       "author": "Jeran Wittenstein and Ian King",
//       "title": "Nvidia to Win Big From ChatGPT Hype, Wall Street Predicts - Yahoo Finance",
//       "description": "(Bloomberg) -- In the weeks since the ChatGPT artificial intelligence tool took the world by storm, Nvidia Corp. has emerged as Wall Street’s preferred pick ...",
//       "url": "https://finance.yahoo.com/news/nvidia-win-big-chatgpt-hype-113102139.html",
//       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/XG6HVyjaWCX8NEa47JVZDg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03MDc-/https://media.zenfs.com/en/bloomberg_markets_842/17034a39751364cb984a28c51ec8dcee",
//       "publishedAt": "2023-01-23T16:42:44Z",
//       "content": "(Bloomberg) -- In the weeks since the ChatGPT artificial intelligence tool took the world by storm, Nvidia Corp. has emerged as Wall Streets preferred pick for traders seeking to profit from its "
//     },
//     {
      
//       "id": 8,
//       "name": "Associated Press",
//       "author": "Haleluya Hadero",
//       "title": "Is tipping getting out of control? Many consumers say yes - The Associated Press - en Español",
//       "description": "NEW YORK (AP) — Across the country, there’s a silent frustration brewing about an age-old practice that many say is getting out of hand: tipping.  Some fed-up consumers are posting rants on social media complaining about tip requests at drive-thrus, while oth…",
//       "url": "https://apnews.com/c4ae9d440610dae5e8ff4d4df0f88c35",
//       "urlToImage": "https://storage.googleapis.com/afs-prod/media/072801d170e041ddac4dbe7a7f68d176/3000.webp",
//       "publishedAt": "2023-01-23T16:41:15Z",
//       "content": "NEW YORK (AP) Across the country, theres a silent frustration brewing about an age-old practice that many say is getting out of hand: tipping."
//     },
// ]


// const HollywoodData = () =>{

//   const params = useParams();
//   const location = useLocation();
//   console.log("details", params, location)
  
//   const data = location.state.item
//   return(
//     // fetching data
//     <>
//       <div id='logo'>
//         <h3 className='therotate'>The</h3>
//         <h1 className='siren'>Siren</h1>
//         <button className="btn">Get Started</button>
//       </div>

//       <div key={data.id} className="main-Api">
      
//       <h1>{data.title}</h1>

      
//       <p className="logo-content">
//         <img src={face} alt="Logo" className="face-logo"/>
//         <div className="logo-cont">
//           <p><b>Author Name: {data.author}</b></p> 
//           <p className="time">Jan 25, 2023 · 10 min read</p>
//         </div>  
//       </p>
      
//       <img src={data.urlToImage} alt="" id="api-img"/>
      
//       <p className="content">{data.content} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum officia officiis. Voluptatum eum doloremque esse quis magni fuga, accusantium incidunt nam, perspiciatis ut aliquam, voluptas ad alias facilis id?
//         Expedita dignissimos nihil neque officiis atque perspiciatis cumque veritatis blanditiis nisi, laboriosam accusamus debitis, delectus enim officia molestiae accusantium autem voluptatibus maiores voluptates! Magnam totam asperiores aperiam aliquid, maxime illo!
//         Recusandae ipsam voluptate ad enim. Nulla ducimus iusto numquam nesciunt optio est libero! Temporibus iusto vitae ea laborum provident, praesentium distinctio veniam debitis voluptatibus minus sit possimus nisi quis aliquam.
//         Perspiciatis perferendis ipsum hic ea tempora blanditiis! Nihil quis cumque officiis expedita. Unde at iusto aliquam sint ipsum labore consequuntur eum dicta placeat obcaecati eveniet corporis nulla similique, vitae accusamus?
//         At consequatur nulla odit est pariatur error atque, temporibus voluptatem unde consequuntur eligendi molestiae blanditiis quia, tempora aliquid minima labore quas deserunt culpa doloremque tempore fugit magni necessitatibus nisi! Incidunt!
//         Enim asperiores consectetur at odio aperiam reiciendis earum! Sunt, minima animi eligendi sint atque tempore officia odit esse laudantium, ab enim incidunt. Quo deleniti magnam perferendis doloribus debitis, eaque quasi.
//         Asperiores magni id molestias ad quia consectetur sint ducimus vero delectus cupiditate optio repellendus fugit autem sapiente exercitationem repellat ratione tenetur qui, maxime repudiandae ipsum atque minima accusantium. Distinctio, laboriosam.
//         Id deleniti sapiente voluptate quos maxime repellendus, quod pariatur numquam quasi, placeat debitis amet eos asperiores ex culpa tempore quidem. Quisquam, recusandae? Mollitia libero exercitationem eum quibusdam iste, saepe repudiandae.
//         Vel ad ipsam delectus magni est ex? Laborum consequuntur accusamus consequatur eos neque iure, iste, illum adipisci maxime id impedit magnam ipsam repudiandae dolorum, odit nisi voluptate iusto quo eaque!
//         Veritatis nihil corrupti vel quasi similique quisquam consectetur, dicta tempore illo soluta ad est asperiores voluptatem, natus voluptates iure eaque nisi sapiente a ipsa numquam necessitatibus earum laborum nostrum. Nobis!
//         Impedit, maiores porro! Iste vel ab, nobis officiis porro nihil, sapiente, molestiae eius dignissimos asperiores voluptate ipsa unde nulla illum accusamus quos placeat exercitationem repudiandae. Architecto eveniet ab reiciendis reprehenderit!
//         Optio eveniet repudiandae deleniti sint similique totam animi perspiciatis consectetur perferendis et? Excepturi eius, tempora, quod iste quas culpa necessitatibus eos iusto possimus facere doloremque laboriosam voluptas delectus tempore asperiores.
//         Nobis esse aut enim asperiores aliquid reiciendis necessitatibus quibusdam, veritatis nulla cumque atque tempore illo maiores dolores qui voluptate repudiandae voluptates totam cum nemo! Officiis vel at ipsa enim minima.
//         Deleniti praesentium quod dignissimos hic reiciendis vero quaerat fuga facilis! Sapiente esse expedita non ipsum, laudantium eaque sequi tempora saepe soluta aperiam nostrum numquam corrupti, accusamus temporibus, exercitationem voluptatem ea!
//         Rerum aspernatur iure ducimus facere, earum qui voluptas eligendi. Suscipit facere eaque ad ipsum, similique illum. Distinctio facere modi itaque odio dicta iure, accusantium ex dolores enim quis vero ipsam?
//         Voluptatum explicabo officiis, aliquid voluptate corrupti incidunt non consequatur nobis exercitationem illum laborum, fuga nihil minus, dolorum velit cupiditate quasi molestiae maiores neque rerum necessitatibus possimus maxime accusamus minima? Similique.
//         Pariatur illo eos sint, quo quia dignissimos officiis. Odio veritatis voluptatem natus rerum placeat eius assumenda in, harum a magni aut numquam atque enim minus mollitia dolorum, iure consectetur? Esse.
//         Numquam temporibus amet repudiandae maiores, sit ex natus asperiores, saepe cumque hic aliquid iusto optio illum mollitia quia cupiditate aut sed accusantium minus nam explicabo officiis suscipit. Voluptatum, quo sint!
//         Incidunt quam optio eius impedit laboriosam numquam alias ipsam, voluptatibus quaerat deleniti repellendus odio porro placeat iure laborum commodi officiis non officia! Sequi omnis, cupiditate quo ex esse sed eaque!
//         Blanditiis cum exercitationem sit quam harum error nesciunt voluptatum consectetur expedita ab debitis possimus quaerat saepe illo, quod repellendus natus in deleniti asperiores architecto vero. Iusto, officiis amet? Ex, reprehenderit!
//       </p>
      
//       <h3>Description: {data.description }</h3>
//       <h4 >FOR MORE INFO CLICK ON BELOW Link: <br/> <br/>
//        <a href={data.url}>"{data.url}"</a>
//        </h4>

//       {/* Back Button */}

//       <button className="back">
//         <Link to={"/Hollywood"} >
//           <img src={back} alt="back" className="back-arrow"/>
//           Go Back</Link>
//       </button>
//     </div>
//     </>
//   )
// }

// export default HollywoodData
    
    
    
    
    
    
    
// <p>https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=90b5566f6c314946a71f7e0be8d307c4</p>