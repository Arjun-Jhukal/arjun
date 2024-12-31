import Image from "next/image";
import Link from "next/link";
import Tooltip from "../tooltip";
import DownloadIcon from "@/Icons/DownloadIcon";

export default function DownloadCv() {
	return (
		<Link
			href={
				"https://drive.google.com/file/d/1Vrw4jljK1t_pkAXytdsbYiF9eqORMc-W/view?usp=sharing"
			}
			target="_blank"
			className="fixed bottom-8 right-8 rounded-[50%] bg-primary p-3 hover:bg-primary fixed-download-btn">
			{/* <Image src="/downloadIcon.svg" alt="Download Button" width={30} height={30} /> */}
			<Tooltip message="Download CV">
				<DownloadIcon />
			</Tooltip>
		</Link>
	);
}
