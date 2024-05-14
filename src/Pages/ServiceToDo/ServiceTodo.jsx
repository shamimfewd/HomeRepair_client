import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";

const ServiceTodo = () => {
  const [todoData, setTodoData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/serviceToDoData/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setTodoData(data);
      });
  }, [user]);

  // status function

  const handleStatus = async (id, prevStatus, status) => {
    console.log(id, prevStatus, status);
    const { data } = await axios.patch(
      `http://localhost:5000/updateSta/${id}`,
      { status }
    );
    console.log(data);

    // fetch(`http://localhost:5000/updateSta/${id}`, {
    //   method: "PATCH",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({ confirm: status }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     if (data.modifiedCount > 0) {
    //       alert("updated status");
    //     }
    //     console.log(data);
    //   });
  };
  return (
    <div className="max-w-7xl mx-auto bg-[#F5F5F5] mb-24">
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
            {todoData.map((serv) => (
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
                    }   ${serv.status === "Working" && "bg-green-300"} ${
                      serv.status === "Completed" && "bg-blue-300"
                    }`}
                  >
                    {serv.status}
                  </span>
                </td>
                <td>
                  {/* <button
                    onClick={() =>
                      handleStatus(serv._id, serv.status, "In Progress")
                    }
                  >
                    btn
                  </button> */}

                  <details className="dropdown">
                    <summary className="m-1 btn">Pending</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                      <li
                        onClick={handleStatus(serv._id, serv.status, "Working")}
                      >
                        <a>Working</a>
                      </li>
                      <li
                        onClick={handleStatus(
                          serv._id,
                          serv.status,
                          "Completed"
                        )}
                      >
                        <a>Completed</a>
                      </li>
                    </ul>
                  </details>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTodo;
