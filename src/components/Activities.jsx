import React from "react";

const Activities = () => {
  const activities = [
    { name: "Meditation", icon: "moon.svg" },
    { name: "Therapy", icon: "chart.svg" },
    { name: "Natural Beauty", icon: "heart-circle.svg" },
    { name: "Massages", icon: "emoji-happy.svg" },
  ];

  return (
    <section className="grid grid-cols-1 gap-y-8 gap-x-3 md:grid-cols-2 md:px-[100px] lg:px-0">
      {activities.map((activity, index) => (
        <article key={index} className="flex flex-col gap-y-2">
          <img
            src={activity.icon}
            alt={`${activity.name} Icon`}
            className="h-[43px] w-[43px] object-cover"
          />
          <h3 className="font-bold text-2xl">{activity.name}</h3>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <a
            href="#" // Replace with actual links
            className="w-fit bg-black text-white py-2 px-4 rounded-md hover:bg-white hover:ring-1 hover:ring-black hover:text-black transition duration-300 ease-in-out"
          >
            Learn more
          </a>
        </article>
      ))}
    </section>
  );
};

export default Activities;
