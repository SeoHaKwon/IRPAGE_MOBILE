<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>IR 미팅 신청하기</strong>
    </div>
    <div class="content">
      <div class="select-section">
        <div class="calendar">
          <div class="title">
            <button type="button" class="prev"></button>
            <strong>2019년 12월</strong>
            <button type="button" class="next"></button>
          </div>
            <ul class="days">
              <li>일</li>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
            </ul>
            <ul class="numbers">
              <li class="off"><span>1</span></li>
              <li><span>2</span></li>
              <li><span>3</span></li>
              <li><span>4</span></li>
              <li><span>5</span></li>
              <li><span>6</span></li>
              <li class="off"><span>7</span></li>
              <li class="off"><span>8</span></li>
              <li class="today"><span>9</span></li>
              <li><span>10</span></li>
              <li><span>11</span></li>
              <li><span>12</span></li>
              <li><span>13</span></li>
              <li class="off"><span>14</span></li>
              <li class="off"><span>15</span></li>
              <li><span>16</span></li>
              <li><span>17</span></li>
              <li class="selected"><span>18</span></li>
              <li><span>19</span></li>
              <li><span>20</span></li>
              <li class="off"><span>21</span></li>
              <li class="off"><span>22</span></li>
              <li><span>23</span></li>
              <li><span>24</span></li>
              <li><span>25</span></li>
              <li><span>26</span></li>
              <li><span>27</span></li>
              <li class="off"><span>28</span></li>
              <li class="off"><span>29</span></li>
              <li><span>30</span></li>
              <li><span>31</span></li>
            </ul>
        </div>
      </div>
      <div class="select-section">
        <div class="time-select">
        <strong class="tit">시간선택</strong>
        <div class="time-wrap">
            <div class="select-box">
              <input type="radio" name="time" disabled>
              <span class="en">10:00</span>
            </div>
            <div class="select-box">
              <input type="radio" name="time">
              <span class="en">13:00</span>
            </div>
            <div class="select-box">
              <input type="radio" name="time">
              <span class="en">14:30</span>
            </div>
            <div class="select-box">
              <input type="radio" name="time">
              <span class="en">16:00</span>
            </div>
          </div>
        </div>
      </div>
      <div class="select-section">
        <div class="time-select">
        <strong class="tit">미팅 방법</strong>
        <div class="time-wrap">
            <div class="select-box">
              <input type="radio" name="meet">
              <span>탐방미팅</span>
            </div>
            <div class="select-box">
              <input type="radio" name="meet">
              <span>화상미팅</span>
            </div>
          </div>
        </div>
        <p class="desc">* 탐방미팅 장소<br>
          경기도 성남시 분당구 대왕판교로 700<br>
          (삼평동, 코리아바이오파크 A동 5층)
        </p>
        <p class="desc">* 화상IR진행 시 화상캠, 인터넷 사용 준비 필요</p>
      </div>
    </div>
    <a href="#" class="btn-bottom active">
      다음
    </a>
  </div>
</template>
<script>
export default {
  name: 'meetingApply'
}
</script>
 <style lang="scss" scoped>
 .wrap {
   display:flex;
   flex-direction: column;
   height:100%;
   padding-bottom:100px;
   overflow: auto;
   .content {
     padding:0 22px;
   }
 }
 .header {
   position: relative;
   padding-top:14px;
   margin-bottom:56px;
   text-align: center;
   .btn-link {
     display:inline-block;
     position:absolute;
     left:24px;
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
.btn-bottom {
  display:block;
  position:absolute;
  left:0;
  bottom:0;
  width:100%;
  padding:13px 0 53px 0;
  background-color:#E91E63;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #FFFFFF;
  &.active {
    background-color:#D1D1D6;
  }
}
.select-section{
  & + .select-section {
    margin-top:30px;
    padding-top:23px;
    border-top:1px solid #E5E5EA;
  }
}
.calendar {
  .title {
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:20px;
    strong {
        display:inline-block;
        margin:0 10px;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        text-align: center;
        letter-spacing: -0.5px;
        color: #313439;
    }
    button {
      width:5px;
      height:10px;
      background:url(../assets/btn/btn_calendar.svg) no-repeat center;
      background-size:cover;
      &.prev {
        transform: rotate(180deg);
      }
    }
  }
  .days {
    display:flex;
    margin-bottom:18px;
    li {
      width:calc(100% /7);
      font-size: 12px;
      line-height: 17px;
      text-align: center;
      color: #313439;
    }
  }
  .numbers {
    display:flex;
    flex-wrap: wrap;
    margin-top:-13px;
    li {
      width:calc(100% /7);
      margin-top:13px;
      text-align: center;
      span{
        display:inline-block;
        width:40px;
        height:40px;
        padding-top:7px;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #313439;
        font-family: 'Roboto', sans-serif;
      }
      &.selected {
        span {
          background: #E91E63;
          border-radius: 2px;
          font-weight: bold;
          font-size: 14px;
          line-height: 16px;
          color: #FFFFFF;
        }
      }
      &.off {
        span {
          color: #D1D1D6;
          opacity: 0.9;
        }
      }
      &.today {
        span {
          font-weight: 500;
          font-size: 14px;
          line-height: 16px;
          color: #E91E63;
          opacity: 0.9;
          &::after {
            display:block;
            content:"오늘";
            font-weight: 500;
            font-size: 9px;
            line-height: 13px;
            text-align: center;
            color: #E91E63;
            font-family: 'Noto Sans KR', sans-serif;
          }
        }
      }
    }
  }
}
.desc {
  font-size: 12px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #8E8E93;
  + .desc{
    margin-top:20px;
  }
}
.time-select {
  .tit {
    display:inline-block;
    margin-bottom:8px;
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #313439;
  }
  .time-wrap {
  display:flex;
  flex-wrap: wrap;
  margin:-12px 0 0 -12px;
}
  .select-box {
    position: relative;
    width:calc(50% - 12px);
    margin:12px 0 0 12px;
    input {
      position: absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      opacity: 0;
      &:disabled {
        + span {
          background: #F2F2F2;
          color: #C7C7CC;
          border-color:#F2F2F2;
        }
       }
       &:checked {
         + span {
           background: #E91E63;
           border-color:#E91E63;
           font-weight: 500;
           color:#fff;
         }
       }
      }
      span {
        display:inline-block;
        width:100%;
        padding:12px 0;
        background: #FFFFFF;
        border: 1px solid #D1D1D6;
        border-radius: 2px;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        color: #545454;
      }
    }
    + .desc {
      margin-top:16px;
    }
 }
 </style>
