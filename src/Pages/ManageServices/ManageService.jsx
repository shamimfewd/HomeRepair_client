import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageService = () => {
  const { user } = useContext(AuthContext);

  const [services, setServices] = useState([]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b9-assignment-11-server.vercel.app/item/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remaining = services.filter((serv) => serv._id !== _id);
              setServices(remaining);
            }
          });
      }
    });
  };

  useEffect(() => {
    fetch(`https://b9-assignment-11-server.vercel.app/item/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, [user]);

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Helmet>
          <title>RepairRovers - Manage Service</title>
        </Helmet>

        <div className="mb-4 mx-auto text-center my-24">
          <h2 className="text-3xl font-bold mb-20 text-[#000000d6]">
            Your Posted Service
          </h2>
        </div>
        {services.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            {services.map((service) => (
              <div key={service._id}>
                <div className="card  card-side bg-base-100 shadow-xl h-[15rem]">
                  <figure className="ml-2">
                    <img
                      className="w-[13rem] ml-2"
                      src={service.photo}
                      alt="photo"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{service.serviceName}</h2>
                    <p>{service.price}</p>
                    <p>{service.description.slice(0, 100)}...</p>
                    <hr />
                    <div className="">
                      <div className="flex items-center space-x-2">
                        <img
                          className="w-8 h-8 rounded-full"
                          src={service.providerPhoto}
                          alt=""
                        />
                        <p className="font-bold">{service.providerName}</p>

                        <Link to={`/updatePage/${service._id}`}>
                          <button className="btn bg-[#3ACF87] text-white">Edit Service</button>
                        </Link>
                        <button
                          onClick={() => handleDelete(service._id)}
                          className="btn bg-orange-400 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-4xl text-orange-500 ">Your Service is Empty</h2>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ManageService;
