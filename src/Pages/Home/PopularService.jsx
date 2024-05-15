import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const PopularService = () => {
  const [services, setServices] = useState([]);
  const [visible, setVisible] = useState(6);

  const handleShowMore = () => {
    setVisible((preValue) => preValue + 2);
  };

  useEffect(() => {
    fetch("https://b9-assignment-11-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto py-20">
      <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#000000d6]">
            Popular Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4 mx-2">
          {services.slice(0, visible).map((service) => (
            <div key={service._id}>
              <div className="card lg:flex lg:card-side bg-base-100 shadow-xl md:h-[30rem] lg:h-[15rem]">
                <figure className=" lg:flex-1">
                  <img
                    className="w-full h-full"
                    src={service.photo}
                    alt="photo"
                  />
                </figure>
                <div className="card-body  lg:flex-1">
                  <h2 className="card-title">{service.serviceName}</h2>
                  <p>Price: ${service.price}</p>
                  <p>{service.description.slice(0, 100)}...</p>
                  <hr />
                  <div className="">
                    <div className="flex items-center">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={service.providerPhoto}
                        alt=""
                      />
                      <p className="font-bold">{service.providerName}</p>

                      <Link
                        to={`/details/${service._id}`}
                        className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#3ACF87] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                      >
                        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#3ACF87] group-hover:h-full"></span>
                        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                          <svg
                            className="w-5 h-5 text-[#3ACF87]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                          </svg>
                        </span>
                        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                          View Details
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          {services.length > visible ? (
            <>
              <button className="btn mt-10 bg-[#3ACF87] text-white" onClick={handleShowMore}>
                Load More
              </button>
            </>
          ) : (
            ""
          )}
          <Link to={"/services"} className="btn ml-2 bg-[#3ACF87] text-white">
            Visit All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularService;
