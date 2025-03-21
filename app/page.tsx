import Footer from "@/components/Footer";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button"
import { MdOutlineTravelExplore } from "react-icons/md";
import Image from "next/image";


const Home = () => {

  const rooms = [
    { name: "Sigiriya Rock", price: "Day/night", img: "/assets/sigiriya.jpg" },
    { name: "Pidurangala Rock", price: "Day/night", img: "/assets/piduranagala.jpeg" },
    { name: "Udawalawa National Park", price: "Day/night", img: "/assets/udawalawa.jpeg" },
    { name: "Arugam Bay", price: "Day/night", img: "/assets/arugambay.jpeg"},
  ];
  const images = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  ];

  return (
                <><section className="bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb)` }}>
        {/*<div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
        <div className="container mx-auto pt-72 px-4 h-full flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Explore the Ceylon with Us
          </h1>
          <p className="text-lg md:text-xl mb-8 text-center px-4">
            Find our perfect holiday packages.
          </p>
              

          <div className="mb-8 xl:mb-20">
            <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-black rounded-full flex justify-center items-center text-black text-base hover:bg-primary hover:text-accent hover:trasition-all duration-500" />
          </div>

          {/*<div className="flex flex-col xl:flex-row items-center gap-8">
          <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 border border-white rounded-ful justify-center text-white text-base hover:bg-white hover:text-primary hover:trasition-all duration-500">
              <MdOutlineTravelExplore href="/contact" className="text-xl" />
              <span>See More ...</span>
          </Button>
          </div>*/}

        </div>

      </section>
      
      {/*<section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
          Featured Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
              <img
                src={`https://picsum.photos/400/300?random=${i}`}
                alt="Destination"
                className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-semibold mb-2">Destination {i + 1}</h3>
                <p className="text-sm md:text-base text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <button className="text-green-600 hover:text-green-700 font-semibold text-sm md:text-base">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>*/}
      
      <section id="rooms" className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">FEATURED DESTINATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.name} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <Image src={room.img} alt={room.name} width={400} height={300} className="w-full h-48 object-cover" />
              {/*<img src={room.img} alt={room.name} className="w-full h-48 object-cover" />*/}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{room.name}</h3>
                <p className="text-gray-600">{room.price}</p>
                <a href="/contact">
                <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Book Now</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative bg-gray-100 py-16 overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 bg-white opacity-90">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#f7f7f7"
            d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,117.3C672,96,768,96,864,106.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 text-center z-10">
        {/* Title and Subtitle */}
        <h2 className="text-2xl md:text-3xl text-primary font-bold text-center mb-4 md:mb-4">ELLA SRILANKA</h2>
        <p className="text-lg text-gray-600 mb-8">WHERE THE MOUNTAIN MEETS THE INDIAN OCEAN</p>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Image
                    src="https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-train-960x641.jpg.webp"
                    alt="nine arch bright"
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="https://destinationlesstravel.com/wp-content/uploads/2019/05/DSC_9675-2-1024x684.jpg.webp"
                    alt="ella"
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                  <Image
                    src="https://destinationlesstravel.com/wp-content/uploads/2020/04/Ella-rock-960x640.jpg.webp"
                    alt="ella rock"
                    width={800}
                    height={500}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
          {/*<img
            src="https://via.placeholder.com/400x300?text=Leopard+1"
            alt="Leopard"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Elephant"
            alt="Elephant"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://via.placeholder.com/400x300?text=Leopard+2"
            alt="Leopard"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />*/}
        </div>{/* Description */}
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          {"Located in the vast tea plantations of Sri Lanka’s cultural center, Ella is one of the most popular places to visit in Sri Lanka. Because of this, Ella was at the top of our Sri Lanka bucket list, and even with such high expectations, we weren’t disappointed! So you can not only see the famous bridge but also experience everything else this town has to offer. our time in Ella was fun and memorable."}
        </p>

        {/* Button */}
        <a
          href="/contact"
          className="inline-block bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition duration-300"
        >
          TRAVEL EXCURSIONS
        </a>
      </div>
    </section>

    <section id="gallery" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-6 md:mb-8">INSTAGRAM</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/*{images.map((img, index) => (
            <img key={index} src={img} alt={`Gallery ${index}`} className="w-full h-48 object-cover rounded-lg" />
          ))}*/}
          {images.map((img, index) => (
            <Image key={index} src={img} alt={`Gallery ${index}`} width={400} height={300} className="w-full h-48 object-cover rounded-lg" />
          ))}

        </div>
      </div>
    </section>
    
    
    {/* Footer */}
    <Footer />
    </>
  )
}

export default Home;

