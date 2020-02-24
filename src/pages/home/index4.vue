<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1.The first two paragraphs suggest that ____________.</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A．a small number of measles cases can start a dangerous trend</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B．the outbreak of measles attracts the public attention</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C．anti-vaccine movement has its medical reasons</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D．information about measles spreads quickly</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.  herd immunity protects the vulnerable people</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 17)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.Herd immunity works well when ____________.</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A．exemptions are allowed</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B．several vaccines are used together</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C．the whole neighborhood is involved in</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D．new regulations are added to the state laws</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.  people receive vaccine as early as possible</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1,18)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3.What is the main reason for the comeback of measles?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.The overuse of vaccine.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B．The lack of medical care.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C．The features of measles itself.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D．The vaccine opt-outs of some people.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E. The misinformation of measles</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 19)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4.What is the purpose of the passage?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.To introduce the idea of exemption.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.To discuss methods to cure measles.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.To stress the importance of vaccination.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.To appeal for equal rights in medical treatment.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.To explain the danger of measles </el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 20, true)">确定</el-button>
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
              <span class="one1"><span class="two1">Measles(麻疹), which once killed 450 children each year and disabled even more, was nearly wiped out in the United States 14 years ago by the universal use of the MMR vaccine(疫苗). But the disease is making a comeback, caused by a growing anti-vaccine movement and misinformation that is spreading quickly. Already this year, 115 measles cases have been reported in the USA, compared with 189 for all of last year.</span></span>
            </div>
            <div class="centent">
              <span class="three1">The numbers might sound small, but they are the leading edge of a dangerous trend</span>. <span class="one2"><span class="two2">When vaccination rates are very high, as they still are in the nation as a whole, everyone is protected. This is called “herd immunity”, which protects the people who get hurt easily, including those who KS5U can’t be vaccinated for medical reasons, babies too young to get vaccinated and people on whom the vaccine doesn’t work.</span></span>
            </div>
            <div class="content">
              <span class="one2"><span class="two2">But <span class="three2">herd immunity works only when nearly the whole herd joins in</span>. When some refuse vaccination and seek a free ride, immunity breaks down and everyone is in even bigger danger.</span></span>
            </div>
            <div class="content">
              <span class="one3">That’s exactly what is happening in small neighborhoods around the country from Orange County, California, where 22 measles cases were reported this month, to Brooklyn, N.Y., where a 17-year-old caused an outbreak last year.</span>
            </div>
            <div class="content">
              <span class="one3"><span class="two3">The resistance to vaccine has continued for decades, and it is driven by a real but very small risk. Those who refuse to take that risk selfishly make others suffer.</span></span>
            </div>
            <div class="content">
              <span class="two3"><span class="three3">Making things worse are state laws that make it too easy to opt out(决定不参加) of what are supposed to be required vaccines for all children entering kindergarten.</span> Seventeen states allow parents to get an exemption（豁免), sometimes just by signing a paper saying they personally object to a vaccine.</span>
            </div>
            <div class="content">
              Now, several states are moving to tighten laws by adding new regulations for opting out. But no one does enough to limit exemptions.
            </div>
            <div class="content">
              <span class="one4"><span class="two4">Parents ought to be able to opt out only for limited medical or religious reasons. But personal opinions? Not good enough. <span class="three4">Everyone enjoys the life-saving benefits vaccines provide, but they’ll exist only as long as everyone shares in the risks.</span></span></span>
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
      da: ['A', 'C', 'D', 'C'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['E篇'], //文章标题
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
          this.errTip = '答对了, 答案为：A, 文章提到尽管数量少，但是它很可能会引起很严重的后果，因此呼吁人们要重视。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the main idea of the first two paragraph?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'From this sentence, “The numbers might sound small, but they are the leading edge of a dangerous trend” here we can see “but”, so the relation between the former and the latter is on the opposite side. Leading edge means the significant part.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：A, 文章提到尽管数量少，但是它很可能会引起很严重的后果，因此呼吁人们要重视。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为：C, 当整个社区都参与进来的时候Herd community才能发挥最佳的作用。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What does the Herd community mean?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is “herd immunity works only when nearly the whole herd joins in”';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C, 当整个社区都参与进来的时候Herd community才能发挥最佳的作用。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为：D, 疟疾死灰复燃的最主要原因就是人们不愿参与到疫苗接种的的活动去，因此这是最主要的原因。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'How many reasons are mentioned in the passage? What is the main reason?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = ' The key is in paragraph 1 and 6, for example: para1 “But the disease is making a comeback, caused by a growing anti-vaccine movement and misinformation that is spreading quickly”, para 6 Making things worse are state laws that make it too easy to opt out(决定不参加) of what are supposed to be required vaccines for all children entering kindergarten.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D, 疟疾死灰复燃的最主要原因就是人们不愿参与到疫苗接种的的活动去，因此这是最主要的原因。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为：C, 本文作者在描述疟疾死灰复燃的各种原因后，强调大家要珍惜疫苗给人们带来的好处，不要随意放弃疫苗接种。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the main idea of the passage? Was the author trying to entertain or narrate a story? What’s the author’s intention? ';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key lies in the first and last paragraph, first para focus on the reason why measles came back, and the last para appeal to people to pay more attention to the importance of vaccine. ';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C, 本文作者在描述疟疾死灰复燃的各种原因后，强调大家要珍惜疫苗给人们带来的好处，不要随意放弃疫苗接种。';
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
          this.$router.push('/index5');
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
