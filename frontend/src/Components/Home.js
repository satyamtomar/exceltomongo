import React,{useEffect,useState} from 'react'
import Loader from "./Loader.js"
const Home = (props) => {
    const [loading,setLoading]= useState(0);
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }
    
    useEffect(async () => {

          setLoading(true);
          props.setProgress(10);
          await timeout(500);
          props.setProgress(40);
          
          setTimeout(() => {   }, 2000);

          props.setProgress(70);
          
          await timeout(500);
          setLoading(false);
          props.setProgress(100);
          
      }, []);
      return (
       
         <div  style={{   backgroundPosition: 'center',
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         width: '100vw',
         height: '100vh',
            backgroundImage: `url('${process.env.PUBLIC_URL}/imgg.jpg')`,
        }}>
   {loading ? (
        <Loader />
      ) : (
           
        <div className="container">
        <h1 className="text-6xl text-center " style={{ paddingTop: '20vh', color:'#dee2e6'  }}>ExceltoMongo</h1>
         
          <h1 className="text-4xl text-center" style={{ paddingTop: '20vh', color:'#dee2e6'  }}>Function of this app is to store excel directly to your mongo database</h1>
          </div>
      )}
              </div>  
           
    )
}

export default Home