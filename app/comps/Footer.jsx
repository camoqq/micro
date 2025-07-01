// app/comps/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" w-full bg-black  text-sm text-white py-4 border-t flex justify-between px-5 ">
      <p>Quotes of the day</p>
      <div className="flex flex-col text-center">
        <p>Invest with H6FIT</p>
        <p>© {new Date().getFullYear()} </p>
      </div>
      <div className="flex flex-col text-center">
        <p>Contact Info:</p>
        <Link href="http://www.h6fitsummits.com">
          <p>www.h6fitsummits.com</p>
        </Link>
      </div>
      {/* <p>Tags</p> */}
    </footer>
  );
}
