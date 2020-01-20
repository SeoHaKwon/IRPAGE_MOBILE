<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>IR 미팅 내역</strong>
    </div>
    <div class="content">
      <div class="time-select">
        <strong class="tit">시간선택</strong>
        <div class="time-wrap">
          <div class="time">
            <input type="radio">
            <span>10:00</span>
          </div>
          <div class="time">
            <input type="radio">
            <span>13:00</span>
          </div>
          <div class="time">
            <input type="radio">
            <span>14:30</span>
          </div>
          <div class="time">
            <input type="radio">
            <span>16:00</span>
          </div>
        </div>
      </div>
    </div>
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
.time-select {
  .tit {
    font-size: 14px;
    line-height: 26px;
    letter-spacing: -0.5px;
    color: #313439;
  }
  .time-wrap {
  display:flex;
  flex-wrap: wrap;
  margin:-12px 0 0 -12px;
  .time {
    width:calc(50% - 12px);
    margin:12px 0 0 12px;
    background: #FFFFFF;
    border: 1px solid #D1D1D6;
    border-radius: 2px;
  }
  }
}
 </style>
