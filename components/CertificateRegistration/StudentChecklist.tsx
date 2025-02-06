import React from "react";

export default function StudentChecklist() {
  return (
    <table className="table table-sm">
      <thead>
        <tr className="border-y-2 border-green-700 text-green-700">
          <th>Sched Code</th>
          <th className="border-r-2 border-green-700">Course Code</th>
          <th className="border-r-2 border-green-700">Course Description</th>
          <th>Units</th>
          <th>Time</th>
          <th>Day</th>
          <th>Room</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">GNED-04</td>
          <td className="border-r-2 border-green-700">Mga Babasahin Hinggil sa Kasaysayan ng Pilipinas</td>
          <td className="border-x-2 border-green-700">3</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">MATH 1</td>
          <td className="border-r-2 border-green-700">Analytic Geometry</td>
          <td className="border-r-2 border-green-700">3</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">COSC 55</td>
          <td className="border-r-2 border-green-700">Dicrete Structures II</td>
          <td className="border-r-2 border-green-700">3</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">COSC 60</td>
          <td className="border-r-2 border-green-700">Digital Logic Design</td>
          <td className="border-r-2 border-green-700">
            <div className="flex justify-between">
              <div>2</div>
              <div>1</div>
            </div>
          </td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">DCIT 50</td>
          <td className="border-r-2 border-green-700">Object Oriented Programming</td>
          <td className="border-r-2 border-green-700">
            <div className="flex justify-between">
              <div>2</div>
              <div>1</div>
            </div>
          </td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">DCIT 24</td>
          <td className="border-r-2 border-green-700">Information Management</td>
          <td className="border-r-2 border-green-700">
            <div className="flex justify-between">
              <div>2</div>
              <div>1</div>
            </div>
          </td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">INSY 50</td>
          <td className="border-r-2 border-green-700">Fundamentals of Information Systems</td>
          <td className="border-r-2 border-green-700">3</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
        <tr className="border-b-2 border-green-700">
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">FITT 3</td>
          <td className="border-r-2 border-green-700">Physical Activities towards Health and Fitness 1</td>
          <td className="border-r-2 border-green-700">3</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td className="border-r-2 border-green-700">TBA</td>
          <td>TBA</td>
        </tr>
      </tbody>
    </table>
  );
}
