import CarouselImage1 from "../assets/hero/hero-1.jpg";
import CarouselImage2 from "../assets/hero/hero-3.jpg";
import CarouselImage3 from "../assets/hero/hero-4.jpg";
import CarouselImage4 from "../assets/hero/hero-5.jpg";
import { FaBuilding } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaCarAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import Animation1 from "../assets/animation/animation1.webp";
import luxury from "../assets/catergories/luxury-mercedez-benz.png";
import business from "../assets/catergories/business2.png";
import pickup from "../assets/catergories/raps1.jpg";
import bridal from "../assets/catergories/bride-car.png";
import family from "../assets/catergories/nissan-car.png";
import casual from "../assets/catergories/suzuki-cars.png";
import { Carousel } from "flowbite-react";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3 absolute z-10 mt-20  text-white">
        <div></div>
        <div>
          <p className="text-7xl font-bold">CarGo:</p>
          <p className="text-3xl font-bold">
            Where Every Mile Fees Extraordinary
          </p>
          <p className="text-xl">
            Fuel your wanderlust with our diverse fleet. Discover, book, and
            embark on unforgettable journeys with confidence and convenience at
            your fingertips
          </p>
        </div>
        <div></div>
      </div>

      <div className="h-80 sm:h-68 md:h-96 w-full ">
        <Carousel>
          <img alt="..." src={CarouselImage1} />
          <img alt="..." src={CarouselImage2} />
          <img alt="..." src={CarouselImage3} />
          <img alt="..." src={CarouselImage4} />
        </Carousel>
      </div>
      <div
        id="filter"
        className="grid w-3/4 mx-auto rounded-lg bg-cyan-600  z-50 relative bottom-10 px-5 py-5"
      >
        <div className="grid lg:grid-cols-7 gap-3 justify-center md:p-0 md:grid-cols-3">
          <div className="flex bg-white p-1 rounded-xl">
            <FaBuilding size="2rem" className="mt-1" />
            <form action="">
              <select
                className="rounded-lg p-1 flex bg-white border-none mt-1"
                id="location"
                name="location"
                placeholder="Pick-up Branch"
              >
                <option disabled selected value="">
                  Pick-up Branch
                </option>
                <option value="Manila">Manila</option>
                <option value="Pasay">Pasay</option>
                <option value="Pasig">Pasig</option>
                <option value="Makati">Makati</option>
              </select>
            </form>
          </div>
          <div className="rounded-lg p-1 flex bg-white">
            <div></div>
            <FaCalendarAlt size="2rem" />
            <input className="border-none rounded-lg" type="date"></input>
          </div>
          <div className="rounded-lg p-1 flex bg-white">
            <FaClock size="2rem" />
            <input className="border-none rounded-lg" type="time"></input>
          </div>
          <div className="rounded-lg p-1 flex bg-white">
            <FaCalendarAlt size="2rem" />{" "}
            <input className="border-none rounded-lg" type="date"></input>
          </div>
          <div className="rounded-lg p-1 flex bg-white">
            <FaClock size="2rem" />
            <input className="border-none rounded-lg" type="time"></input>
          </div>
          <div className="rounded-lg p-1 flex bg-white">
            <FaCarAlt size="2rem" />
            <form action="">
              <select
                className="rounded-lg p-1 flex bg-white border-none mt-1"
                id="location"
                name="location"
              >
                <option disabled selected value="">
                  Car Type
                </option>
                <option value="Manila">Manila</option>
                <option value="Pasay">Pasay</option>
                <option value="Pasig">Pasig</option>
                <option value="Makati">Makati</option>
              </select>
            </form>
          </div>
          <div className="rounded-lg p-1 bg-red-600 md:col-span-3 lg:col-span-1">
            <button className="flex px-7 p-1 font-bold">
              <FaSearch size="2rem" />
              <p>Search</p>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-5">
          <div className="flex justify-center gap-3">
            <FaCheck size="3rem" color="green" />
            <p className="text-center text-white text-3xl">No Hidden Charges</p>
          </div>
          <div className="flex justify-center gap-3">
            <FaCheck size="3rem" color="green" />
            <p className="text-center text-white text-3xl">24/7 Customer </p>
          </div>
          <div className="flex justify-center gap-3">
            <FaCheck size="3rem" color="green" />
            <p className="text-center text-white text-3xl">FREE Cancellation</p>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-3xl font-bold text-cyan-600">
          <p>WE OFFER</p>
        </div>
        <div className="grid grid-cols-3 mt-5 gap-5">
          <div className="text-center">
            <img
              className="rounded-lg justify-center h-80 w-50 ml-10"
              src={Animation1}
              alt=""
            />
            <p className="text-center text-3xl font-semibold text-cyan-600">
              Highly-Maintained Cars
            </p>
          </div>
          <div className="text-center">
            <img src="" alt="" />
            <p className="text-center text-3xl font-semibold text-cyan-600">
              Wide Variety of Cars Selection
            </p>
          </div>
          <div className="text-center">
            <img src="" alt="" />
            <p className="text-center text-3xl font-semibold text-cyan-600">
              24/7 Customer Support
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="text-center">dasdasd</div>
        <div className="text-center p-10 mt-10">
          <p className="text-center text-5xl mt-5 font-bold text-cyan-600">
            BOOK WITH US IN <br /> <span className="text-9xl">3</span> <br />{" "}
            EASY STEPS!
          </p>
          <p className="text-2xl py-2 px-20">
            Experience a seamless and hassle-free transaction with Cargo. From
            reservation to payment, we ensure a smooth journey, allowing you to
            focus on the road ahead
          </p>
          <button className="mt-5">
            <NavLink
              to="signin"
              className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
            >
              Sign Up Now
            </NavLink>
          </button>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="text-center text-4xl font-bold p-5 text-cyan-600 ">
          <h1>CAR CATERGORIES</h1>
        </div>
        <div className="grid lg:grid-cols-3 grid-rows-2 md:grid-cols-2 text-center">
          <div>
            <img
              className="static inline-block rounded-2xl"
              src={luxury}
              alt=""
            />
            <h1 className="text-3xl font-semibold">Luxury</h1>
            <p className="text-xl text-justify p-10">
              High-end vehicles with advanced engineering, elegant design,
              luxurious materials, cutting-edge technology, superior
              performance, and comfort.
            </p>
            <button className="mt-5">
              <NavLink
                to="luxury"
                className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
              >
                View Now
              </NavLink>
            </button>
          </div>
          <div>
            <img
              className="static inline-block rounded-2xl h-1/2"
              src={business}
              alt=""
            />
            <h1 className="text-3xl font-semibold">Business</h1>
            <p className="text-xl text-justify p-10">
              Reliable, comfortable, fuel-efficient vehicles for business
              purposes, with a range from compact sedans to luxury options.
            </p>
            <button className="mt-5">
              <NavLink
                to="business"
                className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
              >
                View Now
              </NavLink>
            </button>
          </div>
          <div>
            {" "}
            <img
              className="static inline-block rounded-2xl h-1/2"
              src={pickup}
              alt=""
            />
            <h1 className="text-3xl font-semibold">Pick-up</h1>
            <p className="text-xl text-justify p-10">
              Rugged trucks with open cargo areas, suitable for off-road driving
              and hauling heavy loads in different sizes.
            </p>
            <button className="mt-5">
              <NavLink
                to="pickup"
                className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
              >
                View Now
              </NavLink>
            </button>
          </div>
          <div>
            {" "}
            <img
              className="static inline-block rounded-2xl h-1/2"
              src={bridal}
              alt=""
            />
            <h1 className="text-3xl font-semibold">Bridal</h1>
            <p className="text-xl text-justify p-10">
              Luxurious and elegant vehicles, matching the wedding style, for
              transporting the bride, groom, and wedding party.
            </p>
            <button className="mt-5">
              <NavLink
                to="bridal"
                className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
              >
                View Now
              </NavLink>
            </button>
          </div>
          <div>
            {" "}
            <img
              className="static inline-block rounded-2xl h-1/2"
              src={family}
              alt=""
            />
            <h1 className="text-3xl font-semibold">Family</h1>
            <p className="text-xl text-justify p-10">
              Larger vehicles with sleeping quarters, bathrooms, kitchens, and
              entertainment systems, providing comfortable accommodations for
              long-distance travel.
            </p>
            <button className="mt-5">
              <NavLink
                to="family"
                className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
              >
                View Now
              </NavLink>
            </button>
          </div>
          <div>
            {" "}
            <img
              className="static inline-block rounded-2xl h-1/2"
              src={casual}
              alt=""
            />
            <h1 className="text-3xl font-semibold">Casual</h1>
            <p className="text-xl text-justify p-10">
              Practical, comfortable vehicles for everyday use, ranging from
              compact cars to SUVs, known for fuel efficiency and reliability.
            </p>
            <button className="mt-5">
              <NavLink
                to="casual"
                className="bg-red-700 p-2 px-10 rounded-xl text-white font-semibold text-2xl"
              >
                View Now
              </NavLink>
            </button>
          </div>
        </div>
      </div>

      <div>
        <div className="text-center text-4xl font-bold p-5 text-cyan-600 ">
          TESTIMONIALS
        </div>
        <div></div>
      </div>
    </div>
  );
};
