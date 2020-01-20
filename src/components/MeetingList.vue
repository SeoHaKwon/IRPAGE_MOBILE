<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>IR 미팅 내역</strong>
    </div>
    <div class="content">
      <div class="meeting-result">
        <p class="tit on">
          <strong>승인 완료</strong>
        </p>
        <div class="inner">
          <div class="date-box">
            <p class="day en">2</p>
            <span class="month">DEC</span>
          </div>
          <div class="data-info">
            <p>2019년 12월 2일 월요일</p>
            <span>10:00 ~ 11:00 탐방미팅</span>
          </div>
        </div>
      </div>
      <div class="meeting-result">
        <p class="tit off">
          <strong>승인 대기</strong>
        </p>
        <div class="inner">
          <div class="date-box">
            <p class="day en">2</p>
            <span class="month">DEC</span>
          </div>
          <div class="data-info">
            <p>임시 보기용입니다</p>
            <span>tit 클래스에 on , off</span>
          </div>
        </div>
      </div>
      <div class="meeting-list">
        <div class="tit">
          <strong>지난 IR 미팅</strong>
          <p class="list-info">
            <span>완료 10건</span>
            <span>거절 10건</span>
          </p>
        </div>
        <ul class="list">
          <li class="meeting-result">
            <p class="tit result">
              <strong>IR 미팅 완료</strong>
            </p>
            <div class="inner">
              <div class="date-box">
                <p class="day en">2</p>
                <span class="month">DEC</span>
              </div>
              <div class="data-info">
                <p>2019년 12월 2일 월요일</p>
                <span>10:00 ~ 11:00 탐방미팅</span>
              </div>
            </div>
          </li>
          <li class="meeting-result">
            <p class="tit result">
              <strong>IR 미팅 완료</strong>
            </p>
            <div class="inner">
              <div class="date-box">
                <p class="day en">2</p>
                <span class="month">DEC</span>
              </div>
              <div class="data-info">
                <p>2019년 12월 2일 월요일</p>
                <span>10:00 ~ 11:00 탐방미팅</span>
              </div>
            </div>
          </li>
          <li class="meeting-result">
            <p class="tit result">
              <strong>IR 미팅 완료</strong>
            </p>
            <div class="inner">
              <div class="date-box">
                <p class="day en">2</p>
                <span class="month">DEC</span>
              </div>
              <div class="data-info">
                <p>2019년 12월 2일 월요일</p>
                <span>10:00 ~ 11:00 탐방미팅</span>
              </div>
            </div>
          </li>
          <li class="meeting-result">
            <p class="tit result">
              <strong>IR 미팅 완료</strong>
            </p>
            <div class="inner">
              <div class="date-box">
                <p class="day en">2</p>
                <span class="month">DEC</span>
              </div>
              <div class="data-info">
                <p>2019년 12월 2일 월요일</p>
                <span>10:00 ~ 11:00 탐방미팅</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
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
     padding:0 22px;
   }
 }
 .header {
   position: relative;;
   padding-top:14px;
   margin-bottom:56px;
   text-align: center;
   .btn-link {
     display:inline-block;
     position:absolute;
     left:34px;
     top:22px;
     width:10px;
     height:10px;
     transform: rotate(45deg);
     border:2px solid #000;
     border-top:none;
     border-right:none;
     -webkit-tap-highlight-color:transparent;
   }
   strong {
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
     }
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
.meeting-list {
  >.tit {
    display:flex;
    margin-bottom:10px;
    strong {
      font-size: 16px;
      line-height: 23px;
      color: #1B1D20;
    }
    .list-info {
      margin-left:auto;
      span {
        display:inline-block;
        font-size: 16px;
        line-height: 22px;
        color: #8E8E93;
        & + span {
          position: relative;
          margin-left:8px;
          padding-left:8px;
          &::after {
            display:block;
            position: absolute;
            left:0;
            top:50%;
            content:"";
            width:1px;
            height:14px;
            background-color:#8E8E93;
            transform: translateY(-50%);
          }
        }
      }
    }
  }
  .list {
    position: relative;
    padding:30px 0;
    &::after {
      display:block;
      position: absolute;
      top:0;
      left:-34px;
      width:calc(100% + 68px);
      height:100%;
      background-color:#F2F2F2;
      content:"";
    }
    li {
      position:relative;
      z-index: 10;
      & + li {
        margin-top:20px;
      }
    }
  }
}
 </style>
