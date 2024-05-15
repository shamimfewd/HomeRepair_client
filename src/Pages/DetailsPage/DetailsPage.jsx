import { Helmet } from "react-helmet";
import { Link,  useLoaderData, useParams } from "react-router-dom";

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
      <div className="max-w-7xl mx-auto">
        <div className="card flex lg:card-side bg-base-100 shadow-xl lg:h-[30rem]">
          <figure className="flex-1">
            <img
              className="bg-cover p-4  object-cover"
              src={photo}
              alt="image"
            />
          </figure>
          <div className="card-body flex-1">
            <div className="flex items-center gap-x-1 pt-6">
              <img
                className="w-10 h-10 rounded-full"
                src={providerPhoto}
                alt=""
              />
              <div className="flex gap-x-1">
                <h3>{providerName}</h3>
                <p className="font-bold">Location: {serviceArea}</p>
              </div>
            </div>
            <h2 className="card-title">{serviceName}</h2>
            <p>Price: $ {price}</p>
            <hr />
            <p>
              <span className="font-bold">Read:</span>
              {description}
            </p>
            <div className="card-actions justify-end">
              <Link to={"/"} className="btn bg-[#000d] mr-2  text-white">Go Back</Link>
              <Link to={`/bookingPage/${_id}`}>
                <button className="btn bg-[#3ACF87] text-white ">Book Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
