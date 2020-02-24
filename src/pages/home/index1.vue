<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1. What can we learn about the worms in the study?</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. They take plastics as their everyday food.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. They are newly evolved creatures.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. They can consume plastics.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. They wind up in landfills.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. They break down little plastics.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 5)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.According to Jennifer DeBruyn, the next step of the study is to_______ .</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. identify other means of the breakdown</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. finalize the process of breakdown</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. confirm the research findings</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. increase the breakdown speed</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. find out the source of the enzyme</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1, 6)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3. It can be inferred from the last paragraph that the chemical might .</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. help to raise worms</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. help make plastic bags</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. be used to clean the oceans</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. be produced in factories in future</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. be employed in the mountain</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 7)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4. What is the main purpose of the passage?</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. To explain a study method on worms.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. To introduce the diet of a special worm.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. To present a way to break down plastics.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. To propose new means to keep eco-balance.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. To argue the usefulness of the worm.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 8, true)">确定</el-button>
                </div>
              </div>
            </div>

            <div class="errTip" v-show="isShow">
              <el-alert
                title="Tips:"
                :description="errTip"
                type="info"
                :closable="false"
                effect="dark">
              </el-alert>
            </div>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="right">
            <div class="content">
              <span class="one1">Humans produce more than 300 million tons of plastic every year. Almost half of that winds up in landfills (垃圾填埋场), and up to 12 million tons pollute the oceans. <span class="two1">So far there is no effective way to get rid of it, but a new study suggests an answer may lie in the stomachs of some hungry worms.</span></span>
            </div>
            <div class="centent">
              <span class="one1"><span class="two1">Researchers in Spain and England recently found that <span class='three1'>the worms of the greater wax moth can break down polyethylene, which accounts for 40% of plastics.</span> The team left 100 wax worms on a commercial polyethylene shopping bag for 12 hours, and <span class='three1'>the worms consumed and broke down about 92 milligrams, or almost 3% of it.</span> To confirm that the worms’ chewing alone was not responsible for the polyethylene breakdown, the researchers made some worms into paste (糊状物) and applied it to plastic films. 14 hours later the films had lost 13% of their mass — apparently broken down by enzymes (酶) from the worms’ stomachs. Their findings were published in Current Biology in 2017.</span></span>
            </div>
            <div class="content">
              <span class="one1"><span class="two1">Federica Bertocchini, co-author of the study, says <span class='three1'>the worms’ ability to break down their everyday food — beeswax — also allows them to break down plastic.</span> ＂Wax is a complex mixture, but the basic bond in polyethylene, the carbon-carbon bond, is there as well, ＂she explains, ＂The wax worm evolved a method or system to break this bond. ＂</span></span>
            </div>
            <div class="content">
              <span class="one2"><span class="two2">Jennifer DeBruyn, a microbiologist at the University of Tennessee, who was not involved in the study, says it is not surprising that such worms can break down polyethylene. But compared with previous studies, she finds the speed of breaking down in this one exciting. <span class='three2'>The next step, DeBruyn says, will be to identify the cause of the breakdown. Is it an enzyme produced by the worm itself or by its gut microbes(肠道微生物)?</span></span></span>
            </div>
            <div class="content">
              <span class="one3"><span class="two3">Bertocchini agrees and hopes her team’s findings might one day help employ the enzyme to break down plastics in landfills. But she <span class='three3'>expects using the chemical in some kind of industrial process</span> — not simply ＂millions of worms thrown on top of the plastic.＂</span></span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import $ from 'jquery';
import Cookies from 'js-cookie';

export default {
  name: 'index1',
  data () {
    return {
      radio: '',  //选择答案
      frist: 0,
      da: ['C', 'E', 'D', 'C'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['B篇'], //文章标题
      defaultT: [5,6,7,8], //题号
      defaultTH: 0,
      errTip: '',
      isShow: false,
      isDisabled: [false, false, false, false, false],
      isDA: ['A', 'B', 'C', 'D', 'E']
    }
  },
  methods: {
    tips(val, i) {
      this.isShow = true;
      if(val === 0){
        if(i === -1){
          this.errTip = '答对了, 答案为：C。  A是过度推测，文中并没有陈述，B选项是无中生有，D选项是偷换概念，不是这种虫而是垃圾最终会被放置在垃圾填埋场。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'In which aspect does the author talk about the worms? Its functions? Its features? Does the author prove it? ';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is : the worms of the greater wax moth can break down polyethylene, which accounts for 40% of plastics. The worms’ ability to break down their everyday food — beeswax — also allows them to break down plastic.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C。  A是过度推测，文中并没有陈述，B选项是无中生有，D选项是偷换概念，不是这种虫而是垃圾最终会被放置在垃圾填埋场。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为：E. 下一步是要确认分解过程的原因，是什么引起分解的呢？后面还有一个疑问那就是是由于虫自身产生的酶还是由肠道微生物产生的？因此可以得出答案为B。E是一个比较强的干扰项，但是这个选项属于推测过度。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'Who is Jennifer DeBruyn? What’s her opinion about the future plan of the study?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'According to DeBruyn, The next step will be to identify the cause of the breakdown. Is it an enzyme produced by the worm itself or by its gut microbes? Here cause means the source or the reason which lead to the breakdown.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：E. 下一步是要确认分解过程的原因，是什么引起分解的呢？后面还有一个疑问那就是是由于虫自身产生的酶还是由肠道微生物产生的？因此可以得出答案为B。E是一个比较强的干扰项，但是这个选项属于推测过度。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为：D, 这种化学物质很可能被用于工业方面，因此它将来很可能会在工厂生产。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'Infer means to guess the implied meaning of the passage according to the information given, so it’s evidence-based. ';
          
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is: she expects using the chemical in some kind of industrial process.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D, 这种化学物质很可能被用于工业方面，因此它将来很可能会在工厂生产。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为：C, 从第一段中可以得知，这篇文章主要介绍了用最新的一种方式去降解塑料，文章主体也是介绍了降解的过程以及原因等。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
           $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What does the author try to do by writing this passage? Where can you find the answer?';
         
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Focus on the topic sentence of each paragraph, especially the first and the last one. For example, the first paragraph: So far there is no effective way to get rid of it, but a new study suggests an answer may lie in the stomachs of some hungry worms.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C, 从第一段中可以得知，这篇文章主要介绍了用最新的一种方式去降解塑料，文章主体也是介绍了降解的过程以及原因等。';
        }
      }
    },
    isSelect(val, pageName, isOver) {
      $('.active').removeClass('active');
      if(this.radio){
        this.recordDT({
          articleId: this.articleTitle[0],
          pageName: pageName,
          record: this.radio,
          userId: Cookies.get('userId'), 
          count: 1
        });
        if(this.radio !== this.da[val]){
          this.index = this.index + 1;
          this.tips(val, this.index);
          this.isDA.forEach((v, i) => {
            if(v === this.radio){
              this.isDisabled[i] = true;
            }
          })
          this.radio = '';
          return false;
        }else{
          this.isDisabled = this.isDisabled.map(v => v = false);
          this.radio = '';
          this.tips(val, -1);
          this.defaultTH = val + 1;
          this.index = 0;
          $('.active').removeClass('active');
          if(this.totalNum === this.frist){
            return false;
          }
          this.frist = this.frist + 1;
        }
      }

      if(isOver === true){
        setTimeout(() => {
          this.$router.push('/index1');
        }, 7000);
      }
    },
    // 记录学生答题
    recordDT(obj) {
      $.ajax({
        url: '/api/selectDA',
        dataType: 'JSON',
        data: obj,
        success(d) {
          console.log(d);
        },
        error(err){
          console.log(err);
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .view-page{
    .y.active{
      background-color: yellow;
      // color: #fff;
    }
    .r.active{
      background-color: red;
      color: #fff;
    }
    .g.active{
      background-color: green;
      color: #fff;
    }
    .title{
      .select{
        margin-bottom: 10px;
      }
      .btn{
        // text-align: center;
      }
    }
    .content{
      text-indent: 2em;
      margin-bottom: 10px;
    }
  }
</style>
