<template>
  <div id="heartbeat-live">
    <div class="header data-title">
      <div class="data-wi" />
      <div class="data-txt">正在上课班级</div>
      <div class="data-txt liveclassnumber">{{ liveClassNumber }}</div>
      <div class="data-txt">个</div>
    </div>

    <div class="content">
      <!-- 小学 -->
      <div class="school-type">
        <div class="school-type-title primary">
          <span>小学</span>
        </div>
        <ul class="school-list">
          <li v-for="(item,index) in primarySchoolClassList" :key="index" class="school-item">
            <div class="top">
              <div class="school-name">
                <i class="icon" />
                <span>{{item.schoolName}}</span>
              </div>
              <div class="class-info">
                <div class="class-name">
                  <span>{{item.className}}</span>
                </div>

                <div class="lesson-status">
                  <div class="lesson-data student-number">
                    <i />
                    <span>46</span>
                    <span>人</span>
                  </div>
                  <div class="lesson-data elapsed-time">
                    <i />
                    <span>32</span>
                    <span>分钟</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="bottom-title">
                <span>平均数据</span>
              </div>

              <ul class="average-status-list">
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>平均心率</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">126</span>
                    <span class="average-status-item-data-unit">bpm</span>
                  </div>
                </li>
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>平均强度</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">36</span>
                    <span class="average-status-item-data-unit">%</span>
                  </div>
                </li>
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>练习密度</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">44</span>
                    <span class="average-status-item-data-unit">%</span>
                  </div>
                </li>
              </ul>

            </div>
          </li>

        </ul>
      </div>

      <!-- 初中 -->
      <div class="school-type">
        <div class="school-type-title middle">
          <span>初中</span>
        </div>
        <ul class="school-list">
          <li v-for="(item,index) in middleSchoolClassList" :key="index" class="school-item">
            <div class="top">
              <div class="school-name">
                <i class="icon" />
                <span>{{item.schoolName}}</span>
              </div>
              <div class="class-info">
                <div class="class-name">
                  <span>{{item.className}}</span>
                </div>

                <div class="lesson-status">
                  <div class="lesson-data student-number">
                    <i />
                    <span>46</span>
                    <span>人</span>
                  </div>
                  <div class="lesson-data elapsed-time">
                    <i />
                    <span>32</span>
                    <span>分钟</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="bottom-title">
                <span>
                  平均数据
                </span>
              </div>

              <ul class="average-status-list">
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>平均心率</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">126</span>
                    <span class="average-status-item-data-unit">bpm</span>
                  </div>
                </li>
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>平均强度</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">36</span>
                    <span class="average-status-item-data-unit">%</span>
                  </div>
                </li>
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>练习密度</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">44</span>
                    <span class="average-status-item-data-unit">%</span>
                  </div>
                </li>
              </ul>

            </div>
          </li>

        </ul>
      </div>

      <!-- 高中 -->
      <div class="school-type">
        <div class="school-type-title high">
          <span>高中</span>
        </div>
        <ul class="school-list">
          <li v-for="(item,index) in highSchoolClassList" :key="index" class="school-item">
            <div class="top">
              <div class="school-name">
                <i class="icon" />
                <span>{{item.schoolName}}</span>
              </div>
              <div class="class-info">
                <div class="class-name">
                  <span>{{item.className}}</span>
                </div>

                <div class="lesson-status">
                  <div class="lesson-data student-number">
                    <i />
                    <span>46</span>
                    <span>人</span>
                  </div>
                  <div class="lesson-data elapsed-time">
                    <i />
                    <span>32</span>
                    <span>分钟</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="bottom-title">
                <span>
                  平均数据
                </span>
              </div>

              <ul class="average-status-list">
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>平均心率</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">126</span>
                    <span class="average-status-item-data-unit">bpm</span>
                  </div>
                </li>
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>平均强度</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">36</span>
                    <span class="average-status-item-data-unit">%</span>
                  </div>
                </li>
                <li class="average-status-item">
                  <div class="average-status-item-title">
                    <span>练习密度</span>
                  </div>
                  <div class="average-status-item-data">
                    <span class="average-status-item-data-value">44</span>
                    <span class="average-status-item-data-unit">%</span>
                  </div>
                </li>
              </ul>

            </div>
          </li>

        </ul>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  name: 'HeartbeatLive',
  data() {
    const generateData = _ => {
      const data = []
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 == 0
        })
      }
      return data
    }
    return {
      data: generateData(),
      value: [1, 4, 5],
      liveClassNumber: 7,
      primarySchoolClassList: [{
        schoolName: '石岐中心小学',
        className: '一年级（一）班'
      },{
        schoolName: '中山实验小学',
        className: '二年级（五）班'
      },{
        schoolName: '石岐中心小学',
        className: '四年级（一）班'
      },{
        schoolName: '石岐中心小学',
        className: '四年级（三）班'
      },{
        schoolName: '石岐中心小学',
        className: '五年级（二）班'
      }],
      middleSchoolClassList: [{
        schoolName: '中山市第一中学',
        className: '初三（五）班'
      },{
        schoolName: '中山市纪念中学',
        className: '初二（三）班'
      }],
      highSchoolClassList: [{
        schoolName: '石岐高中',
        className: '高一（四）班'
      },{
        schoolName: '石岐高中',
        className: '高二（二）班'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
  #heartbeat-live{
    padding: 20px;
  }
  .data-title {
    height: 34px;
    line-height: 34px;
    display: flex;
    flex-direction: row;

    data-wi {
      display: inline-block;
      width: 8px;
      height: 34px;
      background: rgba(254, 139, 92, 1);

      margin-right: 8px;
    }
    .data-txt {
      font-size: 16px;
      font-family: SourceHanSansCN-Medium;
      font-weight: 600;
      color: rgba(67, 67, 67, 1);
    }
  }


  .data-title .data-txt.liveclassnumber{
    margin: 0 10px 0 10px;
    font-size: 22px;
  }
  .school-type{
    padding-top: 50px;
    position: relative;
    overflow: hidden;
  }
  .school-type-title{
    top: 19px;
    position: absolute;
    padding-left: 25px;
    width: 67px;
    height: 27px;
    line-height: 27px;
    color: #fff;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }
  .school-type-title.primary{
    background-color: #fc8b62;
  }
  .school-type-title.middle{
    background-color: #60aafb;
  }
  .school-type-title.high{
    background-color: #9562fa;
  }


  .school-item{
    background-color: #fff;
    width: 300px;
    float: left;
    margin: 0 40px 0 0;
  }
  .school-item .top{
    padding: 20px 20px 10px 20px;
    height: 120px;
  }

  .school-item .top .school-name{
    position: relative;
    font-size: 20px;
    padding: 0 0 0 25px;
    margin: 0 0 15px 0;
  }

  .school-item .top .school-name .icon{
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 1px;
    left: 0;
    background-color: red;
  }
  .school-item .top .class-info{
    position: relative;
    height: 30px;
    line-height: 30px;
    padding: 0 140px 0 0;
  }
  .school-item .top .class-info .lesson-status{
    position: absolute;
    right: 0;
    top: 0;
    height:30px;
    line-height: 30px;
  }
  .school-item .top .class-info .lesson-data{
    display: inline-block;
    position: relative;
    line-height: 24px;
    height: 24px;
    padding: 0 0 0 20px;
  }

  .school-item .top .class-info .lesson-data i{
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 16px;
    height: 16px;

  }

  .school-item .top .class-info .lesson-data.student-number i{
    background-color: #b6b6b6;
  }

  .school-item .top .class-info .lesson-data.elapsed-time i{
    background-color: #b6b6b6;
  }

  .school-item .bottom{
    height: 100px;
    background-color: #fafafa;
  }

  .school-item .bottom .bottom-title{
    line-height: 34px;
    color: #999;
    text-align: center;
  }
  .average-status-list{
    padding: 0 11px;

  }
  .average-status-item{
    float: left;
    width: 80px;
    height: 60px;
    margin: 0 0 0 10px;
    border: 1px solid #999;
  }
  .average-status-item-title{
    text-align: center;
    font-size: 14px;
    line-height: 28px;
    color: #333;
  }
  .average-status-item-data{
    color: green;
    text-align: center;
  }
  .average-status-item-data-value{
    font-size: 20px;
  }
  .average-status-item-data-unit{
    font-size: 16px;
  }
</style>
