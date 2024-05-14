import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddService = () => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const photo = form.photo.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const providerPhoto = form.providerPhoto.value;
    const newService = {
      photo,
      serviceArea,
      serviceName,
      price,
      description,
      providerName,
      providerEmail,
      providerPhoto,
    };

    fetch("http://localhost:5000/service", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added Item Successfully");
          navigate("/");
        }
      });
  };
  return (
    <div className="flex justify-center items-center">
      <Helmet>
        <title>RepairRovers - Add Service</title>
      </Helmet>
      <form
        onSubmit={handleAddService}
        className="p-4 md:p-6 lg:p-6  md:w-1/2 lg:w-1/2 mx-auto bg-[#FFFFFF] rounded-xl my-24"
      >
        <div className="mb-4">
          <h2 className="text-3xl font-bold text-[#000000d6]">Add Service</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div>
            <label htmlFor="">Photo URL</label>
            <br />
            <input
              type="text"
              placeholder="photo url"
              name="photo"
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label htmlFor="">Service Name</label>
            <br />
            <input
              type="text"
              placeholder="service name"
              name="serviceName"
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label htmlFor="">Price</label>
            <br />
            <input
              type="number"
              placeholder="price"
              name="price"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="">Service Area</label>
            <br />
            <input
              type="text"
              placeholder="service area"
              name="serviceArea"
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label htmlFor="">Description</label>
            <br />
            <input
              type="text"
              placeholder="description"
              name="description"
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label htmlFor="">Provider Name</label>
            <br />
            <input
              type="text"
              placeholder="provider name"
              defaultValue={user.displayName}
              name="providerName"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label htmlFor="">Provider Email</label>
            <br />
            <input
              type="email"
              placeholder="provider email"
              defaultValue={user.email}
              name="providerEmail"
              className="input input-bordered w-full "
            />
          </div>

          <div>
            <label htmlFor="">Provider Photo</label>
            <br />
            <input
              type="text"
              placeholder="provider photo"
              defaultValue={user.photoURL}
              name="providerPhoto"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <input
          className="btn mt-4 bg-[#000000db] w-full text-white"
          type="submit"
          value="Add Service"
        />
      </form>
    </div>
  );
};

export default AddService;
