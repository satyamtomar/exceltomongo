import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
const ViewCandidates = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      props.setProgress(10)
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getData`);
      props.setProgress(40);
      setData([...res.data]);
      props.setProgress(70);
      console.log(data);
      setLoading(false);
      props.setProgress(100);
    };
    getData();
  }, []);
  return (
    <div  style={{   backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    
       backgroundImage: `url('${process.env.PUBLIC_URL}/img.jpg')`,
   }}>   

      {loading ? (
        <Loader />
      ) : (
        <section className="py-1 bg-blueGray-50">
          <div className="w-full xl:w-11/12  px-4 mx-auto mt-8">
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded ">
              

              <div className="block w-full overflow-x-auto  pt-10">
                <table className="table table-dark table-striped table-bordered border border-5">
                  <thead>
                    <tr>
                    
                    <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        S.No.
                      </th>
                      <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                      </th>
                      <th className="w-2/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Email
                      </th>
                      <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Mobile No
                      </th>
                      <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date of Birth
                      </th>
                      <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Work Experience
                      </th>
                      <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Current Location
                      </th>
                      <th className="w-1/12 px-6 bg-gray-700  text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Current Designation
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data !== undefined &&
                      data.map((obj,index) => {
                        return (
                          <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 border border-solid border-blueGray-100 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {index+1}
                            </th>
                           
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm  border border-solid border-blueGray-100 whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {obj.name}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 border border-solid border-blueGray-100 text-sm whitespace-nowrap p-4 ">
                              {obj.email}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">
                              {obj.mobile}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">
                              {obj.dob}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 border border-solid border-blueGray-100">
                              {obj.experience}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4 border border-solid border-blueGray-100">
                              {obj.location}
                            </td>
                            
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 border border-solid border-blueGray-100">
                              {obj.currentDesignation}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <footer className="relative pt-8 pb-6 mt-16">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div className="text-sm text-blueGray-500 font-semibold py-1">
                    @copyright{" "}
                    <a
                      href="#"
                      className="text-blueGray-500 hover:text-gray-800"
                      target="_blank"
                    >
                      Satyam
                    </a>{" "}
                    {" "}
                    <a
                      href="#"
                      className="text-blueGray-500 hover:text-blueGray-800"
                      target="_blank"
                    >
                      {" "}
                     Tomar
                    </a>
                    .
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      )}
    </div>
  );
};

export default ViewCandidates;
