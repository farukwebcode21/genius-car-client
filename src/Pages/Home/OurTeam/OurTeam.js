import React from "react";
import teamMember_1 from "../../../assets/images/team/1.jpg";
import teamMember_2 from "../../../assets/images/team/2.jpg";
import teamMember_3 from "../../../assets/images/team/3.jpg";

const OurTeam = () => {
  return (
    <div>
      <div className="container text-center mb-16 ">
        <h4 className="text-orange-700 text-xl font-bold mb-5">Team</h4>
        <h2 className="font-bold text-4xl mb-5">Meet Our Team</h2>
        <p className="font-normal text-base leading-7">
          the majority have suffered alteration in some form, by injected
          humour, or randomised
          <br /> words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teamMember_1} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="card-actions">
              <tesing>1</tesing>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teamMember_2} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={teamMember_3} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Car Engine Plug</h2>
            <p>Engine Expert</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
