import React from "react";
import '../../styles/main.scss';
import SearchPannel from "../SearchPanel/SearchPanel";
import { useGetRoomsQuery } from "../redux/services/roomsApi"

const ShowRooms = () => {
  const { data: rooms, error, isLoding } = useGetRoomsQuery();
  return (
    <div className="show-rooms">
      {error ? (
        <p className="error container-custom">احتمالا خطایی رخ داده است</p>
      ) : isLoding ? (
        <p className="container-custom warning">در حال واکشی اطلاعات</p>
      ) : rooms ? (
        <div>
          {}
          {rooms.map((room) => (
            <ul key={room.id}>
              <li>{room.title}</li>
              <li>
                <img src={room.imgSrc} />
              </li>
              <li>{room.facilities}</li>
              <li>وضعیت :{room.status}</li>
              <li>ظرفیت : {room.capacity}</li>
              <li>تخت اضافه : {room.extrabed}</li>
              <li>{room.price}ریال </li>
              <li>
                {/* {console.log(
                  new Date(
                    room.startdate.year/
                    room.startdate.month/
                    room.startdate.day
                  ).toLocaleDateString("fa-IR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })
                )} */}
              </li>

              {/* <li>{room.enddate - room.startdate}</li> */}
              <hr />
            </ul>
          ))}
        </div>
      ) : null}
    </div>
  );

  //   </div>
  // );
};

export default ShowRooms;
