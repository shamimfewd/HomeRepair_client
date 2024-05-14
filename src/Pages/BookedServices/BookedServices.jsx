import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const BookedServices = () => {
  const [bookedServ, setBookedServ] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/bookingData/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookedServ(data);
      });
  }, [user]);

  console.log(bookedServ);

  
  return (
    <div className="max-w-7xl mx-auto bg-[#F5F5F5] mb-24">
      <h3 className="text-xl">my bids{bookedServ.length}</h3>
      <div className="overflow-x-auto bg-[#FFFFFF] my-24 rounded-xl ">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th>Service Photo</th>
              <th>Service Name</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="my-24">
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
                <td>Quality Control Specialist</td>
                <td
                  className={`${
                    serv.status === "Pending" && "text-yellow-100"
                  }`}
                >
                  <span
                    className={`rounded-md p-1 text-sm  ${
                      serv.status === "Pending" && "bg-yellow-300"
                    } ${
                      serv.status === "Working" && "bg-green-300"
                    } ${
                      serv.status === "Completed" && "bg-blue-300"
                    }`}
                  >
                    {serv.status}
                  </span>
                </td>
                <td>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedServices;
