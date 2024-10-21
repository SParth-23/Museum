import React from 'react'

function MeetOurTeam() {
    const teamMembers = [
        {
          id: 1,
          name: "Jane Doe",
          role: "Director",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 2,
          name: "John Smith",
          role: "Curator",
          image: "https://via.placeholder.com/300",
        },
        {
          id: 3,
          name: "Emily Johnson",
          role: "Education Coordinator",
          image: "https://via.placeholder.com/300",
        },
      ];
  return (
    <div>
         <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gray-50 p-4 rounded-lg shadow-md"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default MeetOurTeam