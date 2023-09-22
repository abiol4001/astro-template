import React from 'react'

const Treatments = () => {

    const treatments = [
      {
        title: "Laser Treatment Consultation",
        image: "treatment1.png",
        content: "",
        price: 85,
        time: "3",
      },
      {
        title: "Cool Sculpting Consultation",
        image: "treatment2.png",
        content: "",
        price: 80,
        time: "3",
      },
      {
        title: "IPL Upper Chest",
        image: "treatment3.png",
        content: "",
        price: 75,
        time: "2",
      },
      {
        title: "Underarm Botox",
        image: "treatment4.png",
        content: "",
        price: 62,
        time: "1",
      },
      {
        title: "Laser Treatment Consultation",
        image: "treatment5.png",
        content: "",
        price: 70,
        time: "2",
      },
      {
        title: "Body Botox",
        image: "treatment6.png",
        content: "",
        price: 50,
        time: "1",
      },
    ];
  return (
    <div className="py-20">
      <div className="px-4 lg:px-20 flex justify-center items-center gap-x-10 gap-y-10 flex-wrap">
        {treatments.map((treatment) => (
          <div className="w-full lg:w-[400px] flex flex-col gap-y-3 gap-x-10 flex-shrink-0">
            <div className='w-full overflow-hidden'>
              <img
                src={treatment.image}
                alt=""
                className="h-[304px] w-full object-cover hover:scale-105 transition-all ease-in-out"
              />
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-lg">{treatment.title}</p>
              <div className="h-10 bg-gray-100 flex items-center justify-center text-sm px-2 w-fit">
                ${treatment.price} for {treatment.time} Hours
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <button class="w-fit ring-1 ring-black rounded-md px-4 py-2 hover:scale-105 transition-all">
              Book Now
            </button>
          </div>
        ))}
      </div>

      <div className="w-full mt-20 flex justify-center">
        <button class="w-fit ring-1 ring-black rounded-md px-4 py-2 hover:scale-105 transition-all mx-auto">
          View all
        </button>
      </div>
    </div>
  );
}

export default Treatments