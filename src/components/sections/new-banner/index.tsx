import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";

import "./new-banner.scss";
import UpworkIcon from "@/Icons/upwork";

export default function NewBanner() {
	return (
		<section className="new__banner section__gap">
			<div className="container">
				<div className="banner__content-wrapper lg:grid grid-cols-2 items-center gap-4">
					<div className="banner__content py-[64px] lg:py-100">
						<div className="banner__image relative aspect-square  rounded-full  lg:hidden overflow-hidden mb-8 sm:max-w-[40vw] mx-auto">
							<Image
								src={"/profile.jpg"}
								alt="Frontend Developer Nepal Arjun Jhukal's Profile Picture"
								fill
								objectFit="cover"
								priority
							/>
						</div>
						<p className="uppercase mb-[16px]  over-title inline-block">Frontend Developer</p>
						<h1 className="mb-[40px] ">
							<span className=" pr-[20px]">
								Hi 👋, I<span className="text-primary">'</span>m
							</span>
							<br />
							<span >
								<span className="text-primary">Arjun</span> Jhukal
							</span>
						</h1>
						<p className="mb-[24px]">
							I am a pasionat Frontend Developer eager to learn and grow in Javascript Framework. I have been working in the field of web development for more than 3 years. I have worked with various clients and companies to create beautiful and functional websites.
						</p>
						<Link href={"/cv"} className=" btn btn__outline mb-[40px]">
							Download CV
						</Link>

						<div className="flex justify-start items-center gap-6">
							<Link
								href={"https://github.com/Arjun-Jhukal"}
								className="hover:scale-105 transition-transform duration-200 ease-in"
								target="_blank">
								<GithubIcon />
							</Link>
							<Link
								href={"https://www.linkedin.com/in/arjun-jhukal/"}
								className="hover:scale-105 transition-transform duration-200 ease-in"
								target="_blank">
								<LinkedInIcon />
							</Link>
							<Link
								href={
									"https://www.upwork.com/freelancers/~01203b19e827ffa79f?mp_source=share"
								}
								className="hover:scale-105 transition-transform duration-200 ease-in"
								target="_blank">
								<UpworkIcon />
							</Link>
						</div>
					</div>
					<div className="banner__image relative aspect-square  rounded-bl-[150px] hidden lg:block overflow-hidden">
						<Image
							src={"/profile.jpg"}
							alt="Frontend Developer Nepal Arjun Jhukal's Profile Picture"
							fill
							objectFit="cover"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
