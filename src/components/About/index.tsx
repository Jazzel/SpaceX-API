import React from "react";
import Footer from "../Footer";
import Navigation from "../Header";

const About = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <br />
      <br />
      <section className="mt-5 pt-5" style={{ width: "90%", margin: "auto" }}>
        <div style={{ textAlign: "center", color: "white" }}>
          <h1 style={{ fontWeight: "bolder" }}>About</h1>
          <br />
          <h4>
            Space Exploration Technologies Corp., trading as SpaceX, is an
            American aerospace manufacturer and space transportation services
            company headquartered in Hawthorne, California. It was founded in
            2002 by Elon Musk with the goal of reducing space transportation
            costs to enable the colonization of Mars.SpaceX has developed
            several launch vehicles, the Starlink satellite constellation, the
            Dragon cargo spacecraft, and flown humans to the International Space
            Station on the Crew Dragon Demo-2. SpaceX's achievements include the
            first privately funded liquid-propellant rocket to reach orbit
            (Falcon 1 in 2008),[12] the first private company to successfully
            launch, orbit, and recover a spacecraft (Dragon in 2010), the first
            private company to send a spacecraft to the International Space
            Station (Dragon in 2012),[13] the first propulsive landing for an
            orbital rocket (Falcon 9 in 2015), the first reuse of an orbital
            rocket (Falcon 9 in 2017), the first private company to launch an
            object into orbit around the Sun (Falcon Heavy's payload of a Tesla
            Roadster in 2018), and the first private company to send astronauts
            to the International Space Station (SpaceX Crew Dragon Demo-2
            Mission in 2020).[14] SpaceX has flown 20[15] cargo resupply
            missions to the International Space Station (ISS) under a
            partnership with NASA,[16] as well as an uncrewed demonstration
            flight of the human-rated Dragon 2 spacecraft (Crew Demo-1) on March
            2, 2019, and the first crewed Dragon 2 flight on May 30, 2020.[14]
          </h4>
        </div>
      </section>
      <br />
      <Footer />
    </div>
  );
};

export default About;
