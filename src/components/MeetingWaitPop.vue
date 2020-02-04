<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link" v-on:click="$router.push('/')"></a>
      <strong>IR 미팅 내역</strong>
    </div>
    <div class="content">
      <div class="meeting-result">
        <p class="tit off">
          <strong>승인 대기중</strong>
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
      <div class="toggle-section">
        <p class="toggl-tit">
          신청내용
        </p>
        <div class="toggle-cont" >
          <dl class="base">
            <dt class="tit">동행인</dt>
            <dd>
              <div class="name-box">
                <span>박무열</span>
                <span>구자웅</span>
                <span>백경진</span>
              </div>
            </dd>
          </dl>
          <dl class="base">
            <dt class="tit">탐방목적 및 사전질문</dt>
            <dd>
              LCD 시장 철수로 인한 해외 시장에서의 점유율의 영향과 향후 계획에 대해 궁금하며 사전에 전달 가능한 자료가 있으면 먼저 요청드립니다.
              <div class="btn-wrap">
                <button type="button">일정변경</button>
                <button type="button">일정취소</button>
              </div>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="pop">
      <div class="pop-cont">
        <strong class="tit">
          IR 미팅 일정 취소
        </strong>
        <p class="sub">2019년 12월 2일 월요일 10:00 ~ 11:00<br>
          탐방 미팅 일정이 취소되었습니다.</p>
          <button type="button">닫기</button>
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
      close : #E0E0E0,
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
    &.close {
      strong {
        color:#545454;
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
  & + .toggle-section {
    margin-top:32px;
  }
}
.toggle-section {
  .toggl-tit {
    position:relative;
    padding-bottom:13px;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.005em;
    color: #313439;
    border-bottom:1px solid #E5E5EA;
  }
  .toggle-cont {
    padding:16px 0 30px 0;
    .base {
      dt {
        margin-bottom:10px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #8E8E93;
      }
      dd {
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.5px;
        color: #545454;
      }
       + .base {
         margin-top:32px;
       }
       .btn-wrap {
         display:flex;
        margin-top:25px;
        background: #F2F2F2;
        border: 1px solid #D1D1D6;
        box-sizing: border-box;
        border-radius: 4px;
        button {
          width:50%;
          padding:12px 0;
          background-color:transparent;
          font-size: 16px;
          line-height: 23px;
          text-align: center;
          letter-spacing: -0.005em;
          color: #313439;
          & + button {
            position:relative;
            &::after{
              display:block;
              position:absolute;
              left:0;
              top:50%;
              content:"";
              width:1px;
              height:30px;
              background-color:#D1D1D6;
              transform: translateY(-50%);
            }
          }
        }
       }
    }
    .name-box {
      display:flex;
      span {
        display:inline-block;
        padding:5px 10px;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #545454;
        background: #FFFFFF;
        border: 1px solid #E5E5EA;
        border-radius: 4px;
        & + span {
          margin-left:8px;
        }
      }
    }
    .direct {
      display:flex;
      position:relative;
      width:calc(100% + 16px);
      padding:12px 0;
      left:-8px;
      margin-top:20px;
      background: #F2F2F2;
      border: 1px solid #D1D1D6;
      box-sizing: border-box;
      border-radius: 4px;
      a {
        display:inline-block;
        width:50%;
        text-align: center;
        span {
          display:inline-block;
          padding-left:22px;
          font-size: 16px;
          line-height: 23px;
          letter-spacing: -0.005em;
          color: #313439;
        }
        @each $obj in tel , sms {
          &.#{$obj}{
            span {
              background:url(../assets/bg/bg_#{$obj}.svg) no-repeat left center;
            }
          }
        }
        + a {
          position:relative;
          &::after {
            display:block;
            position:absolute;
            left:0;
            top:50%;
            width:1px;
            height:30px;
            transform: translateY(-50%);
            background-color:#D1D1D6;
            content:"";
          }
        }
      }
    }
    .address-info {
      margin-bottom:32px;
      p {
        font-size: 16px;
        line-height: 23px;
        letter-spacing: -0.005em;
        color: #545454;
      }
      button {
        padding-left:24px;
        margin-top:3px;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;
        color: #4DA1FF;
        background:url(../assets/btn/btn_copy_address.svg) no-repeat left center;
      }
    }
  }
    & + .toggle-section {
    position:relative;
    padding-top:26px;
    &::after {
      display:none;
      position:absolute;
      left:-22px;
      top:0;
      width:calc(100% + 44px);
      height:4px;
      background-color:#E5E5EA;
      content:"";
    }
  }
  &.active {
    & + .toggle-section {
      &::after{
        display:block;
      }
    }
    .toggl-tit {
        button {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    .toggle-cont {
      display:block;
    }
  }
}
.pop {
  display:flex;
  align-items: center;
  justify-content: center;
  position:fixed;
  left:0;
  top:0;
  width:100%;
  height:100%;
  padding:0 52px;
  background-color:rgba($color: #000000, $alpha: .3);
  .pop-cont {
    width:100%;
    padding:20px 0 0 0;
    background: rgba(248, 248, 248, 0.82);
    backdrop-filter: blur(54.3656px);
    border-radius: 14px;
    text-align: center;
    .tit {
      font-weight: 500;
      font-size: 17px;
      line-height: 22px;
      text-align: center;
      letter-spacing: -0.41px;
      color: #000000;
    }
    .sub {
      margin:6px 0 12px 0;
      font-size: 12px;
      line-height: 18px;
      text-align: center;
      letter-spacing: -0.01em;
      text-transform: capitalize;
      color: #545454;
    }
    button {
      width:100%;
      padding:8px 0 12px 0;
      border-top:1px solid #C7C7CC;
      background-color:transparent;
      font-weight: 500;
      font-size: 16px;
      line-height: 23px;
      text-align: center;
      letter-spacing: -0.005em;
      color: #313439;
    }
  }
}
 </style>
 <script>
 </script>
