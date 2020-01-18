<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>문의내역</strong>
    </div>
    <div class="content">
      <div class="aks-list">
        <ul class="list">
          <li>
            <p class="title">탐방미팅 방문 예정입니다만, 사전에 자료 좀 받아볼 수 있을까요?</p>
            <div class="info">
              <span class="date">2020년 1월 5일 13:56</span>
              <span class="status active">답변완료</span>
            </div>
          </li>
        </ul>
      </div>
      <div class="answer-section">
        <div class="answer-info">
          <span class="date">
            2020년 1월 8일 13:56
          </span>
          <p class="name">
            <span class="pic">
              <img src="../assets/img/img_answer.png" alt="">
            </span>
            유연석 차장
            </p>
        </div>
        <p class="answer-txt">
          차세대 OLED 디스플레이로 글로벌 프리미엄 TV 시장을 선도하고 있는 LG디스플레이가 다시 한 번 대세 굳히기에 나섰습니다. 세계 최대 TV 시장인 중국의 대도시 광저우에 건설한 8.5세대 OLED 패널 공장이 본격적인 생산에 돌입한 건데요. 대형 OLED 생산량의 대폭 증가로 글로벌 OLED TV시장이 새로운 전기를 맞이하며 본격적으로 확대될 것으로 전망되고 있습니다. LG디스플레이 OLED의 무한성장을 이끌어줄 광저우 OLED 패널 공장을 함께 살펴볼까요?
        </p>
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
     padding:0 34px;
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
  position: relative;
  padding-bottom:30px;
  &::after {
    display:block;
    position:absolute;
    left:-34px;
    bottom:0;
    width:calc(100% + 68px);
    height: 4px;
    background-color:#E5E5EA;
    content:"";
  }
  .list-result {
    display:inline-block;
    margin-bottom:12px;
    font-size: 16px;
    line-height: 23px;
    color: #1B1D20;
  }
  .list {
    li {
      padding:0 18px;
      border-radius: 4px;
      .title {
        background:url(../assets/bg/bg_answer_q.png) no-repeat left top 4px;
        padding-left:30px;
        font-size: 16px;
        line-height: 23px;
        color: #545454;
      }
      .info {
        align-items: center;
        padding-left:30px;
        margin-top:12px;
        .date {
          display:inline-block;
          width:100%;
          font-size: 12px;
          line-height: 17px;
          letter-spacing: -0.5px;
          color: #8E8E93;
        }
        .status {
          display:inline-block;
          width:74px;
          padding:3px 0 3px 0;
          margin-top:16px;
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
    }
  }
}
.answer-section {
  padding:37px 0;
  .answer-info {
    display:flex;
    align-items: center;
    padding-left:30px;
    margin-bottom:24px;
    .date {
      font-size: 12px;
      line-height: 17px;
      letter-spacing: -0.5px;
      color: #8E8E93;
    }
    .name {
      margin-left:auto;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: -0.005em;
      color: #545454;
      .pic {
        margin-right:6px;
      }
    }
  }
  .answer-txt {
    padding-left:30px;
    font-size: 16px;
    line-height: 180%;
    letter-spacing: -0.5px;
    color: #545454;
    opacity: 0.87;
    background:url(../assets/bg/bg_answer_a.png) no-repeat left top 4px;
  }
}
 </style>
