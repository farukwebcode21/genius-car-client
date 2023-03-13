import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import watch from "../../../assets/icons/watch.png";
import call from "../../../assets/icons/call.png";
import location from "../../../assets/icons/location.png";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-6">
        <p className="text-2xl font-bold text-orange-400">Services</p>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised<br></br> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-wide text-orange-600 btn-outline">
          More Services
        </button>
      </div>
      <div className="flex justify-evenly bg-black my-4 h-44 text-white rounded-md">
        <div className="flex py-14 gap-36">
          <div className="flex">
            <img className="h-14 mx-4" src={watch} alt="" />
            <div className="leading-8">
              <p>We are open monday-friday</p>
              <p>7:00 am-9:00 pm</p>
            </div>
          </div>
          <div className="flex">
            <img className="h-14 mx-4" src={call} alt="" />
            <div className="leading-8">
              <p>Have a question?</p>
              <p>+2246 251 2658</p>
            </div>
          </div>
          <div className="flex">
            <img className="h-14 mx-4" src={location} alt="" />
            <div className="leading-8">
              <p>Need a repair? our address</p>
              <p>Liza Street, New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
