import React from 'react'

const Activities = () => {

    const activities = [
        "Meditation", "Therapy", "Natural Beauty", "Massages"
    ]
  return (
    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-2">
      {activities.map((activity) => (
        <div className="flex flex-col gap-y-4">
          <img src="" alt="" className="h-[43px] w-[43px] object-cover" />
          <h3 className="font-bold text-2xl">{activity}</h3>
          <p>
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