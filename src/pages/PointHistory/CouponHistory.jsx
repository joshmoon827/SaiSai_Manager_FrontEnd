/* eslint-disable jsx-a11y/alt-text */
// import "../../styles/PointHistory/PointHistory.css";
import { Link } from "react-router-dom";
import { Div, Table, Th, Container } from "../../styles/Point/CouponHistory.style";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CouponHistoryPage() {
  const navigate = useNavigate();

  const [currentCategory, setCurrentCategory] = useState("포인트내역");

  return (
    <div>
      <div onClick={() => navigate("/login")}>move</div>
      <Div
        isSelected={currentCategory === "포인트내역" ? true : false}
        onClick={() => setCurrentCategory("포인트내역")}
      ></Div>
      <Div
        isSelected={currentCategory === "쿠폰내역" ? true : false}
        onClick={() => setCurrentCategory("쿠폰내역")}
      ></Div>
      <Container>
    
          <Table>
            <thead>
              <tr>
                <td>순번</td>
                <td>이름</td>
                <td>아이디</td>
                <td>가게명</td>
                <td>지급된 포인트</td>
                <td>사용 시각</td>
                <td>총 포인트</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>문주호</td>
                <td>joshmoon</td>
                <tdd>starbucks</tdd>
                <td>10</td>
                <td>11/15 12:30:15</td>
                <td>75000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>주호문</td>
                <td>joshmoon77</td>
                <td>starbucks</td>
                <td>100</td>
                <td>11/15 12:30:15</td>
                <td>735000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>호주문</td>
                <td>joshmoon777</td>
                <td>starbucks</td>
                <td>10</td>
                <td>11/15 12:30:15</td>
                <td>64000</td>
              </tr>
            </tbody>
          </Table>
     
      </Container>
    </div>
  );
}

export default CouponHistoryPage;
