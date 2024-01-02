import React from "react";
import "./AboutUs.css";
import { FaHome } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoCutOutline } from "react-icons/io5";

function AboutUs() {
  return (
    <>
      <div className="about-main">
        <div className="about-title">Our Features</div>

        {/* card 1 */}

        <div className="about-card-1">
          <div className="about-card-1-left">
            <div className="card-1-heading">Hello!</div>
            <hr className="about-card-hr" />
            <div className="card-1-para">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              voluptatum maiores voluptatibus, repellat aliquid minus esse odit,
              voluptate aperiam ipsam eum dolorem recusandae nulla. Facilis,
              quia sapiente! Beatae nostrum ipsa placeat sit? Possimus quia hic
              ducimus nostrum blanditiis perferendis tempore consequatur fugiat
              deserunt perspiciatis ex vel architecto quam iure eaque nulla
              debitis, earum sapiente animi, numquam voluptatem eligendi! Quasi,
              a!
            </div>
          </div>
          <div className="about-card-1-right">
            <img
              className="card-1-image"
              src="https://dummyimage.com/1400x6100.png/5fa2dd/ffffff"
              alt=""
            />
          </div>
        </div>

        {/* card 2 */}

        <div className="about-card-2">
          <div className="about-card-2-left">
            <img
              className="card-2-image"
              src="https://dummyimage.com/1400x6100.png/5fa2dd/ffffff"
              alt=""
            />
          </div>
          <div className="about-card-2-right">
            <div className="card-2-heading">Puppies</div>
            <div className="card-2-heading-2">For Sale</div>
            <hr className="about-card-hr-2" />
            <div className="card-2-para">
              The puppies are 3 months old. Corgis are generally good with
              children and well-mannered in the home. Corgi is usually an
              exceptionally obedient dog.
            </div>
          </div>
        </div>

        {/* card 3 */}

        <div className="about-card-1">
          <div className="about-card-1-left">
            <div className="card-1-para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              nihil sequi aut aliquam, non quo aliquid aspernatur placeat
              officiis velit deleniti atque facere dolorum dolor quisquam
              adipisci. Pariatur, magnam quas.
            </div>
            <hr className="about-card-hr" />
            <div className="about-card-3-list">

            <div className="about-card-3-list-1">
              <div>
                <FaHome />
              </div>
              <div>
                <LiaCertificateSolid />
              </div>
              <div>
                <IoCutOutline />
              </div>
            </div>
            <div className="about-card-3-list-2">
              <div>273</div>
              <div>103</div>
              <div>325</div>
            </div>
            <div className="about-card-3-list-3">
              <div>Success Stories</div>
              <div>Sales</div>
              <div>Experience</div>
            </div>
          </div>
            </div>
          <div className="about-card-1-right">
            <img
              className="card-1-image"
              src="https://dummyimage.com/1400x6100.png/5fa2dd/ffffff"
              alt=""
            />
          </div>
        </div>

        {/* card 4 */}

        <div className="about-card-4">
          <div className="about-card-4-left">
            <div className="card-4-heading">Adopters</div>
            <div className="card-4-heading-2">Saying</div>
            <hr className="about-card-hr-2" />
            <div className="card-4-para">
              These are the most cute, kind and loving puppies in the world!
              Love the breed and love my babies very much! Thank you so much for
              your wonderful job!
            </div>
          </div>
          <div className="about-card-4-right">
            <img
              className="card-4-image"
              src="https://dummyimage.com/1400x6100.png/5fa2dd/ffffff"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
