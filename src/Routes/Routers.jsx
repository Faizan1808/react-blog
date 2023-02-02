import './Routes.css'
import { Route, Routes, BrowserRouter} from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Index from '../Pages/Bollywood/index'
import Hollywood from '../Pages/Hollywood'
import Technology from '../Pages/Technology'
import Fitness from '../Pages/Fitness'

// import Common from '../Pages/Demo/Index'
import CommonFunction from '../Utility/CommonFunction'


const Routers = () =>{

    return(
        <BrowserRouter>
            <Routes>    

                {/* Routes */}
                <Route path='/' element={<Home/>}/>
                <Route path= "/Bollywood" element= {<Index />} />
                <Route path= "/Technology" element= {<Technology />} />
                <Route path= "/Hollywood" element= {<Hollywood />} />
                {/* <Route path= "/Common" element= {<Common />} /> */}
                <Route path= "/Fitness" element= {<Fitness />} />
                {/*<Route path= "/Food" element= {<Food />} /> */}


                {/* Dynamic Routes */}
                <Route path={`/Technology/:id`} element = {<CommonFunction />} />
                <Route path={`/Hollywood/:id`} element = {<CommonFunction />} />
                <Route path={`/Bollywood/:id`} element = {<CommonFunction />} />
                <Route path={`/Fitness/:id`} element = {<CommonFunction />} />


            </Routes>
        </BrowserRouter>
    )
}

export default Routers