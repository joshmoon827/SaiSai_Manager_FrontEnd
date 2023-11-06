/* eslint-disable jsx-a11y/alt-text */
// import "../../styles/PointHistory/PointHistory.css";
// import { Link } from "react-router-dom";
import { Div, Table, Td, Container,Tr } from "../../styles/Point/CouponHistory.style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyData = [
  {
     id: 1,
     name: "문주호",
     username: "joshmoon",
     store: "starbucks",
     point: "10",
     time: "11/15 12:30:15",
     total: "75,000"
  },
  {
     id: 2,
     name: "주호문",
     username: "joshmoon77",
     store: "starbucks",
     point: "100",
     time: "11/15 12:30:15",
     total: "73,500"
  },
  {
     id: 3,
     name: "호주문",
     username: "joshmoon777",
     store: "starbucks",
     point: "10",
     time: "11/15 12:30:15",
     total: "64,000"
  },
];


function CouponHistoryPage(data) {
  const navigate = useNavigate();
  // 더미데이터
  // const dummyData = [
  //   {
  //     id: 1,
  //     number: "1",
  //     name: "문주호",
  //     id: "joshmoon",
  //     store: "starbucks",
  //     point: "10",
  //     time: "11/15 12:30:15",
  //     total: "75,000"
  //   }
  // ];
  const [currentCategory, setCurrentCategory] = useState("포인트내역");

  return (
    <div>
      <div onClick={() => navigate("/login")}>move</div>
      <Div
        isSelected={currentCategory === "포인트내역" ? true : false}
        onClick={() => setCurrentCategory("포인트내역")} />
      <Div
        isSelected={currentCategory === "쿠폰내역" ? true : false}
        onClick={() => setCurrentCategory("쿠폰내역")}/>
      <Container>
          <Table>
            <thead>
              <Tr>
                <Td>순번</Td>
                <Td>이름</Td>
                <Td>아이디</Td>
                <Td>가게명</Td>
                <Td>지급된 포인트</Td>
                <Td>사용 시각</Td>
                <Td>총 포인트</Td>
              </Tr>
            </thead>
            <tbody>
            {dummyData.map((item) => (
            <Tr key={item.id}>
              <Td>{item.id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.username}</Td>
              <Td>{item.store}</Td>
              <Td>{item.point}</Td>
              <Td>{item.time}</Td>
              <Td>{item.total}</Td>
            </Tr>
          ))}
            </tbody>
          </Table>

      </Container>
    </div>
  );
}

function App() {
  return (
    <div>
      <CouponHistoryPage data={dummyData} />
    </div>
  );
}

export default App;
// export default CouponHistoryPage;
