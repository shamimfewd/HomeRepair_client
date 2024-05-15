import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const OurTeam = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("/teamData.json")
      .then((res) => res.json())
      .then((data) => setMembers(data));
  });
  return (
    <div className="my-24">
      <div className="mb-24 text-center">
        <h2 className="text-3xl font-bold text-[#000000d6]">Our Team</h2>
      </div>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {members.map((member, index) => (
          <div key={index}>
            <div className="card h-[30rem] bg-transparent  ">
              <figure>
                <img
                  className="border-2 border-green-400 w-[15rem] h-[15rem] rounded-full object-cover"
                  src={member.image}
                  alt="img"
                />
              </figure>
              <div className="card-body text-center mx-auto">
                <h2 className="text-3xl  text-center">{member.name}</h2>
                <p>{member.description}</p>
                <div className="flex justify-evenly -mt-4 cursor-pointer">
                  <a href="https://www.facebook.com/">
                    <FaFacebook className="text-2xl text-[#0F8FEB]" />
                  </a>
                  <a href="https://twitter.com/">
                    <FaTwitter className="text-2xl text-[#1C96E9]" />
                  </a>
                  <a href="https://www.instagram.com/">
                    <FaInstagram className="text-2xl text-[#BC008F]" />
                  </a>
                  <a href="https://bd.linkedin.com/">
                    <FaLinkedin className="text-2xl text-[#0270AD]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
