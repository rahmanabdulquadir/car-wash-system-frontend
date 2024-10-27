import React from "react";

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
  skills?: string[];
  linkedin: string;
  twitter: string;
  facebook: string;
  contact: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Michael Brook",
    role: "CEO & Founder",
    image: "https://plus.unsplash.com/premium_photo-1664475101530-066cc6ebca4e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bio: "Michael is a visionary leader with over 20 years in the automotive industry.",
    skills: ["Leadership", "Strategy", "Customer Relations"],
    linkedin: "https://linkedin.com/in/michael",
    twitter: "https://twitter.com/michael",
    facebook: "https://facebook.com/michael",
    contact: "mailto:michael@carwash.com",
  },
  {
    name: "Christina Kim",
    role: "Product Manager",
    image: "https://media.istockphoto.com/id/1474415010/photo/professional-male-technician-checking-and-repairing-machinery.jpg?s=612x612&w=0&k=20&c=kFSqYkJ_MReAVx4uCuLhqsFN1APzPKmtwImtyFfgYIo=",
    bio: "Christina oversees product strategy with a focus on quality and innovation.",
    skills: ["Product Strategy", "Team Management", "Customer Satisfaction"],
    linkedin: "https://linkedin.com/in/christina",
    twitter: "https://twitter.com/christina",
    facebook: "https://facebook.com/christina",
    contact: "mailto:christina@carwash.com",
  },
  {
    name: "Will Jack",
    role: "Managing Director",
    image: "https://media.istockphoto.com/id/1965297713/photo/happy-mechanic-using-smart-phone-while-working-in-a-repair-shop.webp?a=1&b=1&s=612x612&w=0&k=20&c=aSgIj64QuyE3ZiSEl3tGEoxzH4GFL9O18lh1aqXx48c=",
    bio: "Will excels in operations and customer experience.",
    skills: ["Operations", "Customer Service", "Logistics"],
    linkedin: "https://linkedin.com/in/will",
    twitter: "https://twitter.com/will",
    facebook: "https://facebook.com/will",
    contact: "mailto:will@carwash.com",
  },
];

const TeamSection: React.FC = () => (
  <div className="p-8 bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen">
    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Team Members</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 flex flex-col justify-between"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-600 font-medium mb-2">{member.role}</p>
            <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
            <div>
              <h4 className="text-gray-600 font-semibold mb-1">Skills:</h4>
              <ul className="flex flex-wrap gap-2">
                {member.skills?.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="px-3 py-1 text-xs text-white bg-black rounded-full"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="p-4 bg-gray-100 flex justify-around items-center">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-500">
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
            <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-300">
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-600">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href={member.contact} className="text-gray-700 hover:text-gray-500">
              <i className="fas fa-envelope fa-lg"></i>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TeamSection;
