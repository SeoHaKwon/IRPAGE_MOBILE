<template>
  <div class="wrap">
    <div class="header">
      <a href="#" class="btn-link"></a>
      <strong>IR 미팅 내역</strong>
    </div>
    <div class="content">

    </div>
  </div>
</template>
<script>
export default {
  name: 'AlarmList'
}
</script>
 <style lang="scss" scoped>
 .wrap {
   display:flex;
   flex-direction: column;
   height:100%;
   .content {
     padding:0 34px;
   padding-bottom:74px;
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
 </style>
