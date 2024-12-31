import Image from "next/image";
import Link from "next/link";
import GithubIcon from "@/Icons/Github";
import LinkedInIcon from "@/Icons/LinkedIn";

import "./new-banner.scss";
import UpworkIcon from "@/Icons/upwork";

export default function NewBanner() {
	return (
		<section className="new__banner section__gap ">
			<div className="container">
				<div className="banner__content-wrapper lg:grid grid-cols-2 items-center gap-4">
					<div className="banner__content py-[90px]">
						<p className="uppercase mb-[50px]">Frontend Developer</p>
						<h1 className="mb-[40px]">
							<span className="bg-white-100 pr-[20px]">
								Hello I<span className="text-primary">'</span>m
							</span>
							<br />
							<span className="bg-white-100">
								<span className="text-primary">Arjun</span> Jhukal
							</span>
						</h1>
						<p className="mb-[60px]">
							I believe that collaboration and creativity are the cornerstones
							of progress, and I am dedicated to bringing a fresh perspective to
							every project I undertake.
						</p>
						<Link href={"#projects"} className=" btn btn__outline mb-[60px]">
							Explore My Work
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
					<div className="banner__image relative aspect-square  rounded-bl-[150px] overflow-hidden">
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
