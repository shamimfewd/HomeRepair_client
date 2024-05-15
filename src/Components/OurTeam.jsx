import { useEffect, useState } from "react";

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/teamData.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 max-w-7xl mx-auto">
      {members.map((member, index) => (
        <div key={index}>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={member.image}
                alt="img"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurTeam;
