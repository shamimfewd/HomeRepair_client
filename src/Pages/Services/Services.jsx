import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  const [visible, setVisible] = useState(6);
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");

  const handleShowMore = () => {
    setVisible((preValue) => preValue + 2);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchText);
  };

  // filter data from db
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://b9-assignment-11-server.vercel.app/allData?search=${search}`
      );
      setServices(data);
    };

    getData();
  }, [search]);

  // // get all data from db
  useEffect(() => {
    fetch("https://b9-assignment-11-server.vercel.app/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="bg-[#F5F5F5]">
      <div className="py-24">
        <Helmet>
          <title>RepairRovers - Services</title>
        </Helmet>
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-[#000000d6]">All Services</h2>
        </div>
        <div className="ml-10">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              name="searchValue"
              className="grow input"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              placeholder="Search"
            />
            <input
              className="btn bg-[#000000e8] text-white"
              type="submit"
              value="Search"
            />
          </form>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1  gap-4 max-w-7xl mx-auto">
            {services.slice(0, visible).map((service) => (
              <div key={service._id}>
                <div className="card card-side bg-base-100 shadow-xl h-[15rem]">
                  <figure>
                    <img
                      className="w-[13rem]"
                      src={service.photo}
                      alt="photo"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{service.serviceName}</h2>
                    <p>Price: {service.price}</p>
                    <p>Location: {service.serviceArea}</p>
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

                        <Link to={`/details/${service._id}`}>
                          <button className="btn ">View Details</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          {services.length > visible ? (
            <>
              <button className="btn mt-10" onClick={handleShowMore}>
                Load More
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Services;
