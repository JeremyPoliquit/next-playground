import React from "react";

export default function StudentInfo() {
  return (
    <div className="flex justify-between">
      {/* Column 1 */}
      <div className="flex flex-col w-full">
        {/* Student Number */}
        <div className="flex gap-8">
          <b className="font-bold text-green-700">Student Number: </b>
          <span className="font-semibold">202311242</span>
        </div>
        {/* Student Name */}
        <div className="flex gap-8">
          <b className="font-bold text-green-700">Student Name:</b>
          <span className="font-semibold">
            POLIQUIT LAWRENCE JEREMY MAGQUILAT
          </span>
        </div>
        {/* Course */}
        <div className="flex gap-24">
          <div className="flex gap-8">
            <b className="font-bold text-green-700">Course:</b>
            <span className="font-bold">BSCS</span>
          </div>
          <div className="flex gap-8">
            <b className="font-bold text-green-700">Year:</b>
            <span className="font-semibold">2nd Year</span>
          </div>
        </div>
        {/* Address */}
        <div className="flex gap-8">
          <b className="font-bold text-green-700">Address:</b>
          <span className="font-semibold">CITIHOMES MOLINO IV</span>
        </div>
      </div>
      {/* Column 2 */}
      <div className="flex flex-col w-full">
        {/* Semester */}
        <div className="flex gap-8">
          <b className="font-bold text-green-700">Semester:</b>
          <span className="font-semibold">1st Semester</span>
        </div>
        {/* Date */}
        <div className="flex gap-8">
          <b className="font-bold text-green-700">Date:</b>
          <span className="font-semibold">04-Sep-24</span>
        </div>
        {/* Encoder */}
        <div className="flex gap-24">
          <div className="flex gap-8">
            <b className="font-bold text-green-700">Encoder:</b>
            <span className="font-semibold">M. ANUAS</span>
          </div>
          {/* Major */}
          <div className="flex gap-8">
            <b className="font-bold text-green-700">Major:</b>
          </div>
        </div>
        {/* Section */}
        <div className="flex gap-8">
          <b className="font-bold text-green-700">Section:</b>
          <span className="font-semibold">BSCS 2-4</span>
        </div>
      </div>
    </div>
  );
}
