import {useState} from 'react';
import "../css/farmList.css"

export default function FarmList(){

    const farmData = [
        { id: 1, title: '제목입니다.', author: 'user1' },
        { id: 2, title: '두 번째 게시글', author: 'user2' },
        { id: 3, title: '세 번째 게시글', author: 'user3' },
      ];
    

    return(
<>        
    <div className='navline'></div>
    <div className="farmListBox">
        <table>
        <thead>
            <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            </tr>
        </thead>
        <tbody>
            {farmData.map((row) => (
                <tr>
                <td key={row.id}>{row.id}</td>
                <td key={row.title}>{row.title}</td>
                <td key={row.author}>{row.author}</td>
                </tr>
            ))}
        </tbody>

        </table>
        </div>
        </>

    )
}