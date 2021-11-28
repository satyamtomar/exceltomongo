import React from 'react'
import Loader from './Loader.js'
const Home = () => {
    return (

         <div  style={{   backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         width: '100vw',
         height: '100vh',
            backgroundImage: `url('${process.env.PUBLIC_URL}/imgg.jpg')`,
        }}>
        <div className="container">
        <h1 className="text-6xl text-center " style={{ paddingTop: '20vh', color:'#dee2e6'  }}>ExceltoMongo</h1>
         
          <h1 className="text-4xl text-center" style={{ paddingTop: '20vh', color:'#dee2e6'  }}>Function of this app is to store excel directly to your mongo database</h1>
          </div>
              </div>  
           
    )
}

export default Home