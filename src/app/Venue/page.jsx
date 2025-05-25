import Navbar from '@/components/Navbar';
import React from 'react';
import Footer from '@/components/Footer';

const Page = () => {
  return (
   <>
    <div className="w-full min-h-screen bg-[#e3f2fd] text-gray-800 px-4 sm:px-8 md:px-16 py-10 space-y-14  shadow-2xl">
       <Navbar/>
      {/* Venue Section */}
      <section className="text-center space-y-2 mt-9">
        <h1 className="text-xl font-semibold">
          Venue: <span className="text-blue-700">NIT PATNA CAMPUS</span>
        </h1>
        <p className="text-gray-600 text-base">
          Experience the vibrant city of Patna, the venue for <strong>WET-WAR2025</strong>.
        </p>
      </section>

      {/* About Patna */}
      <section className="space-y-2">
       
      <h2 className="text-2xl md:text-3xl font-semibold pl-4 border-l-4 border-blue-300 text-blue-400">
  <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">
    About Patna
  </span>
</h2>


        <p className="leading-relaxed text-justify">
          Patna is the capital and largest city of the state of Bihar in India and one of the oldest continuously inhabited places in the world. The original name of Patna was Pataliputra and its history makes a start from the century 600 B.C. Chandragupta Maurya made it his capital in the 4th century B.C. Thereafter the city lost its importance until Sherkhan Suri rose into power in the early 16th century A.D. The modern city of Patna is mainly on the southern bank of the river Ganges. The city also straddles the rivers Son, Gandak and Punpun. The city is approximately 35 kilometres (22 mi) in length and 16 to 18 kilometres (9.9 to 11.2 mi) wide.
        </p>
      </section>

      {/* Reaching Patna */}
      <section className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-semibold pl-4 border-l-4 border-blue-300 text-blue-400">
            <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">Reaching Patna</span></h2>
        <p className="leading-relaxed text-justify">
          Patna is well-connected to other parts of India and the world through air, rail, and road. Jaiprakash Narayan International Airport offers daily flights to major cities in India and some international destinations. The city also boasts extensive train services and computerized reservation facilities, with daily trains to cities like Delhi, Kolkata, and Chennai.
        </p>
      </section>

      {/* Reaching the Venue */}
      <section className="space-y-4">
         <h2 className="text-2xl md:text-3xl font-semibold pl-4 border-l-4 border-blue-300 text-blue-400">
            <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">Reaching the Venue</span></h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'From Jay Prakash Narayan International Airport',
              distance: '~8 km',
              time: '25–30 minutes',
              options: 'Taxi, Ola/Uber, Auto-rickshaws',
            },
            {
              title: 'From Patna Junction Railway Station',
              distance: '~3 km',
              time: '10–15 minutes',
              options: 'Auto-rickshaws, Taxi, Ola/Uber, Cycle-rickshaws',
            },
            {
              title: 'From Patliputra Bus Stand',
              distance: '~8 km',
              time: '30–45 minutes',
              options: 'Shared autos, Private taxi, Ola/Uber',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-60 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-blue-800">{item.title}</h3>
              <p><strong>Distance:</strong> {item.distance} | <strong>Time:</strong> {item.time}</p>
              <p><strong>Options:</strong> {item.options}</p>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-700 mt-2">
          <p><strong>Campus Location:</strong> NIT Patna, Ashok Rajpath, opposite Gandhi Ghat.</p>
          <p><strong>Tip:</strong> Mention “NIT Patna, Ashok Rajpath” when booking a cab.</p>
        </div>
      </section>

      {/* Weather Section */}
      <section className="space-y-2">
         <h2 className="text-2xl md:text-3xl font-semibold pl-4 border-l-4 border-blue-300 text-blue-400">
            <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">Weather in December</span></h2>
        <ul className="space-y-2 text-gray-800">
  {[
    { label: 'Temperature:', value: '20°C–25°C (day), 8°C–12°C (night)' },
    { label: 'Humidity:', value: 'Moderate to low' },
    { label: 'Rainfall:', value: 'Minimal' },
    { label: 'Clothing:', value: 'Light woolens for day, jackets or shawls for evening' },
    { label: 'Tip:', value: 'Layered clothing recommended' },
  ].map((item, i) => (
    <li
      key={i}
      className="relative pl-5 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-500 hover:text-blue-700 transition-colors"
    >
      <strong>{item.label}</strong> {item.value}
    </li>
  ))}
</ul>

      </section>

      {/* Places to Visit */}
      <section className="space-y-6">
    <h2 className="text-2xl md:text-3xl font-semibold pl-4 border-l-4 border-blue-300 text-blue-400">
    <span className="bg-blue-100/60 px-2 py-1 rounded-md inline-block">Places to Visit in Patna</span>
  </h2>
  <div className="grid gap-6 md:grid-cols-2">
    {[
      {
        title: '🏛️ Historical & Cultural Attractions',
        places: ['Golghar', 'Patna Museum & International Museum', 'Kumhrar', 'Agam Kuan', 'Gandhi Maidan'],
      },
      {
        title: '🕌 Religious Sites',
        places: ['Takht Sri Patna Sahib', 'Mahavir Mandir', 'Padri Ki Haveli'],
      },
      {
        title: '🌳 Parks & Riverfront',
        places: ['Eco Park (Rajdhani Vatika)', 'Ganga Riverfront (Ganga Pathway)'],
      },
      {
        title: '🛍️ Shopping & Local Food',
        places: ['Maurya Lok Complex', 'Boring Road & Patna Market'],
      },
    ].map((block, idx) => (
      <div
        key={idx}
        className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
      >
        <h3 className="font-semibold text-lg text-blue-800 mb-2">{block.title}</h3>
        <ul className="space-y-2">
  {block.places.map((place, i) => (
    <li
      key={i}
      className="relative pl-5 text-gray-800 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:rounded-full before:bg-blue-500 hover:text-blue-700 transition-colors"
    >
      {place}
    </li>
  ))}
</ul>

      </div>
    ))}
  </div>
  <p className="text-sm text-gray-600 italic text-justify">Bonus Tip: Most attractions are near NIT Patna and ideal for quick visits.</p>
</section>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
