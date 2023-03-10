import './Home.css'
import { useState, useEffect } from 'react'


const HomeContent = () => {
    const [data, setData] = useState([])

    const FetchApi = () => {
        return fetch("https://blogapi-9ibr.onrender.com/")
            .then((response) => {
                return response.json();
            })

            .then((res) => {
                setData(res)

            })
    }

    // console.log(data)
    useEffect(() => {
        FetchApi()
    }, [])

    return (
        <>
            {
                data.slice(0, 1).map((item, index ) => (
                    <div className='imgs' key={index}>

                        <div className='gridimg1'>
                            <div className='title'>{item?.title}</div>
                            <img src={item?.urlToImage} alt='image1' className='image1' />
                        </div>
                        <div className='fleximg'>
                            {
                                data.slice(1, 3).map((item , index) => (

                                    <div className='grid-img2' key={index}>
                                        <div className='title'>{item?.title}</div>
                                        <img src={item?.urlToImage} alt='image1' className='image2' />
                                    </div>


                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}


// Latest Content
export function Subcontent(props) {
    return (
        <div>
            <h2 className='subcontent'>{props.headName}</h2>
            <hr className='subhr' />
        </div>
    )
}

export function Latestcontent(props) {

    const [data, setData] = useState([])

    const FetchApi = () => {
        return fetch("https://blogapi-9ibr.onrender.com/")
            .then((response) => {
                return response.json();
            })

            .then((res) => {
                setData(res)

            })
    }
    // console.log(data)

    useEffect(() => {
        FetchApi()
    }, [])
    return (

        <>
            <div id='LC'>
                {
                    data.slice(0, 3).map((item, index) => (
                        <div className='' key={index}><img src={item?.urlToImage} alt='image2' className='latestcontentimg' />
                            <h3>{item?.title}</h3>
                            <p>{item?.description}</p>
                            <p className='Travel' id='lc'>{item?.source?.name} <span> {item.publishedAt}</span></p>
                        </div>

                    ))
                }
            </div>
        </>
    )
}


// Latest Articles

export function LatestArticle(props) {
    return (
        <div>
            <h2 className='subcontent'>{props.Articlehead}</h2>
            <hr className='subhr' />
        </div>
    )
}

export function ArticleContent(props) {
    const [data, setData] = useState([])

    const FetchApi = () => {
        return fetch("https://blogapi-9ibr.onrender.com/")
            .then((response) => {
                return response.json();
            })

            .then((res) => {
                setData(res)

            })
    }
    // console.log(data)

    useEffect(() => {
        FetchApi()
    }, [])
    return (
        <div >
            <div className='ArticleContent'>
                {
                    data.slice(3, 7).map((item ,index) => (

                        <div key={index}>
                            <hr className='hr' />
                            <div className='ArticleContent-row' >
                                <img src={item?.urlToImage} alt='image2' className='ArticleContentimg' />
                                <div className='ArticlesContent-column'>
                                    <h3>{item?.title}</h3>
                                    <p>{item?.description}</p>
                                    <p className='Travel' id='lc'>{item?.source?.name} <span> {item?.publishedAt}</span></p>
                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>

        </div>
    )
}


// posts
export function Posts(props) {

    const [data, setData] = useState([])

    const FetchApi = () => {
        return fetch("https://blogapi-9ibr.onrender.com/")
            .then((response) => {
                return response.json();
            })

            .then((res) => {
                setData(res)

            })
    }

    // console.log(data)
    useEffect(() => {
        FetchApi()
    }, [])
    return (
        <>
            <div className='postContainer'>
                {
                    data.slice(0, 3).map((item, index) => (
                        <div key={index}>
                            <hr id='post-hr' />
                            <div className='pImg' >
                                <img src={item?.urlToImage} alt="image3" className='pimg' />
                                <div id='AT'>
                                    <p className='title'>{item?.author}</p>
                                    <p className='Travel'>{item?.source?.name} <br /> <span id="travelDate"> {item?.publishedAt}</span></p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export function LatestStoriesTitle(props) {
    return (
        <div id='LatestStoriesTitle'>
            <h1>{props.title}</h1>
            <hr className='subhr' />
            <hr className='LSHR ' id='Latest-hr' />
        </div>
    )
}

export function LatestStories(props) {
    return (
        <div id='LatestStories'>

            <div>
                <h3>Catch waves with an adventure guide</h3>
                <p className='Latest-para'>The Taj Mahal is an ivory-white marble mausoleum on the <br /> south bank of the
                    Yamuna river in the Indian city of Agra.<br /> It  was commissioned in 1632 by the Mughal emperor, <br />Shah Jahan (reigned from 1628 to 1658),
                    to house the <br />tomb of his favourite wife, Mumtaz Mahal.
                </p>

                <p className='Tech'>{props.tech} <span id="Date"> {props.day}</span></p>
            </div>

        </div>
    )
}


export default HomeContent