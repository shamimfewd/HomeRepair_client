import { Helmet } from "react-helmet";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const loadedData = useLoaderData();
  //   const [datas, setDatas] = useState(loadedData);

  const { id } = useParams();

  const currentItem = loadedData.find((serv) => serv._id === id);
  // if (user?.email === providerEmail) return toast.warning("not permit");
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
  } = currentItem;
  return (
    <div className="bg-[#F5F5F5] py-24 ">
      <Helmet>
        <title>RepairRovers - Service Details</title>
      </Helmet>
      <div className="  max-w-7xl mx-auto">
        <div className="card lg:card-side bg-base-100 shadow-xl h-[30rem]">
          <figure>
            <img className=" object-cover" src={photo} alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{serviceName}</h2>
            <div>
              <img
                className="w-10 h-10 rounded-full"
                src={providerPhoto}
                alt=""
              />
              <h3>{providerName}</h3>
              <p>Location: {serviceArea}</p>
            </div>

            <p>Price: {price}</p>
            <hr />
            <p>{description}</p>
            <div className="card-actions justify-end">
              <Link to={`/bookingPage/${_id}`}>
                <button className="btn btn-primary">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
