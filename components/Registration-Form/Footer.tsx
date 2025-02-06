import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-start gap-16">
      {/* Column 1 */}
      <div className="flex flex-col gap-1">
        <b className="font-bold italic">Old/New Student:</b>
        <b className="font-bold italic">Registration Status:</b>
        <b className="font-bold italic">Date of Birth:</b>
        <b className="font-bold italic">Gender:</b>
        <b className="font-bold italic">Contact Number:</b>
        <b className="font-bold italic">E-mail Address:</b>
        <b className="font-bold italic">Student's Signature:</b>
      </div>
      {/* Column 2 */}
      <div className="flex flex-col gap-1">
        <span className="font-semibold">Old Student</span>
        <span className="font-semibold">REGULAR</span>
        <span className="font-semibold">January 4, 2005</span>
        <span className="font-semibold">MALE</span>
        <span className="font-semibold">01234567890</span>
        <span className="font-semibold">longbomb@gmail.com</span>
        <div className="border-b-2 border-black w-64 mt-4"></div>
      </div>
    </div>
  );
}
