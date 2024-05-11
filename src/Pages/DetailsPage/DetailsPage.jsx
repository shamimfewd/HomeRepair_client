
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const loadedData = useLoaderData();
  //   const [datas, setDatas] = useState(loadedData);

  const { id } = useParams();

  const currentItem = loadedData.find((serv) => serv._id === id);

  console.log(currentItem);

  const {
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
    <div>
        <Helmet>
          <title>RepairRovers - Service Details</title>
        </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl h-[30rem]">
        <figure>
          <img
            className=" object-cover"
            src={photo}
            alt="image"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
