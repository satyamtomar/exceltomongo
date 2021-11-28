import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
const ViewCandidates = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/getData`);
      setData([...res.data]);
      console.log(data);
      setLoading(false);
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
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Candidates
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button
                      className="bg-gray-800 text-white active:bg-gray-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      {data.length}{"  Candidates"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="table table-dark table-striped">
                  <thead>
                    <tr>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Name
                      </th>
                      <th className="w-2/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Email
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Mobile No
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Date of Birth
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Work Experience
                      </th>
                      <th className="w-1/5 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Resume Title
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Current Location
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Postal Address
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Current Employer
                      </th>
                      <th className="w-1/12 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                        Current Designation
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {data !== undefined &&
                      data.map((obj) => {
                        return (
                          <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {obj.name}
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                              {obj.email}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                              {obj.mobile}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                              {obj.dob}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 text-left text-blueGray-700 ">
                              {obj.experience}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4 ">
                              {obj.resume}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                              {obj.location}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                              <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                              {obj.address}
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                              {obj.currentEmployer}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
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
