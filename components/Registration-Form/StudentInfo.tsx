import React from "react";

export default function StudentInfo() {
  return (
    <div className="flex justify-between">
      {/* Column 1 */}
      <div className="flex gap-16 w-full">
        {/*  */}
        <div className="w-1/2">
          <div className="flex flex-col gap-1">
            <b className="font-bold text-green-700">Student Number:</b>
            <b className="font-bold text-green-700">Student Name:</b>
            <b className="font-bold text-green-700">Course:</b>
            <b className="font-bold text-green-700">Address:</b>
          </div>
        </div>
        {/*  */}
        <div className="w-full">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">202310000</span>
            <span className="font-semibold">JAMES LEBRON BUMBUM</span>
            <div className="flex justify-between">
              <div className="flex w-1/2">
                <span className="font-semibold">BSCS</span>
              </div>
              <div className="flex gap-16 w-full">
                <div className="flex gap-8">
                  <b className="font-bold text-green-700">Year:</b>
                  <span className="font-semibold">2nd Year</span>
                </div>
              </div>
            </div>
            <span className="font-semibold">MOLINO IV BACOOR CITY</span>
          </div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex gap-16 w-full">
        <div className="flex flex-col">
          <b className="font-bold text-green-700">Semester:</b>
          <b className="font-bold text-green-700">Date:</b>
          <b className="font-bold text-green-700">Encoder:</b>
          <b className="font-bold text-green-700">Section:</b>
        </div>
        <div className="flex flex-col w-full">
          <span className="font-semibold">1st Semester</span>
          <span className="font-semibold">04-Sep-24</span>
          <div className="flex justify-between">
            <div className="flex w-1/2">
              <span className="font-semibold">J. DOE</span>
            </div>
            <div className="flex gap-16 w-full">
              <div className="flex gap-8">
                <b className="font-bold text-green-700">Major:</b>
              </div>
            </div>
          </div>
          <span className="font-semibold">BSCS 2-4</span>
        </div>
      </div>
    </div>
  );
}
