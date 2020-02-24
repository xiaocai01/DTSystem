<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1.What do we know about Susanna Reid?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.She enjoys embarrassing her guests.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.She has started a new programme.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.She dislikes working early in the morning.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.She has had a light budget for her family.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.She is accustomed to the busy lifestyle.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 29)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.How does Matt Tebbutt help Susanna?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.He buys cooking materials for her.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.He prepares food for her kids.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.He assists her in cooking matters.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.He invites guest families for her.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.He teaches her to cut down the budgets.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1, 30)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3.What does the author intend to do in paragraph 4?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.Summarize the previous paragraphs.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.Provide some advice for the readers.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Add some background information.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Introduce a new topic for discussion.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.Highlight the intention of the passage.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 31)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4.What can be a suitable title for the text?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.Keeping Fit by Eating Smart</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.Balancing Our Daily Diet</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Making yourself a Perfect Chef</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Living better by eating better</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.Cooking Well for Less</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 32, true)">确定</el-button>
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
              <span class="one1">Good Morning Britain’s Susanna Reid is used to grilling guests on the sofa every morning, but <span class="two1">she is cooking up a storm in her latest role —<span class="three1">showing families how to prepare delicious and nutritious meals on a tight budge。</span></span></span>
            </div>
            <div class="centent">
              <span class="one2"><span class="two2">In Save Money: Good Food, she visits a different home each week and with the help of chef <span class="three2">Matt Tebbutt offers top tips on how to reduce food waste</span>, while preparing recipes for under £5 per family a day</span>. And the Good Morning Britain presenter says she’s been able to put a lot of what she’s leant into practice in her own home, preparing meals for sons, Sam,14, Finn,13, and Jack, 11.</span>
            </div>
            <div class="content">
              "We love Mexican churros, so I buy them on my phone from my local Mexican takeaway restaurant," she explains. "I pay £5 for a portion(一份), but Matt makes them for 26p a portion, because they are flour, water, sugar and oil. Everybody can buy takeaway food, but sometimes we’re not aware how cheaply we can make this food ourselves. "
            </div>
            <div class="content">
              <span class="one3">The eight-part series(系列节目), <span class="two3">Save Money: Good Food, follows in the footsteps of ITV’s Save Money: Good Health, which <span class="three3">gave viewers advice on how to get value from the vast range of health products on the market.</span></span></span>
            </div>
            <div class="content">
              <span class="one4">With food our biggest weekly household expense, Susanna and Matt spend time with a different family each week. <span class="two4">In tonight’s Easter special they come to the aid of a family in need of some delicious inspiration on a budget. <span class="three4">The team transforms the family’s long weekend of celebration with less expensive but still tasty recipes.</span></span></span>
            </div>

            <!-- <div class="content"></div> -->
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
      da: ['B', 'C', 'C', 'E'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['H篇'], //文章标题
      defaultTH: 0,
      errTip: '',
      isShow: false,
    }
  },
  methods: {
    tips(val, i) {
      this.isShow = true;
      if(val === 0){
        if(i === -1){
          this.errTip = '答对了, 答案为B，A与C选项都表明了Susanna的情感和态度，但是文章并没有表态，是过度推测，所以一定要仔细读题。D选项是讲到了她的家庭预算宽松，没有提及。最后一项讲她习惯于忙碌的生活方式，同样文章中也没有提及。从标题可以得知Susanna Reid是一个节目主持人，她以前一般都是坐着采访别人，但是现在她开始了新的节目。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'who is Susanna Reid? What has she been doing recently?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'These two are the words that can help you understand the passage better, Grill: If you grill someone about something, you ask a lot of questions about their ideas, actions, etc., often in an unpleasant way. On a tight budget: means the money that is available to a person over a period of time is not enough. ';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为B，A与C选项都表明了Susanna的情感和态度，但是文章并没有表态，是过度推测，所以一定要仔细读题。D选项是讲到了她的家庭预算宽松，没有提及。最后一项讲她习惯于忙碌的生活方式，同样文章中也没有提及。从标题可以得知Susanna Reid是一个节目主持人，她以前一般都是坐着采访别人，但是现在她开始了新的节目。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为C。由第二段第一句可知，Matt提供了关于如何减少食物浪费的提示，因此可以推断出这个是属于cooking matter的范围。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
         
        }else if(i === 2){
           $(`.two${val+1}`).addClass('active y');
          this.errTip = 'who is Matt Tebbutt? What are the things that Matt did and What are the things that Susanna did?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'That’s the key of the answer: Matt offered tips on how to reduce food waste, while preparing the recipe......here the subject of the sentence is Susanna, so the full sentence is “while she was preparing the recipe......”';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为C。由第二段第一句可知，Matt提供了关于如何减少食物浪费的提示，因此可以推断出这个是属于cooking matter的范围。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为 C, 由以上解释可知第四段主要是补充关于这个节目的背景信息。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the main idea of this paragraph? What’s the function of the attributive clause? ';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Paragraph 4 mainly introduces how the TV show Save money, Good food begin and what’s the function of it.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为 C, 由以上解释可知第四段主要是补充关于这个节目的背景信息。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为 E，根据文章大意以及最后一句话可得知，本文在讲如何用更少的经费做出更好吃的食物，所以答案应该是D，Cooking well for less.';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the main idea of the whole passage? Try to read the topic sentence of the each paragraph.';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The whole passage talks about food and how to cook food on a tight budget.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为 E，根据文章大意以及最后一句话可得知，本文在讲如何用更少的经费做出更好吃的食物，所以答案应该是E，Cooking well for less.';
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
          return false;
        }else{
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
          alert('恭喜答案所有题目');
        }, 5000);
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
