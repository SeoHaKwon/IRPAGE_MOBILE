<template>
  <div class="wrap">
    <div class="content">
      <div class="arror-section">
        <button type="button" class="btn-close"></button>
        <p class="pic">
          <img src="../assets/bg/bg_arror_cal.svg" alt="">
        </p>
        <strong class="tit">이미 진행 중인<br>
        IR 미팅이 있습니다.</strong>
        <p class="sub">진행 중인 IR 미팅이 있을 경우 추가 신청은 불가합니다.</p>
      </div>
      <p class="meeting-result-tit">IR 미팅 내역</p>
      <div class="meeting-result">
        <p class="tit on">
          <strong>승인 완료</strong>
        </p>
        <div class="inner">
          <div class="date-box">
            <p class="day en">2</p>
            <span class="month en">DEC</span>
          </div>
          <div class="data-info">
            <p>2019년 12월 2일 월요일</p>
            <span>10:00 ~ 11:00 탐방미팅</span>
          </div>
        </div>
      </div>
      <button type="button" class="btn-view">자세히 보기</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'meetingList'
}
</script>
 <style lang="scss" scoped>
 .wrap {
   display:flex;
   flex-direction: column;
   height:100%;
   .content {
     padding:24px 22px 44px 22px;
   }
 }
.btn-view {
  width:100%;
  padding:12px 0;
  margin-top:16px;
  background: #F2F2F2;
  border: 1px solid #D1D1D6;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  letter-spacing: -0.005em;
  text-transform: capitalize;
  color: #313439;
}
.meeting-result-tit {
  margin-bottom:13px;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  letter-spacing: -0.005em;
  text-transform: capitalize;
  color: #313439;
}
.meeting-result {
  background: #F2F2F2;
  border-radius: 4px;
  .tit {
    padding:10px 18px;
    background: #E91E63;
    border-radius: 4px;
    strong {
      display:inline-block;
      padding-left:28px;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
      display: flex;
      align-items: center;
      letter-spacing: -0.005em;
      text-transform: capitalize;
      color: #FFFFFF;
    }
    $status : (
      on : #E91E63,
      off : #545454,
      result :#E0E0E0,
    );
    &.result {
      strong {
        color:#545454;
      }
      & + .inner {
        background-color:#fff;
      }
    }
    @each $obj , $color in $status {
      &.#{$obj}{
        background-color:$color;
        strong {
          background:url(../assets/bg/bg_meeting_#{$obj}.svg ) no-repeat left center;
        }
      }
    }
  }
  .inner {
    display:flex;
    padding:20px 18px;
  }
  .date-box {
    flex:0 0 auto;
    width:48px;
    height:48px;
    padding:8px 0;
    margin-right:18px;
    background: #FFFFFF;
    border: 1px solid #E5E5EA;
    border-radius: 4px;
    text-align: center;
    .day {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.4px;
      color: #545454;
    }
    .month {
      font-weight: bold;
      font-size: 9px;
      line-height: 12px;
      text-align: center;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: #545454;
    }
  }
  .data-info {
    p {
      margin-bottom:4px;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      align-items: center;
      letter-spacing: -0.005em;
      color: #313439;
    }
    span {
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      color: #8E8E93;
    }
  }
  & + .meeting-list {
    margin-top:32px;
  }
}
.arror-section {
  position:relative;
  padding:76px 0 91px 0;
  margin-bottom:27px;
  text-align: center;

  &::after {
    display:block;
    position:absolute;
    left:-22px;
    bottom:0;
    width:calc(100% + 44px);
    height:1px;
    background-color:#E5E5EA;
    content:"";
  }
  .pic {
    margin-bottom:40px;
    text-align: center;
  }
  .sub {
    margin-top:8px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #8E8E93;
  }
  .tit {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    letter-spacing: -0.5px;
    color: #1B1D20;
  }
  .btn-close {
    position: absolute;
    right:0;
    top:0;
    height:16px;
    width:16px;
    background:url(../assets/btn/btn_close.svg) no-repeat center;
  }
}
 </style>
