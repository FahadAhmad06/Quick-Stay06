import React, { useState } from "react";
import { roomsDummyData } from "../assets/assets";
import Tittle from "../Components/Tittle";

const ListRoom = () => {

  const [room, setRoom] = useState(roomsDummyData);

  // toggle availability
  const toggleAvailability = (index) => {

    const updatedRooms = [...room];

    updatedRooms[index].isAvailable =
      !updatedRooms[index].isAvailable;

    setRoom(updatedRooms);
  };

  return (
    <div>

      <Tittle
        align="left"
        font="outfit"
        tittle="Room Listings"
        subtittle="View, Edit or manage all listed rooms. Keep the information up-to-date to provide the best experience for users."
      />

      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="w-full max-w-3xl border border-gray-400 rounded-lg max-h-80 overflow-y-auto mt-3">

        <table className="w-full">

          {/* Header */}
          <thead className="bg-gray-50">
            <tr>

              <th className="py-3 px-4 text-gray-800 font-medium">
                Name
              </th>

              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>

              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Price / night
              </th>

              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Available
              </th>

            </tr>
          </thead>

          {/* Body */}
          <tbody className="text-sm">

            {room.map((item, index) => (

              <tr key={index}>

                {/* Room Type */}
                <td className="py-3 px-4 border-t border-gray-400 text-gray-700">
                  {item.roomType}
                </td>

                {/* Amenities */}
                <td className="py-3 px-4 border-t border-gray-400 text-gray-700 max-sm:hidden">
                  {item.amenities?.join(", ")}
                </td>

                {/* Price */}
                <td className="py-3 px-4 border-t border-gray-400 text-center text-gray-700">
                  ${item.pricePerNight}
                </td>

                {/* Toggle */}
                <td className="py-3 px-4 border-t border-gray-400 text-center">

                  <label className="relative inline-flex items-center cursor-pointer">

                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                      onChange={() =>
                        toggleAvailability(index)
                      }
                    />

                    {/* Background */}
                    <div className="w-12 h-7 bg-gray-300 rounded-full peer-checked:bg-blue-800 transition duration-200"></div>

                    {/* Dot */}
                    <span className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 peer-checked:translate-x-5"></span>

                  </label>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ListRoom;
