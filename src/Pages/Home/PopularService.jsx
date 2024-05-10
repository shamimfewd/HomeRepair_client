import { useEffect, useState } from "react";

const PopularService = () => {
  const [services, setServices] = useState([]);
  //   const newService = {
  //     photo,
  //     serviceArea,
  //     serviceName,
  //     price,
  //     description,
  //     providerName,
  //     providerEmail,
  //     providerPhoto,
  //   };
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      {services.map((service) => (
        <div key={service._id}>
          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img src={service.photo} alt="photo" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.serviceName}</h2>
              <p>{service.price}</p>
              <p>{service.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">View Details</button>
                <img src={service.providerPhoto} alt="" />
                <p>{service.providerName}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularService;
