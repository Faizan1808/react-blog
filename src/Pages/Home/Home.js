import Navbar from "../../Components/Navbar/Navbar"
import HomeContent from './HomeContent'
import {Subcontent, Latestcontent, LatestArticle, ArticleContent, Posts, LatestStories, LatestStoriesTitle} from './HomeContent'
import image from '../../image/moun.jpg'
import image3 from '../../image/img3.jpg'
import png from '../../image/arrow.png'
import png1 from '../../image/arrow-side.png'
import './Home.css'
import Logo from "../../Components/Logo/logo"

export function Home(props){    
    return(
        <div>
            <Logo></Logo>
            <Navbar></Navbar>
            <HomeContent></HomeContent>
            <Subcontent headName = "The Latest"></Subcontent>
            
            {/* Latest Content */}
            <Latestcontent></Latestcontent>

            <LatestArticle Articlehead = "Latest Articles"></LatestArticle>
            
            
           <div id='ArticleContent'>
                <div >
                    <ArticleContent></ArticleContent>
                
                <div id="loadArticle">
                    <img src={png} alt='' className='downArrow' />
                    <div>LOAD MORE</div>
                </div>
                <div className='p'>
                    <img src = {image3} alt=' ' className='postimg' />
                    
                </div>
            </div>
                <div >
                    <div className='ad'><span id='ad'>Advertistement</span></div>

                    <div className='post'>Top Posts</div>
                    <hr className='subhr' id='hr'/>

                    <div><img src={image} alt='' className='img'/></div>
                    <h2 className='postTitle'>Catch waves with an adventure guide</h2>
                    <p id='Travel'>Travel <span id='date'> / january 14 2023</span></p>

                    <Posts />
                    
                </div>
           </div>

           <LatestStoriesTitle title="Latest Stories"></LatestStoriesTitle>
            
            <div id='LatestStories'>
                <LatestStories tech = "TECH" day ="/ TODAY AT 11:54"></LatestStories>
                <hr className='middle-hr'/>
                <LatestStories tech = "TECH" day ="/ TODAY AT 11:54"></LatestStories>
                <hr className='middle-hr'/>
                <LatestStories tech = "TECH" day ="/ TODAY AT 11:54"></LatestStories>
            </div>

            <hr className='LSHR'/>

            <div id='view-more'>
                <span>VIEW MORE</span>
                <img src={png1} alt=''/>
            </div>

        </div>
    )
}

export default Home