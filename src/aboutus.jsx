import { useState } from "react";
import "./aboutus.css";
import AUBackGROUND from "./Image/image_about-bg.png";
import AUPart2IMG from "./Image/image_about_1.png";
import AUPart3IMG from "./Image/image_ourStory_1.png";
import AUPart4IMG from "./Image/ourChef.png";
import Employer1 from "./Image/ourTeam_1.png";
import Employer2 from "./Image/ourTeam_2.png";
import Employer3 from "./Image/ourTeam_3.png";
import facebook from "./Image/facebook.png";
import twitter from "./Image/twitter.png";
import insta from "./Image/instagram.png";
import linkedin from "./Image/linkedin.png";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="aboutus">
        {/* Part 1 */}
        <div className="AUpart1">
          <img src={AUBackGROUND} alt="" className="backgroundAUPrt1" />
          <h1 className="AUpart1Title">About Us</h1>
          <h1 className="AUpart1Heading">
            Read our Story, How we started and about the Team
          </h1>
        </div>
        {/* part2 */}
        <div className="AUpart2">
          <img src={AUPart2IMG} alt="" className="AUPart2IMG" />
          <h1 className="AUPart2OP">
            Opaleye yellowtail snapper, velvet catfish, graveldiver banded
            killifish, Old World rivuline catalufa eagle ray Moorish idol.
            Herring smelt barbeled dragonfish, tommy ruff.
          </h1>
          <h1 className="AUPart2Body">
            Queen danio velvet catfish Sacramento blackfish, bullhead shark,
            Colorado squawfish Russian sturgeon clown triggerfish swamp-eel
            paradise fish. Hake cookie-cutter shark silver carp hawkfish snipe
            eel armorhead catfish, moray eel silverside! Bluegill toadfish,
            orangespine unicorn fish. Manta Ray Moorish idol
          </h1>
        </div>
        {/* Part 3 */}
        <div className="AUPart3">
          <div className="AUPart3Title">OUR STORY</div>
          <div className="AUPart3Body">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passage
          </div>
          <img src={AUPart3IMG} alt="" className="AUPart3IMG" />
        </div>
        {/* Part 4 */}
        <div className="AUPart4">
          <div className="AUPart4Title">TASTY AND CRUNCHY</div>
          <div className="AUPart4Heading">Our Chef</div>
          <div className="AUPart4Body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidition ullamco laboris nisi ut aliquip ex ea
            commodo condor consectetur adipiscing elit, sed do eiusmod tempor
            incidition ullam.
          </div>
          <NavLink to='/items' className="AUPart4Button">VIEW OUR ALL MANU</NavLink>
          <img src={AUPart4IMG} alt="" className="AUPart4IMG" />
        </div>
        {/* Part 5 */}
        <div className="AUPart5">
          <h1 className="AUPart5Title">SPECIAL SERVICE</h1>
          <h1 className="AUPart5Heading">
            What Special services we are offering now
          </h1>
          <div className="SpecialService">
            <div className="SpecialServiceItem">
              <h1 className="SSItemTitle">Birthday Party</h1>
              <h1 className="SSItemBody">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h1>
            </div>
            <div className="SpecialServiceItem">
              <h1 className="SSItemTitle">Wedding Party</h1>
              <h1 className="SSItemBody">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </h1>
            </div>
          </div>

          <div className="slider1">
            <div className="sld" id="slider2"></div>
            <div className="sld" id="slider1"></div>
            <div className="sld" id="slider3"></div>
            <div className="sld" id="slider4"></div>
          </div>
        </div>
        {/* Prt6 */}
        <div className="AUPart6">
          <div className="AUPart6Title">OUR TEAM</div>
          <div className="AUPart6Heading">
            The Hardworking Team behind the restaurant
          </div>
          <div className="OURTEAM">
            <div className="worker">
              <img src={Employer1} alt="" className="EmployerAvatar" />
              <div className="Employer">
                <h1 className="EmployerName">Brain Adams</h1>
                <h1 className="EmployerMessage">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna. Lorem
                  ipsum dolor sit amet
                </h1>
              </div>
              <div className="socialMedia1">
                <img src={twitter} alt="" className="twitter" />
                <img src={facebook} alt="" className="facebook" />
                <img src={insta} alt="" className="insta" />
                <img src={linkedin} alt="" className="linkedin" />
              </div>
            </div>
            <div className="worker">
              <img src={Employer2} alt="" className="EmployerAvatar" />
              <div className="Employer">
                <h1 className="EmployerName">Jhon Khan</h1>
                <h1 className="EmployerMessage">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna. Lorem
                  ipsum dolor sit amet
                </h1>
              </div>
              <div className="socialMedia1">
                <img src={twitter} alt="" className="twitter" />
                <img src={facebook} alt="" className="facebook" />
                <img src={insta} alt="" className="insta" />
                <img src={linkedin} alt="" className="linkedin" />
              </div>
            </div>
            <div className="worker">
              <img src={Employer3} alt="" className="EmployerAvatar" />
              <div className="Employer">
                <h1 className="EmployerName">Jessica biel</h1>
                <h1 className="EmployerMessage">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna. Lorem
                  ipsum dolor sit amet
                </h1>
              </div>
              <div className="socialMedia1">
                <img src={twitter} alt="" className="twitter" />
                <img src={facebook} alt="" className="facebook" />
                <img src={insta} alt="" className="insta" />
                <img src={linkedin} alt="" className="linkedin" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
