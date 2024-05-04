import Image from "next/image";
import Link from "next/link";

export default function DownloadCv() {
  return (
    <Link href={"#"} className="fixed bottom-8 right-8 rounded-[50%] bg-primary p-3 hover:bg-primary">
      <Image src="/downloadIcon.svg" alt="Download Button" width={30} height={30} />
    </Link>
  );
}
