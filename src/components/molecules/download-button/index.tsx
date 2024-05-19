import Image from "next/image";
import Link from "next/link";
import Tooltip from "../tooltip";
import DownloadIcon from "@/Icons/DownloadIcon";

export default function DownloadCv() {
  return (
    <Link href={"#"} className="fixed bottom-8 right-8 rounded-[50%] bg-primary p-3 hover:bg-primary fixed-download-btn">
      {/* <Image src="/downloadIcon.svg" alt="Download Button" width={30} height={30} /> */}
      <Tooltip message="Download CV">
        <DownloadIcon />
      </Tooltip>
    </Link>
  );
}
