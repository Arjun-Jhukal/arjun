import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";
import Link from "next/link";

import "./contact.scss";
import PhoneIcon from "@/Icons/Phone";
import MailIcon from "@/Icons/Mail";
import LocationIcon from "@/Icons/Location";
import UpworkIcon from "@/Icons/upwork";
export default function Contact() {
  return (
    <section className="contact py-[140px]" id="contact">
      <div className="container">
        {/* <div className="lg:grid grid-cols-2 lg:gap-12">
          <div className="col-span-1 mb-8">
            <h2 className="mb-8">Let&rsquo;s Connect</h2>
            <p className="text-[18px] mb-8">If you ever want to make some small talk you can find me on social media </p>
            <div className="flex justify-start items-center gap-6 social-links">
              <Link href={"https://github.com/Arjun-Jhukal"} className="hover:scale-105 transition-transform duration-200 ease-in" target="_blank">
                <GithubIcon />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/arjun-jhukal/"}
                className="hover:scale-105 transition-transform duration-200 ease-in"
                target="_blank"
              >
                <LinkedInIcon />
              </Link>
              <Link
                href={"https://www.upwork.com/freelancers/~01203b19e827ffa79f?mp_source=share"}
                className="hover:scale-105 transition-transform duration-200 ease-in"
                target="_blank"
              >
                <UpworkIcon />
              </Link>
            </div>
          </div>

          <div className="col-span-1">
            <div className="contact__item">
              <div className="icon">
                <PhoneIcon />
              </div>
              <div className="text">
                <Link href={"tel:+977 9812767046"} className="text-[22px] text-black-300 block">
                  +977 9812767046
                </Link>
                <Link href={"tel:+977 9848413085"} className="text-[22px] text-black-300 block">
                  +977 9848413085
                </Link>
              </div>
            </div>
            <div className="contact__item">
              <div className="icon">
                <MailIcon />
              </div>
              <div className="text">
                <Link href={"mailto:connectjhukal@gmail.com"} className="text-[22px] text-black-300 block">
                  connectjhukal@gmail.com
                </Link>
              </div>
            </div>
            <div className="contact__item">
              <div className="icon">
                <LocationIcon />
              </div>
              <div className="text">
                <p className="text-[18px]">Kathmandu, Nepal</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="section-title text-center mb-[60px]">
          <h2>Let's connect</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, doloremque!</p>
        </div>
        <div className="contact-card">
          <div className="front-face">
            <div className="ff-content">
              <h3>Arjun Jhukal</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
          <div className="back-face">
            <ul>
              <li>
                <Link href={"tel:+977 9812767046"}>PH. +977 9812767046</Link>
              </li>
              <li>
                <Link href={"mailto:connectjhukal@gmail.com"}>E-Mail. connectjhukal@gmail.com</Link>
              </li>
              <li>
                <Link href={"https://arjunjhukal.com.np"}>https://arjunjhukal.com.np</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
