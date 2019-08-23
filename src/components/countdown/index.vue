<template>
  <span class="hotTime">
    <span style="color:#111">限时高价</span>
    <span class="time">{{day}}</span>
    <span>天</span>
    <span class="time">{{hou}}</span>
    <span>时</span>
    <span class="time">{{min}}</span>
    <span>分</span>
    <span class="time">{{sec}}</span>
    <span>秒</span>
  </span>
</template>

<script>
export default {
  name: 'countdown',
  data() {
    return {
      day: '',
      hou: '',
      min: '',
      sec: ''
    }
  },
  props: {
    actEndTime: String
  },

  created() {
    this.countDown()
  },

  methods: {
    // 倒计时
    timeFormat(param) {
      return param < 10 ? '0' + param : param
    },
    countDown(it) {
      var interval = setInterval(() => {
        // 获取当前时间，同时得到活动结束时间数组
        let newTime = new Date().getTime() // 对结束时间进行处理渲染到页面
        let endTime = new Date(this.actEndTime).getTime()
        let obj = null // 如果活动未结束，对时间进行处理
        if (endTime - newTime > 0) {
          let time = (endTime - newTime) / 1000 // 获取天、时、分、秒
          let day = parseInt(time / (60 * 60 * 24))
          let hou = parseInt((time % (60 * 60 * 24)) / 3600)
          let min = parseInt(((time % (60 * 60 * 24)) % 3600) / 60)
          let sec = parseInt(((time % (60 * 60 * 24)) % 3600) % 60)
          obj = {
            day: this.timeFormat(day),
            hou: this.timeFormat(hou),
            min: this.timeFormat(min),
            sec: this.timeFormat(sec)
          }
        } else {
          // 活动已结束，全部设置为'00'
          obj = {
            day: '00',
            hou: '00',
            min: '00',
            sec: '00'
          }
          clearInterval(interval)
        }
        this.day = obj.day
        this.hou = obj.hou
        this.min = obj.min
        this.sec = obj.sec
      }, 1000)
    }
  }
}
</script>
