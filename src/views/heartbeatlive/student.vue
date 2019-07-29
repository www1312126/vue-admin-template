<template>
  <div id="heartbeat-live-student">
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
    <!--中层-->
    <div class="student-info">
      <div class="personal-info">
        <div class="photo"></div>
        <div style="height: 30px;">
          <div class="student-name">
            <span>冯丽余</span>
          </div>
          <div class="gender"></div>
          <div class="age">
            <span>12</span>
            <span class="unit">岁</span>
          </div>
        </div>
        <div class="student-number">
          <span>系统学号</span>
          <span>20190646556</span>
        </div>
      </div>
      <div class="physical-info">
        <div class="physical-item">
          <div class="title">
            <span>实时心率</span>
          </div>
          <div class="content color-orange">
            <span class="value">126</span>
            <span class="unit">bpm</span>
          </div>
        </div>

        <div class="physical-item">
          <div class="title">
            <span>运动强度</span>
          </div>
          <div class="content color-blue">
            <span class="value">62</span>
            <span class="unit">%</span>
          </div>
        </div>

        <div class="physical-item">
          <div class="title">
            <span>练习密度</span>
          </div>
          <div class="content color-green">
            <span class="value">74</span>
            <span class="unit">%</span>
          </div>
        </div>

        <div class="physical-item">
          <div class="title">
            <span>步数</span>
          </div>
          <div class="content color-grey">
            <span class="value">3132</span>
            <span class="unit">步</span>
          </div>
        </div>

        <div class="physical-item">
          <div class="title">
            <span>卡路里</span>
          </div>
          <div class="content color-grey">
            <span class="value">322</span>
            <span class="unit">cal</span>
          </div>
        </div>

        <div class="physical-item">
          <div class="title">
            <span>50米跑平均成绩</span>
          </div>
          <div class="content color-grey">
            <span class="value">12.9</span>
            <span class="unit">秒</span>
          </div>
        </div>

      </div>
    </div>

    <el-row style="margin: 20px 0 32px 0; background:#fff;padding:16px 16px 0;">
      <line-chart :chart-data="lineChartData" />
    </el-row>

  </div>
</template>
<style lang="scss" scoped>
#heartbeat-live-student{
  background-color: #F2F4F5;
  min-height: calc(100vh - 50px);
  padding: 20px;
  overflow: hidden;
}
.class-info {
  padding: 13px 0;
  overflow: hidden;
  position: relative;
  color: #434343;
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
      background: url("../../assets/images/heartbeatlivestudent/icon-schoolclass.png") no-repeat;
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
      background: url("../../assets/images/heartbeatlivestudent/icon-starttime.png") no-repeat;
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
      background: url("../../assets/images/heartbeatlivestudent/icon-studentnumber.png") no-repeat;
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
      background: url("../../assets/images/heartbeatlivestudent/icon-class-status.png") no-repeat;
      background-size: 15px 15px;
    }
  }
  .btn-return {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.student-info {
  padding: 20px 30px;
  background-color: #fff;
  overflow: hidden;
  .personal-info {
    padding: 0 0 0 70px;
    position: relative;
    height: 60px;
    .photo {
      position: absolute;
      height: 60px;
      width: 60px;
      top: 0;
      left: 0;
      background-color: #F2F4F5;
    }
    .student-name {
      float: left;
      margin: 0 40px 0 0;
      height: 30px;
      font-size: 24px;
    }
    .gender {
      float: left;
      padding: 0;
      margin: 5px 15px 5px 0;
      width: 15px;
      height: 15px;
      background-color: #FF9991;
    }
    .age {
      float: left;
      font-size: 20px;
      height: 30px;
      .unit {
        font-size: 16px;
      }
    }
    .student-number{
      padding: 10px 0 0 0;
      color: #434343;
    }
  }
  .physical-info {
    padding: 18px 0;
  }
  .physical-item {
    padding: 8px 0 0 10px;
    width: 143px;
    height: 88px;
    border: 1px solid #DCDCDC;
    text-align: center;
    float: left;
    margin: 0 14px 0 0;
    border-radius: 5px;
    .title {
      color: #898989;
      line-height: 30px;
    }
    .content{
      .value{
        font-size: 30px;
        font-weight: bold;
      }
      .unit{
        font-size: 16px;
      }
    }
    .content.color-orange {
      color: #FFAD2C;
    }
    .content.color-blue {
      color: #3F8DF8;
    }
    .content.color-green {
      color: #3ED7B8;
    }
    .content.color-grey {
      color: #626262;
    }
  }
}

</style>
<script>
import LineChart from './components/LineChart'
const lineChartData = {
  newVisitis: {
    actualData: [120, 82, 91, 154, 162, 140, 145, 133, 123, 119, 104, 97, 94, 85]
  }
}
export default {
  components: {
    LineChart
  },
  mounted() {
    this.courseId = this.$route.query.id
  },
  data() {
    return {
      /**
       * 课堂ID
       */
      courseId: null,
      lineChartData: lineChartData.newVisitis
    }
  },
  methods: {
  }
}
</script>
