import React from 'react'

const Activities = () => {

    const activities = [
      { name: "Meditation", icon: "moon.svg" },
      { name: "Therapy", icon: "chart.svg" },
      { name: "Natural Beauty", icon: "heart-circle.svg" },
      { name: "Massages", icon: "emoji-happy.svg" },
    ]
  return (
    <div className="grid grid-cols-1 gap-y-8 gap-x-3 md:grid-cols-2">
      {activities.map((activity) => (
        <div className="flex flex-col gap-y-2">
          <img src={activity.icon} alt="" className="h-[43px] w-[43px] object-cover" />
          <h3 className="font-bold text-2xl">{activity.name}</h3>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>
          <button className="w-fit">Learn more</button>
        </div>
      ))}
    </div>
  );
}

export default Activities