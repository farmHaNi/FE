import { useState } from "react";
import MyCalendar from "./calender.js";
import '../css/mypage.css';

export default function RenterMypage() {
    const [dropdownCalendars, setDropDownCalendars] = useState({});

    const plantData = [
        { title: '태민농장', plant: '토마토' },
        { title: '인규농장', plant: '복숭아' },
        { title: '연배농장', plant: '감귤' },
        { title: '경돈농장', plant: '수박' }
    ]

    const toggledDropCalendar = (title) => {
        setDropDownCalendars(prev => ({
            ...prev,
            [title]: !prev[title]
        }));
    };

    return (
        <div className="Mypagebox">
            <div className="userInfo">
                <div className="userID">ID</div>
                <div className="userID">이름</div>
                <div className="userID">이메일</div>
            </div>
            <div className="myplant">
                <h2>내가가진식물</h2>
                <div className="myplant_box">
                    {plantData.map((item, index) => (
                        <div
                            key={index}
                            className="plant_box_min"
                            onClick={()=>toggledDropCalendar(item.title)}>
                            <div className="plantboxheader">
                            <h2>{item.plant}</h2>
                            <h4>{item.title}</h4>
                            </div>
                            {dropdownCalendars[item.title] && (
                                <div className="myplant_box">
                                    <MyCalendar farmData={item} />
                                </div>)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}