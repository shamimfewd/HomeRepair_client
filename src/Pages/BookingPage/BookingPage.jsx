import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const BookingPage = () => {
  const loadedData = useLoaderData();
  const { user } = useContext(AuthContext);

  const { id } = useParams();
  const currentService = loadedData.find((serv) => serv._id === id);
  const { _id, price, serviceName, photo, providerEmail, providerName } =
    currentService;

  const handlePurchase = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.serviceId.value;
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
    const status = form.status.value;
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
          alert("added");
        }
      });
  };

  return (
    <div>
      <h1>booking page{loadedData.length}</h1>
      <form onSubmit={handlePurchase}>
        <input type="text" name="serviceId" disabled defaultValue={_id} />
        <br />
        <input
          type="text"
          name="serviceName"
          disabled
          defaultValue={serviceName}
        />
        <br />
        <input type="text" name="price" disabled defaultValue={price} />
        <br />
        <input type="text" name="photo" disabled defaultValue={photo} />
        <br />
        <input
          type="text"
          name="providerEmail"
          disabled
          defaultValue={providerEmail}
        />
        <br />
        <input
          type="text"
          name="providerName"
          disabled
          defaultValue={providerName}
        />
        <br />
        <input
          type="text"
          name="name"
          disabled
          defaultValue={user.displayName}
        />

        <br />
        <input type="text" name="email" disabled defaultValue={user.email} />

        <br />
        <input type="date" name="date" placeholder="date" />

        <br />
        <input type="text" name="status" placeholder="status" />
        <br />
        <input className="btn" type="submit" value="Purchase" />
      </form>
    </div>
  );
};

export default BookingPage;
