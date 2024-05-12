import { useEffect, useState } from "react";

const BookedServices = () => {
  const [bookedServ, setBookedServ] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/bookingData")
      .then((res) => res.json())
      .then((data) => {
        setBookedServ(data);
      });
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {bookedServ.map((serv) => (
              <div key={serv._id}>
                <tr>
                  <th>1</th>
                  <td>{serv.serviceName}</td>
                  <td>Quality Control Specialist</td>
                  <td>{serv.status}</td>
                </tr>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedServices;
