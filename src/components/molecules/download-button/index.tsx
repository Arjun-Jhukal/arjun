import Image from "next/image";
import Link from "next/link";
import Tooltip from "../tooltip";
import DownloadIcon from "@/Icons/DownloadIcon";

export default function DownloadCv() {
	return (
		<Link
			href={"/cv"}
			target="_blank"
			className="fixed bottom-8 right-8 rounded-[50%] bg-primary p-3 hover:bg-primary fixed-download-btn">
			<Tooltip message="Download CV">
				<DownloadIcon />
			</Tooltip>
		</Link>
	);
}
