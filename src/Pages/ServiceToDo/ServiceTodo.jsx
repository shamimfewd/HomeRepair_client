import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const ServiceTodo = () => {
  const [todoData, setTodoData] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(
      `https://b9-assignment-11-server.vercel.app/serviceToDoData/${user?.email}`
    );
    setTodoData(data);
  };

  // status function

  const handleStatus = async (id, prevStatus, status) => {
    if (prevStatus === status)
      return toast.warning("Sorry, Status Already Exist");
    const { data } = await axios.patch(
      `https://b9-assignment-11-server.vercel.app/updateSta/${id}`,
      { status }
    );
    console.log(data);

    getData();
  };
  return (
    <div className="max-w-7xl mx-auto bg-[#F5F5F5] mb-24">
      <Helmet>
        <title>RepairRovers - Service-To-Do</title>
      </Helmet>
      <div className="overflow-x-auto bg-[#FFFFFF] my-24 rounded-xl p-6">
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[#000000d6]">
            Request Me Service: {todoData.length}
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="my-24">
            {todoData.length > 0 ? (
              <>
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
                    <td>{serv?.serviceName}</td>
                    <td>${serv?.price}</td>
                    <td>
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
                      <details className="dropdown">
                        <summary className="m-1 btn bg-[#3ACF87] text-white">Action</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                          <li
                            onClick={
                              serv.status !== "Completed"
                                ? () =>
                                    handleStatus(
                                      serv._id,
                                      serv.status,
                                      "Pending"
                                    )
                                : null
                            }
                            className={
                              serv.status === "Completed" ? "disabled:" : ""
                            }
                          >
                            <a>Pending</a>
                          </li>

                          <li
                            onClick={
                              serv.status !== "Completed"
                                ? () =>
                                    handleStatus(
                                      serv._id,
                                      serv.status,
                                      "Working"
                                    )
                                : null
                            }
                            className={
                              serv.status === "Completed" ? "disabled:" : ""
                            }
                          >
                            <a>Working</a>
                          </li>
                          <li
                            onClick={() =>
                              handleStatus(serv._id, serv.status, "Completed")
                            }
                          >
                            <a>Completed</a>
                          </li>
                        </ul>
                      </details>
                    </td>
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

export default ServiceTodo;
