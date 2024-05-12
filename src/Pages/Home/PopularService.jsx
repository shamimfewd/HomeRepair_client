import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const PopularService = () => {
  const [services, setServices] = useState([]);
  const [visible, setVisible] = useState(6);

  const handleShowMore = () => {
    setVisible((preValue) => preValue + 2);
  };

  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div>
        <h2 className="text-3xl my-20 text-center">Popular Services</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 gap-4">
        {services.slice(0, visible).map((service) => (
          <div key={service._id}>
            <div className="card card-side bg-base-100 shadow-xl h-[15rem]">
              <figure>
                <img className="w-[13rem]" src={service.photo} alt="photo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{service.serviceName}</h2>
                <p>{service.price}</p>
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

                    <a href="#_"></a>

                    <Link
                      to={`/details/${service._id}`}
                      className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
                    >
                      <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                      <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                          className="w-5 h-5 text-green-400"
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
                          className="w-5 h-5 text-green-400"
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
            {" "}
            <button className="btn mt-10" onClick={handleShowMore}>
              Load More
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PopularService;
