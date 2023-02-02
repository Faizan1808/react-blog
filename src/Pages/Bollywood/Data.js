// // imports
// import { useParams, useLocation } from "react-router-dom"
// import { Link } from "react-router-dom"
// import back from '../../image/back-arrow.png'
// import face from '../../image/faceLogo.png'
// import insta from '../../image/instagram.svg'
// import fb from '../../image/facebook.svg'
// import yt from '../../image/youtube.svg'
// import twitter from '../../image/twitter.svg'

// export const BollyData = [
//     {
//         "id": 1,
//         "name": "Bollywood Hungama",
//         "author": "Bollywood Hungama",
//         "title": "SCOOP: Salman Khan makes a SMASHING ENTRY as Tiger in the second half of Pathaan - Bollywood Hungama",
//         "description": "SCOOP: Salman Khan makes a SMASHING ENTRY as Tiger in the second half of Pathaan. Bollywood News: Latest Bollywood News, Bollywood News Today, Bollywood Celebrity News, Breaking News, Celeb News, Celebrities News, Bollywood News Hindi, Hindi Bollywood News at…",
//         "url": "https://www.bollywoodhungama.com/news/bollywood/scoop-salman-khan-makes-smashing-entry-tiger-second-half-pathaan/",
//         "urlToImage": "https://media5.bollywoodhungama.in/wp-content/uploads/2023/01/SCOOP-Salman-Khan-makes-a-SMASHING-ENTRY-as-Tiger-in-the-second-half-of-Pathaan.jpg",
//         "publishedAt": "2023-01-25T02:40:10Z",
//         "content": `If you watch Pathaan and don't find Salman Khan in the first half of the film, then we advice you to not be disappointed. Bollywood Hungama has exclusively discovered that Salman Khan aka. Tiger make According to a source close to the development, Salman Khan has an extraordinary screen presence as Tiger in his 15-minute-long action packed extended appearance in Siddharth Anand's Pathaan. "From helicopter, to guns and hand to hand combats - you will see Salman Khan acing the space that he excels in to rescue his friend Shah Rukh Khan from tough times of being trapped by Russian Mafia," a source told Bollywood Hungama.
//         The two superstars have a dynamic presence in the film leaving the fans asking for more and more of the two. "And that combo will be back soon in a full-fledged film, as a crossover of Tiger and Pathaan is in the making. The idea of Aditya Chopra is to celebrate two of Hindi Cinema's biggest megastars - Shah Rukh Khan and Salman Khan," the source told us further.
//         Pathaan is an extension of YRF spy universe that kicked off with Ek Tha Tiger in 2012, followed by Tiger Zinda Hai and War. While it all started with the Salman Khan film, the superstar is now being joined by Hrithik Roshan, Tiger Shroff and Shah Rukh Khan in this action packed universe, which is undoubtedly the biggest universe of Hindi cinema. Meanwhile, Pathaan has taken an earth-shattering opening at the box office.
//         Also Read: Confirmed! Salman Khan’s Kisi Ka Bhai Kisi Ki Jaan teaser to be attached with SRK’s Pathaan`
//     },
//     {

//         "id": 2,
//         "name": "India Today",
//         "author": "Arunesh Kumar Sharma",
//         "title": "Horoscope Today, 25 January 2023: Check here Astrological prediction for all sun signs - India Today",
//         "description": "Today Horoscope: Astrological prediction for 25 January, 2023: Aren't you excited to know what stars have in store for you today? Find out the answers to your questions related to love, health, money, career in this daily horoscope for Aries, Taurus, Gemini, …",
//         "url": "https://www.indiatoday.in/horoscopes/story/horoscope-today-january-25-2023-aries-taurus-gemini-cancer-leo-virgo-libra-scorpio-sagittarius-capricorn-aquarius-pisces-2325953-2023-01-25",
//         "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202301/horoscope-sixteen_nine.jpg?VersionId=ZlAtfCxgrNiX6HiqC_h6fIpvVErCL8r2",
//         "publishedAt": "2023-01-25T00:34:02Z",
//         "content": "By Arunesh Kumar Sharma: Are you expecting a job offer or communication with your romantic partner? Look for your Sun sign in the daily horoscope below and find out. \r\nAries Daily Horoscope:\r\nDear "
//     },
//     {

//         "id": 3,
//         "name": "PINKVILLA",
//         "author": "Akhila Menon",
//         "title": "Pathaan screening: Shah Rukh Khan and John Abraham twin in black; Deepika looks goofy in these inside PICS - PINKVILLA",
//         "description": "Shah Rukh Khan, Deepika Padukone, John Abraham, And The Other Pathaan Team Members Attended The Special Screening Of Siddharth Anand's Film In Mumbai, On Tuesday Night.",
//         "url": "https://www.pinkvilla.com/entertainment/news/pathaan-screening-shah-rukh-khan-and-john-abraham-twin-in-black-deepika-looks-goofy-in-these-inside-pics-1207141",
//         "urlToImage": "https://www.pinkvilla.com/english/images/2023/01/921396630_pathaan-screening-1_1280*720.jpg",
//         "publishedAt": "2023-01-24T23:17:02Z",
//         "content": "Shah Rukh Khan's highly anticipated comeback film Pathaan is finally getting its grand release today (January 25, Wednesday). The spy thriller, which is helmed by hitmaker Siddharth Anand, marks SRK"
//     },
//     {

//         "id": 4,
//         "name": "PINKVILLA",
//         "author": "Akhila Menon",
//         "title": "Pathaan FIRST REVIEW out: Fans call Shah Rukh Khan-Deepika Padukone’s film a ‘Visual delight’ - PINKVILLA",
//         "description": "Pathaan, The Spy Thriller That Marks Shah Rukh Khan's Massive Comeback To The Silverscreen, Is Getting Excellent Reviews From The Audiences After Its First Show.",
//         "url": "https://www.pinkvilla.com/entertainment/news/pathaan-first-review-out-fans-call-shah-rukh-khan-deepika-padukones-film-a-visual-delight-1207140",
//         "urlToImage": "https://www.pinkvilla.com/english/images/2023/01/1939812406_pathaan-first-review_1280*720.jpg",
//         "publishedAt": "2023-01-24T22:32:58Z",
//         "content": `Pathaan, the highly anticipated spy thriller that features Shah Rukh Khan in the titular role, has finally hit the theatres. The Siddharth Anand directorial, which is unarguably one of the most-awaited Bollywood projects of 2023, is the latest installment in Yash Raj Film's highly-celebrated spy universe. Deepika Padukone is playing the female lead in Pathaan, which has raised the expectations of cine-goers with its exceptional official trailer and songs. Interestingly, the first show of Pathaan is finished, and the film is receiving excellent reviews.
//         Pathaan First Reviews are out. As expected, Shah Rukh Khan's highly anticipated comeback film has been receiving excellent reviews from the audiences, when it completed its first show. The netizens, who watched the first show of Pathaan, are now heaping praises on the Siddharth Anand directorial, and are calling it a 'Visual delight'. From the first reviews, it is evident that the spy thriller is going to set the box office on fire, and is a sure-shot blockbuster. 
//         Check out Pathaan's first reviews below (No spoilers ahead):
//         "#Pathaan: OUTSTANDING! Rating: King is back #Srk #Pathaan offers everything, a complete package, will be a blockbuster…. Srk’s career-defining act... Sid Anand’s direction top notch ... Don’t miss! #Pathaanreview" wrote @Iam_atul_ on his Twitter handle.
//         "Pathaan is Superb Film it’s A Super Duper Hit," wrote Gulnaaz Khan on her Instagram handle.
//         "#Pathaan is HIGH VOLTAGE ACTION DRAMA with convincing story, Storytelling is brilliant as we want from Sid Anand #ShahRukhKhan performance is outstanding, #JohnAbraham and #deepikapadukone are also fine, Too many surprise and twist," wrote Bollywood Buddie on Twitter.
//         "First Pathaan Review : CINEMATIC JOY Visual Delight. SRK's best in recent times. John & Deepika were great. Surprising Cameos. Unbelievable climax. Spy Universe on a roll," reads @thenameisshaby on his Twitter handle.
//         "#Pathaan Well written Action thriller, a tight screenplay, Entertaining Cameos, Twist and Suspense, Spy universe Sharply connected (mainly Tiger). Blockbuster #pathaanreview," wrote Subash on Twitter.
//         Everything to know about Pathaan The much-awaited spy thriller features Shah Rukh Khan as an ex-RAW field agent, who returns to save his motherland India from a massive danger. John Abraham, the celebrated star is playing the lead antagonist Jim in the film. Deepika Padukone, on the other hand, appears in the role of a spy. Pathaan also features Bollywood superstar Salman Khan in a special cameo appearance, and senior actress Dimple Kapadia and Ashutosh Rana in pivotal roles. `
//     },
//     {

//         "id": 5,
//         "name": "The Times of India",
//         "author": "TNN",
//         "title": "Naatu Naatu among 3 Oscar nominations for India - Indiatimes.com",
//         "description": "India News: India clinched three nominations for the upcoming 95th edition of the Academy Awards, including for ‘Naatu Naatu’ from SS Rajamouli’s blockbuster ‘RRR",
//         "url": "https://timesofindia.indiatimes.com/india/naatu-naatu-among-3-oscar-nominations-for-india/articleshow/97291546.cms",
//         "urlToImage": "https://static.toiimg.com/thumb/msid-97291639,width-1070,height-580,imgsize-66294,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
//         "publishedAt": "2023-01-24T22:13:00Z",
//         "content": `India clinched three nominations for the upcoming 95th edition of the Academy Awards, including for Naatu Naatu ’ from SS Rajamouli’s blockbuster ’ for best original song. The Telugu  hit dance track was the first Indian song to win a Golden Globe earlier this month. The other nominations for the Oscars  are ‘All That Breathes’ for documentary feature and ‘The Elephant Whisperers’ for documentary short.India’s official entry to the Oscars — Gujarati film ‘Chhello Show’ (The Last Show) — failed to make the cut in the final five. The multiverse-skipping sci-fi indie hit “Everything Everywhere All at Once” led with 11 nominations. ‘Naatu Naatu’ will compete with ‘Applause’ from ‘Tell It Like a Woman’, ‘Hold My Hand’ from ‘Top Gun: Maverick’, ‘Lift Me Up’ from ‘Black Panther: Wakanda Forever’ and ‘This Is a Life’ from ‘Everything Everywhere All at Once’. “WE CREATED HISTORY!! Proud and privileged to share that #NaatuNaatu has been nominated for Best Original song at the 95th Academy Awards,” the film's official Twitter handle posted. Composer Keeravani tweeted, “Congratulations to my team!! Big hugs to all.” ‘All That Breathes’, set in Delhi, follows two siblings, Mohammad Saud and Nadeem Shehzad, who have devoted their lives to rescuing and treating injured birds, especially black kites. It has also been nominated for a Bafta Award. It previously won the ‘World Cinema Grand Jury Prize: Documentary’ at this year’s Sundance Film Festival, and the Golden Eye award at Cannes. Tamil documentary ‘The Elephant Whisperers’ captures the endearing bond between two abandoned elephants and their caretakers. “It’s such an honour to have an Indian indigenous documentary from the heart of South India acknowledged across the world,” director  said in a statement. The Netflix documentary is produced by Guneet Monga and Achin Jain of Sikhya Entertainment.The Oscars will be presented at the Dolby Theatre in Los Angeles on March 12. Jimmy Kimmel returns as the host, after previously leading the awards show in 2017 and 2018. The awards ceremony went host-less in 2020 and 2021 due to the Covid-19 pandemic.`
//     },
//     {

//         "id": 6,
//         "name": "Greatandhra.com",
//         "author": "Venkat",
//         "title": "MM Keeravani and Chandrabose Create History - Greatandhra",
//         "description": "When the western media and Rajamouli's team started promoting RRR, many people were skeptical that the film would make it to the Oscars.",
//         "url": "https://www.greatandhra.com/movies/news/mm-keeravani-and-chandrabose-create-history-126820",
//         "urlToImage": "https://www.greatandhra.com/newphotos10/keeravani-chandrabose (1)1674587760.jpg",
//         "publishedAt": "2023-01-24T19:16:00Z",
//         "content": "When the western media and Rajamouli's team started promoting \"RRR,\" many people were skeptical that the film would make it to the Oscars.\r\nNonetheless, some believed that only the \"Naatu Naatu\" song"
//     },
//     {

//         "id": 7,
//         "name": "123telugu.com",
//         "author": null,
//         "title": "Spy action thriller is on rampage mode on Netflix - 123telugu",
//         "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
//         "url": "https://www.123telugu.com/mnews/spy-action-thriller-is-on-rampage-mode-on-netflix.html",
//         "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
//         "publishedAt": "2023-01-24T16:11:00Z",
//         "content": "Bollywood handsome hunk Sidharth Malhotra and national crush Rashmika Mandanna starrer Mission Majnu was released directly on Netflix, skipping the theatrical release. The movie received mixed review"
//     },
//     {
//         "id": 8,
//         "name": "Al Jazeera English",
//         "author": "Al Jazeera",
//         "title": "Academy Awards 2023: full list of Oscar nominations - Al Jazeera English",
//         "description": "Michelle Yeoh is second Asian woman to get best actress nod, Naatu Naatu, first Indian film song to be nominated.",
//         "url": "https://www.aljazeera.com/news/2023/1/24/academy-awards-2023-full-list-of-oscar-nominations",
//         "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/01/AP23024469590042.jpg?resize=1920%2C1440",
//         "publishedAt": "2023-01-24T15:55:52Z",
//         "content": "The nominations for the 95th Academy Awards have been announced, with sci-fi family drama, Everything Everywhere all at Once, leading the pack with 11 nods, followed by German anti-war movie, All Qui"
//     },
//     {

//         "id": 9,
//         "name": "Hindustan Times",
//         "author": "HT Entertainment Desk",
//         "title": "Deepika Padukone reacts after Katrina Kaif gives shoutout to Pathaan. See note - Hindustan Times",
//         "description": "Deepika Padukone responded after Katrina Kaif gave a shoutout to Pathaan. Here's what she said. | Bollywood",
//         "url": "https://www.hindustantimes.com/entertainment/bollywood/deepika-padukone-reacts-after-katrina-kaif-gives-shoutout-to-pathaan-shares-message-for-audience-101674572550270.html",
//         "urlToImage": "https://images.hindustantimes.com/img/2023/01/24/1600x900/katrina_kaif_deepika_padukone_1674573213801_1674573223381_1674573223381.JPG",
//         "publishedAt": "2023-01-24T15:25:57Z",
//         "content": "Deepika Padukone reacted after Katrina Kaif gave a shoutout to her upcoming film Pathaan. Taking to her Instagram Stories on Tuesday, Katrina shared a picture of her character Zoya from her film fran"
//     }
// ]


// const BollywoodData = () =>{

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
//             <div key={data.id} className="main-Api">
      
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
//                     <Link to={"/Bollywood"} >
//                     <img src={back} alt="back" className="back-arrow"/>
//                     Go Back</Link>
//                 </button>
//             </div>
//         </>
//     )
// }

// export default BollywoodData

