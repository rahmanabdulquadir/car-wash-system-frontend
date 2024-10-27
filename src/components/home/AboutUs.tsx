import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  skills: string[];
  linkedin: string;
  twitter: string;
  facebook: string;
}

const AboutUs: React.FC = () => {
  const team: TeamMember[] = [
    {
      name: "Michael Brook",
      role: "CEO & Founder",
      image:
        "https://plus.unsplash.com/premium_photo-1664475101530-066cc6ebca4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      bio: "Michael is a visionary leader with over 20 years in the automotive industry.",
      skills: ["Leadership", "Strategy", "Customer Relations"],
      linkedin: "https://linkedin.com/in/michael",
      twitter: "https://twitter.com/michael",
      facebook: "https://facebook.com/michael",
    },
    {
      name: "Christina Kim",
      role: "Product Manager",
      image:
        "https://media.istockphoto.com/id/1474415010/photo/professional-male-technician-checking-and-repairing-machinery.jpg?s=612x612&w=0&k=20&c=kFSqYkJ_MReAVx4uCuLhqsFN1APzPKmtwImtyFfgYIo=",
      bio: "Christina oversees product strategy with a focus on quality and innovation.",
      skills: ["Product Strategy", "Team Management", "Customer Satisfaction"],
      linkedin: "https://linkedin.com/in/christina",
      twitter: "https://twitter.com/christina",
      facebook: "https://facebook.com/christina",
    },
    {
      name: "Will Jack",
      role: "Managing Director",
      image:
        "https://media.istockphoto.com/id/1965297713/photo/happy-mechanic-using-smart-phone-while-working-in-a-repair-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSgIj64QuyE3ZiSEl3tGEoxzH4GFL9O18lh1aqXx48c=",
      bio: "Will excels in operations and customer experience.",
      skills: ["Operations", "Customer Service", "Logistics"],
      linkedin: "https://linkedin.com/in/will",
      twitter: "https://twitter.com/will",
      facebook: "https://facebook.com/will",
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Team Section */}
        <div>
          <h3 className="text-3xl font-semibold text-center text-green-700 mb-8">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden group p-5 transition-all duration-500 ease-out transform hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200 shadow-md transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <h4 className="text-lg font-bold text-gray-800 text-center">
                  {member.name}
                </h4>
                <p className="text-sm text-gray-500 text-center mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm text-center mb-4">
                  {member.bio}
                </p>

                {/* Skills Section */}
                <ul className="text-gray-600 text-xs text-center mb-4">
                  {member.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 m-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="text-gray-600 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-600 hover:text-blue-400 transition-colors duration-300 ease-in-out"
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a
                    href={member.facebook}
                    className="text-gray-600 hover:text-blue-700 transition-colors duration-300 ease-in-out"
                  >
                    <FaFacebook size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
