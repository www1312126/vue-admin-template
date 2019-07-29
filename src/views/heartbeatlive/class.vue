<template>
  <div id="heartbeat-live-class">
    <div style="">
      <div class="class-info">
        <div class="school-class-name">
          <i class="icon"></i>
          <span>学校班级:</span>
          <span>中山华侨中学</span>
          <span>初二3班</span>
        </div>
        <div class="course-starttime">
          <i class="icon"></i>
          <span>上课时间:</span>
          <span>2019-06-19 15:36:33</span>
        </div>
        <div class="student-number">
          <i class="icon"></i>
          <span>上课人数:</span>
          <span>46</span>
          <span>人</span>
        </div>
        <div class="class-status">
          <i class="icon"></i>
          <span>状态:</span>
          <span>直播中</span>
        </div>
        <div class="btn-return">
          <el-button plain> < 返回</el-button>
        </div>
      </div>
      <div class="student-info">
        <ul class="student-info-list">
          <li class="student-info-item" v-bind:key="index" v-for="(item, index) in studentLiveList" @click="clickStudent(index)">
            <div class="student-info-item-name">
              <span>陈淮分</span>
            </div>
            <div class="student-info-item-status">
              <div class="timing">
                <span class="timing-value">23</span>
                <span class="timing-unit">分钟</span>
              </div>
              <div class="heartbeat">
                <span class="heartbeat-value">126</span>
                <span class="heartbeat-unit">bpm</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
#heartbeat-live-class{
  background-color: #313133;
  min-height: calc(100vh - 50px);
  padding: 20px;
  color: #fff;
  overflow: hidden;
}
.class-info {
  padding: 8px 0;
  overflow: hidden;
  position: relative;
  .school-class-name{
    position: relative;
    padding: 0 0 0 20px;
    margin: 0 15px 0 0;
    height: 30px;
    float: left;
    .icon {
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 2px;
      left: 0;
      background: url("../../assets/images/heartbeatliveclass/icon-schoolclass.png") no-repeat;
      background-size: 15px 15px;
    }
  }
  .course-starttime {
    position: relative;
    padding: 0 0 0 20px;
    margin: 0 15px 0 0;
    height: 30px;
    float: left;
    .icon {
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 2px;
      left: 0;
      background: url("../../assets/images/heartbeatliveclass/icon-starttime.png") no-repeat;
      background-size: 15px 15px;
    }
  }
  .student-number {
    position: relative;
    padding: 0 0 0 20px;
    margin: 0 15px 0 0;
    height: 30px;
    float: left;
    .icon {
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 2px;
      left: 0;
      background: url("../../assets/images/heartbeatliveclass/icon-studentnumber.png") no-repeat;
      background-size: 15px 15px;
    }
  }
  .class-status{
    position: relative;
    padding: 0 0 0 20px;
    margin: 0 15px 0 0;
    height: 30px;
    float: left;
    .icon {
      display: block;
      width: 15px;
      height: 15px;
      position: absolute;
      top: 2px;
      left: 0;
      background: url("../../assets/images/heartbeatliveclass/icon-class-status.png") no-repeat;
      background-size: 15px 15px;
    }
  }
  .btn-return {
    margin: 0 0 0 80px;
    float: left;
    height: 40px;
  }
}
.student-info {
  .student-info-list{
    overflow: hidden;
  }
}

.student-info-item {
  display: block;
  float: left;
  margin: 0 15px 18px 0;
  padding: 10px;
  width: 180px;
  height: 100px;
  background-color: #555557;
  border-radius: 6px;
  cursor: pointer;
  .student-info-item-name{
    height: 35px;
    line-height: 35px;
    font-size: 18px;
  }
  .student-info-item-status {
    position: relative;
    padding: 0 95px 0 0;
    height: 35px;
    .timing {
      padding: 12px 0 0 0;
      color: #949499;
    }
    .heartbeat {
      position: absolute;
      bottom: 0;
      right: 0;
      color: #FF5F45;
      .heartbeat-value{
        font-size: 28px;
      }
      .heartbeat-unit{
        font-size: 20px;
      }
    }
  }
}
</style>
<script>
export default {
  name: 'HeartbeatLiveClass',
  data() {
    const studentLiveList = []
    for (let p = 0; p < 25; p++) {
      studentLiveList.push({})
    }
    return {
      studentLiveList: studentLiveList
    }
  },
  methods: {
    clickStudent: function(index) {
      this.$router.push(
        {
          path: '/heartbeatlive/student',
          query: {
            id: 8
          }
        }
      )
    }
  }
}
</script>
