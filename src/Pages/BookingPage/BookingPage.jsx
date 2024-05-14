import { useContext } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";
const BookingPage = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const currentService = loadedData.find((serv) => serv._id === id);
  const { _id, price, serviceName, photo, providerEmail, providerName } =
    currentService;

  const handlePurchase = (e) => {
    e.preventDefault();

    const form = e.target;
    const serviceId = _id;
    const photo = form.photo.value;
    const serviceName = form.serviceName.value;
    const price = form.price.value;
    // const serviceArea = form.serviceArea.value;
    // const description = form.description.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    // const providerPhoto = form.providerPhoto.value;
    const email = form.email.value;
    const name = form.name.value;
    const date = form.date.value;
    const status = "Pending";

    const bookedService = {
      serviceId,
      photo,
      email,
      name,
      //   serviceArea,
      serviceName,
      price,
      //   description,
      providerName,
      providerEmail,
      //   providerPhoto,
      date,
      status,
    };
    console.log(bookedService);
    fetch("http://localhost:5000/bookingData", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookedService),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Purchase Successfully");
          navigate("/bookedServices");
        }
      });
  };

  return (
    <div className="">
      <form
        onSubmit={handlePurchase}
        className=" p-6 w-1/2 mx-auto bg-[#FFFFFF] rounded-xl my-24"
      >
        <div className="grid grid-cols-2 gap-4 ">
          {/* <input type="text" name="serviceId" disabled defaultValue={_id} /> */}

          <div>
            <label htmlFor="">Service Name</label>
            <br />

            <input
              className="input w-full"
              type="text"
              name="serviceName"
              disabled
              defaultValue={serviceName}
            />
          </div>

          <div>
            <label htmlFor="">Service Price</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="price"
              disabled
              defaultValue={price}
            />
          </div>

          <div>
            <label htmlFor="">Service Photo</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="photo"
              disabled
              defaultValue={photo}
            />
          </div>
          <div>
            <label htmlFor="">Provider Email</label>
            <br />
            <input
              type="text"
              name="providerEmail"
              className="input w-full"
              disabled
              defaultValue={providerEmail}
            />
          </div>
          <div>
            <label htmlFor="">Provider Name</label>
            <br />
            <input
              type="text"
              name="providerName"
              className="input w-full"
              disabled
              defaultValue={providerName}
            />
          </div>
          <div>
            <label htmlFor="">Seller Name</label>
            <br />

            <input
              type="text"
              name="name"
              className="input w-full"
              disabled
              defaultValue={user.displayName}
            />
          </div>
          <div>
            <label htmlFor="">Seller Email</label>
            <br />
            <input
              type="text"
              className="input w-full"
              name="email"
              disabled
              defaultValue={user.email}
            />
          </div>

          <div>
            <label htmlFor="" className="">
              Date
            </label>
            <br />

            <input
              type="date"
              className="input w-full"
              name="date"
              placeholder="date"
            />
          </div>
        </div>
        <br />
        <input className="btn w-full" type="submit" value="Purchase" />
      </form>
    </div>
  );
};

export default BookingPage;
