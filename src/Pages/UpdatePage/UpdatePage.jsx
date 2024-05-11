import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";

const UpdatePage = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);

  const { user } = useContext(AuthContext);

  const {
    _id,
    photo,
    serviceArea,
    serviceName,
    price,
    description,
    providerName,
    providerEmail,
    providerPhoto,
  } = loadedData;

  const navigate = useNavigate();

  const handleUpdateService = (e) => {
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
    const updatedService = {
      photo,
      serviceArea,
      serviceName,
      price,
      description,
      providerName,
      providerEmail,
      providerPhoto,
    };

    fetch(`http://localhost:5000/item/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Added Item Successfully");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleUpdateService}>
          <label htmlFor="">Photo URL</label>
          <br />
          <input
            type="text"
            placeholder="photo url"
            name="photo"
            defaultValue={photo}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Service Name</label>
          <br />
          <input
            type="text"
            placeholder="service name"
            name="serviceName"
            defaultValue={serviceName}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Price</label>
          <br />
          <input
            type="number"
            placeholder="price"
            name="price"
            defaultValue={price}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Service Area</label>
          <br />
          <input
            type="text"
            placeholder="service area"
            name="serviceArea"
            defaultValue={serviceArea}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Description</label>
          <br />
          <input
            type="text"
            placeholder="description"
            name="description"
            defaultValue={description}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Provider Name</label>
          <br />
          <input
            type="text"
            placeholder="provider name"
            defaultValue={user.displayName}
            name="providerName"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Provider Email</label>
          <br />
          <input
            type="email"
            placeholder="provider email"
            defaultValue={user.email}
            name="providerEmail"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <label htmlFor="">Provider Photo</label>
          <br />
          <input
            type="text"
            placeholder="provider photo"
            defaultValue={user.photoURL}
            name="providerPhoto"
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          <br />
          <input className="btn" type="submit" value="Add Service" />
        </form>
      </div>
    </div>
  );
};

export default UpdatePage;
