<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="data-screen-left">
          <div class="data-title">
            <div class="data-wi" />
            <div class="data-txt">中山市辖区统计</div>
          </div>
          <div class="data-map org-tree">
            <el-tree :data="townList" @node-click="handleNodeClick"></el-tree>
          </div>

        </div>
        <!-- 调研对象 -->
        <div class="data-table">
          <table class="data-list" cellpadding="0" cellspacing="0">
            <thead>
              <th>调研对象</th>
              <th>数量</th>
            </thead>
            <tbody>
              <tr v-show="!checkedObject.schoolStatus.hidden">
                <td>学校</td>
                <td>{{checkedObject.schoolStatus.number}}所</td>
              </tr>
              <tr v-show="!checkedObject.classStatus.hidden">
                <td>班级</td>
                <td>{{checkedObject.classStatus.number}}个</td>
              </tr>
              <tr v-show="!checkedObject.studentStatus.hidden">
                <td>学生</td>
                <td>{{checkedObject.studentStatus.number}}人</td>
              </tr>
            </tbody>
          </table>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="data-screen-center">
          <div class="data-title-list">
            <div class="data-tit-left">
              <div class="data-width" />
              <div class="data-txttxt">达标人数</div>
            </div>
          </div>
          <div class="data-text-student-number">
            <div class="data-num">测量人次</div>
            <div class="data-number">
              <span class="data-bg">0</span>
              <span class="data-bg">0</span>
              <span class="data-bg">0</span>
              <span class="data-dou">,</span>
              <span class="data-bg">5</span>
              <span class="data-bg">1</span>
              <span class="data-bg">6</span>
              <span class="data-dou">,</span>
              <span class="data-bg">0</span>
              <span class="data-bg">2</span>
              <span class="data-bg">7</span>
            </div>
          </div>
          <div class="data-tong">
            <img src="../../assets/images/datascreen/tongji.jpg" style="height:auto;width: 80%">
          </div>
          <div class="data-xinlist">
            <div class="data-xin">
              <div style="padding: 0">
                <span>平均心率>135</span>
              </div>
              <div style="padding: 0">
                <span>平均运动强度>50%</span>
              </div>
              <div style="padding: 0">
                <span>平均练习密度>50%</span>
              </div>
            </div>
            <div class="data-xin">
              <div>
                <i class="icon heartbeat"></i>
                <span class="data-ceil">{{checkedObject.stuHeartRateReachStandardRate ? checkedObject.stuHeartRateReachStandardRate + '%' : '无数据'}}</span>
              </div>
              <div>
                <i class="icon intensity"></i>
                <span class="data-ceil">{{checkedObject.stuTrainIntensityReachStandardRate ? checkedObject.stuTrainIntensityReachStandardRate + '%' : '无数据'}}</span>
              </div>
              <div>
                <i class="icon density"></i>
                <span class="data-ceil">{{checkedObject.stuTrainDesityReachStandardRate ? checkedObject.stuTrainDesityReachStandardRate + '%' : '无数据'}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="data-sheb">
          <div class="data-title">
            <div class="data-wi" />
            <div class="data-txt">设备使用</div>
          </div>
          <div class="data-map">
            <img src="../../assets/images/datascreen/tongyuan.jpg" style="height:auto;width: 80%">
          </div>
        </div>
      </el-col>
      <el-col :span="9">
        <div class="data-screen-right">
          <div class="data-title-list">
            <div class="data-tit-left">
              <div class="data-width" />
              <div class="data-txttxt">训练数据</div>
            </div>
          </div>
          <div class="data-text-student-number" >
            <div class="data-num">测量人次</div>
            <div class="data-number">
              <span class="data-bg">0</span>
              <span class="data-bg">0</span>
              <span class="data-bg">0</span>
              <span class="data-dou">,</span>
              <span class="data-bg">5</span>
              <span class="data-bg">1</span>
              <span class="data-bg">6</span>
              <span class="data-dou">,</span>
              <span class="data-bg">0</span>
              <span class="data-bg">2</span>
              <span class="data-bg">7</span>
            </div>
          </div>
          <div class="data-table" style="margin-top:18px;">
            <table class="data-list" cellpadding="0" cellspacing="0">
              <thead>
                <th>测量项目</th>
                <th>测量人次</th>
                <th>合格率</th>
                <th>优秀率</th>
              </thead>
              <tbody>
                <tr>
                  <td class="first-td">
                    <i class="icon"></i>
                    <span>50米跑</span>
                  </td>
                  <td>60233人</td>
                  <td>
                    <span class="med-bule">13%</span>
                  </td>
                  <td>
                    <span class="med-ce">69%</span>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <i class="icon"></i>
                    <span>50米跑</span>
                  </td>
                  <td>60233人</td>
                  <td>
                    <span class="med-bule">13%</span>
                  </td>
                  <td>
                    <span class="med-ce">69%</span>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <i class="icon"></i>
                    <span>50米跑</span>
                  </td>
                  <td>60233人</td>
                  <td>
                    <span class="med-bule">13%</span>
                  </td>
                  <td>
                    <span class="med-ce">69%</span>
                  </td>
                </tr>
                <tr>
                  <td class="first-td">
                    <i class="icon"></i>
                    <span>50米跑</span>
                  </td>
                  <td>60233人</td>
                  <td>
                    <span class="med-bule">13%</span>
                  </td>
                  <td>
                    <span class="med-ce">69%</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!--<div class="data-table">
            <table class="data-list" cellpadding="0" cellspacing="0">
              <thead>
                <th>自定义项目</th>
                <th>练习人次</th>
                <th>练习平均成绩</th>
                <th>30日对比</th>
              </thead>
              <tbody>
                <tr>
                  <td>100米跑</td>
                  <td>60233人</td>
                  <td>13.6秒</td>
                  <td>
                    <img src="../../assets/images/datascreen/xiaji.png" style="margin-right:5px">
                    <span>0.6秒</span>
                  </td>
                </tr>
                <tr>
                  <td>100米跑</td>
                  <td>60233人</td>
                  <td>13.6秒</td>
                  <td>
                    <img src="../../assets/images/datascreen/shangsheng.png" style="margin-right:5px">
                    <span>0.6秒</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>-->
        </div>
        <div class="data-tit-ri">
          <div class="data-title-list">
            <div class="data-tit-left">
              <div class="data-width"></div>
              <div class="data-txttxt">BMI指数</div>
            </div>
            <!--<div class="data-tit-rig">
              <div class="data-qieimg">
                <img src="../../assets/images/datascreen/select.png">
                <span class="data-qie">肥胖</span>
              </div>
              <div class="data-qieimg">
                <img src="../../assets/images/datascreen/selectout.png">
                <span class="data-qie">低体重</span>
              </div>
            </div>-->
          </div>
          <div class="data-tit-bottom">
            <div class="data-sex">
              <div>
                <img src="../../assets/images/datascreen/man.png">
              </div>
              <div class="data-sex-cou">
                <p class="data-count">男生肥胖率</p>
                <div style="padding: 15px 0">
                  <span class="data-zhishu">67.4</span>
                  <span class="data-man">%</span>
                </div>
                <div>
                  <span>12644</span>
                  <span>人</span>
                </div>
              </div>
            </div>
            <div class="data-sex">
              <div>
                <img src="../../assets/images/datascreen/wemen.png">
              </div>
              <div class="data-sex-cou">
                <p class="data-count">女生肥胖率</p>
                <div style="padding: 15px 0">
                  <span class="data-zhishu">67.4</span>
                  <span class="data-man">%</span>
                </div>
                <div>
                  <span>12644</span>
                  <span>人</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss" scoped>
  .data-sheb {
    padding: 0 15px 5px 10px;
    background: #fff;
  }
  .data-tit-ri {
    padding: 0 15px 11px 10px;
    background: #fff;
  }
  .data-qieimg {
    margin-left: 8px;
    margin-right: 8px;
    img {
      width: 12px;
    }
  }
  .data-sex-cou {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
  }
  .data-qie {
    font-size: 12px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(58, 58, 58, 1);
  }
  .data-sex {
    width: 40%;
    justify-content: center;
    img {
      width: 60px;
      height: 120px;
    }
  }
  .data-cou {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .data-count {
    font-size: 8px;
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(77, 77, 77, 1);
  }
  .data-zhishu {
    font-size: 16px;
    font-family: DIN-Medium;
    font-weight: 600;
    color: #66BDFF;
  }
  .data-man {
    font-size: 13px;
    font-weight: 500;
    color: #66BDFF;
  }
  .data-tit-bottom {
    padding-bottom: 16px;
    padding-top: 16px;
  }
  .data-tit-bottom,
  .data-sex {
    display: flex;
    flex-direction: row;
  }
  .med-bule {
    color: #63c94c;
  }
  .med-ce {
    color: #ffb93e;
  }
  .data-xinlist {
    margin-bottom: 12px;
  }
  .data-xin {
    display: flex;
    flex-direction: row;
    div {
      position: relative;
      padding: 0 0 0 22px;
      width: 33.3%;
      text-align: left;
      margin-top: 5px;
      .icon {
        position: absolute;
        top: 2px;
        left: 0;
        display: block;
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
      }
      .icon.heartbeat{
        background-image: url('../../assets/images/datascreen/icon-heartbeat.png');
      }
      .icon.intensity{
        background-image: url('../../assets/images/datascreen/icon-intensity.png');
      }
      .icon.density{
        background-image: url('../../assets/images/datascreen/icon-density.png');
      }
    }
    .data-border {
      display: inline-block;
      width: 15px;
      height: 15px;
      background: rgba(63, 141, 248, 1);
      border-radius: 50%;
      position: relative;
      top: 2px;
    }
    .cheng {
      background: rgba(254, 116, 84, 1);
    }
    .lan {
      background: rgba(62, 215, 184, 1);
    }
    span {
      font-size: 10px;
      font-family: SourceHanSansCN-Regular;
      font-weight: 400;
      color: rgba(67, 67, 67, 1);
    }
    .data-ceil {
      font-family: DIN-Medium;
      font-weight: 600;
      color: rgba(67, 67, 67, 1);
    }
  }
  .data-tong{
    height: 310px;
    text-align: center;
  }
  .data-tong img {
    width: 100%;
  }
  .data-dou {
    font-size: 28px;
    color: #737373;
    position: relative;
    top: 5px;
  }
  .data-number .data-bg {
    display: inline-block;
    width: 1rem;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background: url("../../assets/images/datascreen/tongbg.png") no-repeat;
    font-size: 18px;
    font-family: DIN-Bold;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    position: relative;
    bottom: 4px
  }
  .data-screen-left,
  .data-screen-center,
  .data-screen-right {
    height: 480px;
    background: #fff;
    padding: 10px 15px 5px 10px;
  }
  .data-title {
    height: 34px;
    line-height: 34px;
    display: flex;
    flex-direction: row;
    background: #f1f1f1;
    .data-wi {
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
  .org-tree{
    height: 400px;
  }
  .data-map{
    text-align: center;
  }
  .data-map img {
    width: 100%;
  }
  .data-list {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    font-size: 14px;
    th {
      height: 40px;
      color: #434343;
      background: #f1f1f1;
      font-weight: 400;
    }
    tr {
      height: 55px;
      color: #606060;
      border-bottom: 1px solid #ddd;
      .first-td{
        padding: 0 0 0 24px;
        position: relative;
        .icon{
          position: absolute;
          display: block;
          left: 20px;
          top: 16px;
          width: 20px;
          height: 20px;
          background: url("../../assets/images/datascreen/physicaltest.png") no-repeat;
          background-size: 20px 20px;
        }
      }
    }
    tr:last-child {
      border: 0;
    }

  }
  .data-title-list {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 34px;
    line-height: 34px;
    background: #f1f1f1;
  }
  .data-width {
    width: 8px;
    height: 34px;
    background: rgba(254, 139, 92, 1);
    margin-right: 8px;
  }
  .data-tit-left,
  .data-tit-rig
  {
    display: flex;
    flex-direction: row;
  }
  .data-text-student-number {
    padding: 12px 0;
    text-align: center;
    .data-num{
      display: inline-block;
      vertical-align: text-bottom;
    }
    .data-number{
      display: inline-block;
    }
  }

  .data-txttxt {
    font-size: 16px;
    font-family: SourceHanSansCN-Medium;
    font-weight: 600;
    color: rgba(67, 67, 67, 1);
  }
  .data-num {
    font-family: SourceHanSansCN-Regular;
    font-weight: 400;
    color: rgba(67, 67, 67, 1);
    font-size: 14px;
    margin-right: 5px;
  }
</style>
<script>
import axios from 'axios'

export default {
  name: 'DashboardAdmin',
  components: {},
  mounted() {
    const _this = this
    axios({
      url: '/edu/v1/datascreen/getDataScreenData',
      method: 'get',
      data: {}
    }).then(res => {
      const result = res.data
      if (!result.success) {
        _this.$message('/edu/v1/datascreen/getDataScreenData, ' + result.errCode + ': ' + result.errMsg)
        return
      }
      /**
       * 需要一个递归函数获取下面的组织
       */
      _this.townList = result.data
    }).catch(err => {
      console.error(err)
    })
  },
  data() {
    return {
      townList: [{
        label: '中山市',
        type: 'council',
        children: [{
          label: '石岐区',
          type: 'town',
          children: [{
            label: '第二实验小学',
            type: 'school',
            children: [{
              label: '初一',
              type: 'grade',
              children: [{
                label: '初一(二)班',
                type: 'class',
                studentNumber: 24506
              }]
            }]
          }]
        }]
      }],
      /**
       * 选中的组织对象
       */
      checkedObject: {
        /**
         * 平均心率达标率
         */
        stuHeartRateReachStandardRate: null,
        /**
         * 平均练习密度达标率
         */
        stuTrainDesityReachStandardRate: null,
        /**
         * 平均运动强度达标率
         */
        stuTrainIntensityReachStandardRate: null,
        /**
         * 下面的组织情况（学校、班级、学生）统计
         */
        schoolStatus: {
          text: '学校',
          number: 0,
          hidden: false
        },
        classStatus: {
          text: '班级',
          number: 0,
          hidden: false

        },
        studentStatus: {
          text: '学生',
          number: 0,
          hidden: false
        }
      }
    }
  },
  methods: {
    handleNodeClick(data) {
      const _this = this
      if (data.type === 'grade' || data.type === 'class') {
        _this.checkedObject.schoolStatus.hidden = true
      } else {
        _this.checkedObject.schoolStatus.hidden = false
      }
      const schoolNumber = _this.getOrgNumber(data, 'school')
      _this.checkedObject.schoolStatus.number = schoolNumber
      const classNumber = _this.getOrgNumber(data, 'class')
      _this.checkedObject.classStatus.number = classNumber
      const studentStatus = _this.getOrgNumber(data, 'student')
      _this.checkedObject.studentStatus.number = studentStatus
      /**
       * 求平均心率、平均运动强度、平均练习密度
       */
      let totalStandardRateParams = {
        totalRate: null,
        validNumber: 0
      }

      /**
       * 平均心率
      totalStandardRateParams = _this.getTotalStandardRate(data, 'stuHeartRateReachStandardRate')
      _this.checkedObject.stuHeartRateReachStandardRate = totalStandardRateParams.totalRate / totalStandardRateParams.validNumber

      /**
       * 平均运动强度
       */
      totalStandardRateParams = _this.getTotalStandardRate(data, 'stuTrainIntensityReachStandardRate')
      _this.checkedObject.stuTrainIntensityReachStandardRate = totalStandardRateParams.totalRate / totalStandardRateParams.validNumber

      /**
       * 平均练习密度
       */
      totalStandardRateParams = _this.getTotalStandardRate(data, 'stuTrainDesityReachStandardRate')
      _this.checkedObject.stuTrainDesityReachStandardRate = totalStandardRateParams.totalRate / totalStandardRateParams.validNumber
    },
    /**
     * 递归获统计学校数量
     * @param data
     */
    getOrgNumber(data, type) {
      let number = 0
      if (data.type === type) {
        number++
      }
      const children = data.children
      for (let i = 0; i < children.length; i++) {
        const child = children[i]
        number += this.getOrgNumber(child, type)
      }
      return number
    },
    /**
     * 求平均心率、
     * @param data
     * @param standardRatePropName
     */
    getTotalStandardRate(data, standardRatePropName) {
      if (data.type === 'class') {
        if (data.stuHeartRateReachStandardRate) {
          return {
            totalRate: data[standardRatePropName],
            validNumber: 1
          }
        } else {
          return {
            totalRate: null,
            validNumber: 0
          }
        }
      } else {
        let totalRate = 0
        let validNumber = 0
        const children = data.children
        for (let i = 0; i < children.length; i++) {
          const child = children[i]
          const result = this.getTotalStandardRate(child, standardRatePropName)
          if (result.validNumber > 0) {
            totalRate += result.totalRate
            validNumber += result.validNumber
          }
        }
        return {
          totalRate: totalRate,
          validNumber: validNumber
        }
      }
    }
  }
}
</script>
