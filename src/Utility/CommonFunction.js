import { useParams, useLocation } from "react-router-dom"
import face from '../image/faceLogo.png'
import insta from '../image/instagram.svg'
import fb from '../image/facebook.svg'
import yt from '../image/youtube.svg'
import twitter from '../image/twitter.svg'
import RelatedContent from "./RelatedContent"

const CommonFunction = () =>{

    const params = useParams();
    const location = useLocation();
    console.log("details", params, location)
    
    const data = location.state.item
    return(
      // fetching data
      <>
        <div id='logo'>
          <h3 className='therotate'>The</h3>
          <h1 className='siren'>Siren</h1>
          <button className="btn">Get Started</button>
        </div>
  
        <div key={data?.id} className="main-Api">
        
        <h1>{data?.title}</h1>
  
        
        <p className="logo-content">
            <img src={face} alt="Logo" className="face-logo"/>
            <div className="logo-cont">
            <p><b>Author Name: {data?.author}</b></p> 
            <p className="time">Jan 25, 2023 · 10 min read</p>
            </div>  
            <img src={insta} alt="instagram" className="social-media" />
            <img src={fb} alt="instagram" className="social-media" />
            <img src={yt} alt="instagram" className="social-media" />
            <img src={twitter} alt="instagram" className="social-media" />
        </p>
                
        
        <img src={data?.urlToImage} alt="" id="api-img"/>
        
        <p className="content">{data?.content} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta harum officia officiis. Voluptatum eum doloremque esse quis magni fuga, accusantium incidunt nam, perspiciatis ut aliquam, voluptas ad alias facilis id?
          Expedita dignissimos nihil neque officiis atque perspiciatis cumque veritatis blanditiis nisi, laboriosam accusamus debitis, delectus enim officia molestiae accusantium autem voluptatibus maiores voluptates! Magnam totam asperiores aperiam aliquid, maxime illo!
          Recusandae ipsam voluptate ad enim. Nulla ducimus iusto numquam nesciunt optio est libero! Temporibus iusto vitae ea laborum provident, praesentium distinctio veniam debitis voluptatibus minus sit possimus nisi quis aliquam.
          Perspiciatis perferendis ipsum hic ea tempora blanditiis! Nihil quis cumque officiis expedita. Unde at iusto aliquam sint ipsum labore consequuntur eum dicta placeat obcaecati eveniet corporis nulla similique, vitae accusamus?
          At consequatur nulla odit est pariatur error atque, temporibus voluptatem unde consequuntur eligendi molestiae blanditiis quia, tempora aliquid minima labore quas deserunt culpa doloremque tempore fugit magni necessitatibus nisi! Incidunt!
          Enim asperiores consectetur at odio aperiam reiciendis earum! Sunt, minima animi eligendi sint atque tempore officia odit esse laudantium, ab enim incidunt. Quo deleniti magnam perferendis doloribus debitis, eaque quasi.
          Asperiores magni id molestias ad quia consectetur sint ducimus vero delectus cupiditate optio repellendus fugit autem sapiente exercitationem repellat ratione tenetur qui, maxime repudiandae ipsum atque minima accusantium. Distinctio, laboriosam.
          Id deleniti sapiente voluptate quos maxime repellendus, quod pariatur numquam quasi, placeat debitis amet eos asperiores ex culpa tempore quidem. Quisquam, recusandae? Mollitia libero exercitationem eum quibusdam iste, saepe repudiandae.
          Vel ad ipsam delectus magni est ex? Laborum consequuntur accusamus consequatur eos neque iure, iste, illum adipisci maxime id impedit magnam ipsam repudiandae dolorum, odit nisi voluptate iusto quo eaque!
          Veritatis nihil corrupti vel quasi similique quisquam consectetur, dicta tempore illo soluta ad est asperiores voluptatem, natus voluptates iure eaque nisi sapiente a ipsa numquam necessitatibus earum laborum nostrum. Nobis!
          Impedit, maiores porro! Iste vel ab, nobis officiis porro nihil, sapiente, molestiae eius dignissimos asperiores voluptate ipsa unde nulla illum accusamus quos placeat exercitationem repudiandae. Architecto eveniet ab reiciendis reprehenderit!
          Optio eveniet repudiandae deleniti sint similique totam animi perspiciatis consectetur perferendis et? Excepturi eius, tempora, quod iste quas culpa necessitatibus eos iusto possimus facere doloremque laboriosam voluptas delectus tempore asperiores.
          Nobis esse aut enim asperiores aliquid reiciendis necessitatibus quibusdam, veritatis nulla cumque atque tempore illo maiores dolores qui voluptate repudiandae voluptates totam cum nemo! Officiis vel at ipsa enim minima.
          Deleniti praesentium quod dignissimos hic reiciendis vero quaerat fuga facilis! Sapiente esse expedita non ipsum, laudantium eaque sequi tempora saepe soluta aperiam nostrum numquam corrupti, accusamus temporibus, exercitationem voluptatem ea!
          Rerum aspernatur iure ducimus facere, earum qui voluptas eligendi. Suscipit facere eaque ad ipsum, similique illum. Distinctio facere modi itaque odio dicta iure, accusantium ex dolores enim quis vero ipsam?
          Voluptatum explicabo officiis, aliquid voluptate corrupti incidunt non consequatur nobis exercitationem illum laborum, fuga nihil minus, dolorum velit cupiditate quasi molestiae maiores neque rerum necessitatibus possimus maxime accusamus minima? Similique.
          Pariatur illo eos sint, quo quia dignissimos officiis. Odio veritatis voluptatem natus rerum placeat eius assumenda in, harum a magni aut numquam atque enim minus mollitia dolorum, iure consectetur? Esse.
          Numquam temporibus amet repudiandae maiores, sit ex natus asperiores, saepe cumque hic aliquid iusto optio illum mollitia quia cupiditate aut sed accusantium minus nam explicabo officiis suscipit. Voluptatum, quo sint!
          Incidunt quam optio eius impedit laboriosam numquam alias ipsam, voluptatibus quaerat deleniti repellendus odio porro placeat iure laborum commodi officiis non officia! Sequi omnis, cupiditate quo ex esse sed eaque!
          Blanditiis cum exercitationem sit quam harum error nesciunt voluptatum consectetur expedita ab debitis possimus quaerat saepe illo, quod repellendus natus in deleniti asperiores architecto vero. Iusto, officiis amet? Ex, reprehenderit!
        </p>
        
        <h3>Description: {data?.description }</h3>
        <h4 >FOR MORE INFO CLICK ON BELOW Link: <br/> <br/>
         <a href={data?.url}>"{data?.url}"</a>
         </h4>
        
            <hr />
        <div className="footter">
            <img src={face} alt="Logo" className="face-logo"/>
            <div  className="foot-left">
                <h3>Written By</h3>
                <span>{data?.author}</span>
                <span>Jan 28, 2019 · 10 min read</span>
            </div>
        </div>
            <hr/>

        </div>
        
        <div className="related-content">
            <p className="related-content-heading">More From The Siren</p>

            <div className="related-content-images">
                <RelatedContent image= {data?.urlToImage} title={data?.title} profilePic = {face} author = {data?.author}></RelatedContent>
                <RelatedContent image= {data?.urlToImage} title={data?.title} profilePic = {face} author = {data?.author}></RelatedContent>
                <RelatedContent image= {data?.urlToImage} title={data?.title} profilePic = {face} author = {data?.author}></RelatedContent>
                
            </div>
            {/*</div>
                <p>{data.title}</p>
                <p>{data.title}</p>
                <p>{data.title}</p> */}
        </div>

        
          {/* Back Button */}
          
                {/* <button className="back">
                  <Link to={"/Hollywood"} >
                    <img src={back} alt="back" className="back-arrow"/>
                    Go Back</Link>
                </button> */}
      </>
    )
  }
  
  export default CommonFunction


