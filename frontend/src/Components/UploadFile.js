import React, { useState, useRef } from "react";
import axios from "axios";
import {Alert,SuccessAlert} from "./Alert";
import Loader from "./Loader";

const APIURL = "http://localhost:8000";
const UploadFile = () => {

  const ref = useRef(null);
  const [file, setFile] = useState(null);
  const [display, setDisplay] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendFile = async (data) => {
    const res = await axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/upload`,
      data,
      config: { headers: { "Content-Type": "multipart/form-data" } },
    });

    console.log(res, "res is");
  };
  const handleSubmit = async () => {
    console.log("Click");
    if (file === null) {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
    if (
      file !== null &&
      (file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ||
        file.type === "application/vnd.ms-excel")
    ) {
      let bodyFormData = new FormData();
      bodyFormData.append("xlsx", file);
      setLoading(true);
      await sendFile(bodyFormData);
      setLoading(false);

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      setDisplay(true);
      setTimeout(() => {
        setDisplay(false);
      }, 3000);
    }
    setFile(null);
  };
  return (
    
    <div  style={{   backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '100vh',
       backgroundImage: `url('${process.env.PUBLIC_URL}/img.jpg')`,
   }}>   
 {loading ? (
      <Loader />
    ):(
      <div className="max-w-100 rounded overflow-hidden  flex justify-center">
        <Alert display={display} />
        <SuccessAlert display={success} />
        <div className="py-20 h-screen  px-2  w-96"  style={{ paddingTop:'20vh',marginLeft:"auto",marginRight:"auto"}}>
          <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden md:max-w-lg">
            <div className="md:flex">
              <div className="w-full">
                <div className="p-4 border-b-2">
                  {" "}
                  <span className="text-lg font-bold text-gray-600">
                    Add document
                  </span>{" "}
                </div>
                <div className="p-3">
                  <div className="mb-2">
                    {" "}
                    <span>Attachment</span>
                    <div className="relative h-40 rounded-lg border-dashed border-2 border-gray-200 bg-white flex justify-center items-center hover:cursor-pointer">
                      <div className="absolute">
                        <div className="flex flex-col items-center ">
                          {" "}
                          <i className="fa fa-cloud-upload fa-3x text-gray-200"></i>{" "}
                          <span className="block text-gray-400 font-normal">
                            Attach you files here
                          </span>{" "}
                          <span className="block text-gray-400 font-normal">
                            or
                          </span>{" "}
                          <span className="block text-blue-400 font-normal">
                            Browse files
                          </span>{" "}
                        </div>
                      </div>{" "}
                      <input
                        type="file"
                        className="h-full w-full opacity-0"
                        name=""
                        ref={ref}
                        accept=".xls, .xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                        onChange={(e) => {
                          setFile(e.target.files[0]);
                        }}
                      />

                      
                    </div>
                    <span>
                      {" "}
                      {file !== null ? file.name : "No File Chosen"}{" "}
                    </span>
                    <div className="flex justify-between items-center text-gray-400">
                      {" "}
                      <span>Accepted file type: .xlsx , .xls only</span>{" "}
                    </div>
                  </div>
                  <div className="mt-3 text-center pb-3">
                    {" "}
                    <button
                      className="w-full h-12 text-lg w-32 bg-gray-800 rounded text-white hover:bg-gray-800"
                      onClick={handleSubmit}
                      disabled={loading}
                      style={{display:"flex",alignItems: "center",justifyContent: "center"}}
                    >
                      {loading && (
                        <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-8 w-8 mr-4"></div>
                      )}
                      Submit
                    </button>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    
      </div>
    )}
    </div>
    
  );
}

export default UploadFile
