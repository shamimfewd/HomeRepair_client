import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";

const BookedServices = () => {
  const [bookedServ, setBookedServ] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(
      `https://b9-assignment-11-server.vercel.app/bookingData/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setBookedServ(data);
      });
  }, [user]);

  return (
    <div className="max-w-7xl mx-auto bg-[#F5F5F5] mb-24">
      <Helmet>
        <title>RepairRovers - Booked Service</title>
      </Helmet>
      <div className="overflow-x-auto bg-[#FFFFFF] my-24 rounded-xl p-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[#000000d6]">
            My Booked Service: {bookedServ.length}
          </h2>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>Service Photo</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Status</th>
              {/* <th>Action</th> */}
            </tr>
          </thead>
          <tbody className="my-24">
            {bookedServ.length > 0 ? (
              <>
                {bookedServ.map((serv) => (
                  <tr key={serv._id}>
                    <td>
                      {" "}
                      <img
                        className="w-10 h-10 rounded-full"
                        src={serv?.photo}
                        alt=""
                      />
                    </td>
                    <td>{serv.serviceName}</td>
                    <td>${serv.price}</td>
                    <td>
                      <span
                        className={`rounded-md p-1 text-sm  ${
                          serv.status === "Pending" && "bg-yellow-300"
                        } ${serv.status === "Working" && "bg-green-300"} ${
                          serv.status === "Completed" && "bg-blue-300"
                        }`}
                      >
                        {serv.status}
                      </span>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </>
            ) : (
              <div className="flex justify-center items-center">
                <div>
                  <h2 className="text-4xl text-orange-500">
                    Your Service is Empty
                  </h2>
                </div>
              </div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedServices;
