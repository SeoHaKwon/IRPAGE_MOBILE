<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>문의하기</strong>
    </div>
    <div class="content">
      <div class="aks-list">
        <strong class="list-result">총 8건</strong>
        <ul class="list">
          <li>
            <p class="title">탐방미팅 방문 예정입니다만, 사전에 자료 좀 받아볼 수 있을까요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status">답변대기</span>
            </div>
          </li>
          <li>
            <p class="title">탐방미팅 방문 예정입니다만, 사전에 자료 좀 받아볼 수 있을까요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status">답변대기</span>
            </div>
          </li>
          <li>
            <p class="title">탐방미팅이 확정되었는데 추가로 함께 갈 동행자가 있는데 참석 어떻게 하나요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
                    <li>
            <p class="title">탐방미팅이 확정되었는데 추가로 함께 갈 동행자가 있는데 참석 어떻게 하나요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
                    <li>
            <p class="title">탐방미팅이 확정되었는데 추가로 함께 갈 동행자가 있는데 참석 어떻게 하나요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
                    <li>
            <p class="title">탐방미팅이 확정되었는데 추가로 함께 갈 동행자가 있는데 참석 어떻게 하나요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
                    <li>
            <p class="title">탐방미팅이 확정되었는데 추가로 함께 갈 동행자가 있는데 참석 어떻게 하나요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
                    <li>
            <p class="title">탐방미팅이 확정되었는데 추가로 함께 갈 동행자가 있는데 참석 어떻게 하나요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AskPage'
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
.aks-list {
  padding-bottom:74px;
  .list-result {
    display:inline-block;
    margin-bottom:12px;
    font-size: 16px;
    line-height: 23px;
    color: #1B1D20;
  }
  .list {
    li {
      padding:16px 18px;
      background: #F2F2F2;
      border-radius: 4px;
      .title {
        background:url(../assets/bg/bg_aksList.png) no-repeat left top 4px;
        padding-left:30px;
        font-size: 16px;
        line-height: 23px;
        color: #545454;
      }
      .info {
        display:flex;
        align-items: center;
        padding-left:30px;
        margin-top:30px;
        .date {
          font-size: 12px;
          line-height: 17px;
          letter-spacing: -0.5px;
          color: #8E8E93;
        }
        .status {
          display:inline-block;
          width:74px;
          padding:3px 0 3px 0;
          margin-left:auto;
          background: #FFFFFF;
          border: 1px solid #8E8E93;
          border-radius: 100px;
          text-align: center;
          font-size: 12px;
          line-height: 16px;
          text-align: center;
          color: #8E8E93;
          &.active {
            color: #E91E63;
            border-color: #E91E63;
          }
        }
      }
      & + li {
        margin-top:20px;
      }
    }
  }
}
 </style>
