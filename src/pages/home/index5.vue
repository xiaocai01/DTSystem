<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1.What do the classic rules mentioned in the text apply to?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.News reports.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.Research papers.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Private e-mails. </el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Daily conversations．</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.Subject conference.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 21)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.What can we infer about people like Debbie Downer?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.They’re socially inactive.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.They’re good at telling stories.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.They’re inconsiderate of others.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.They’re careful with their words.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.They’re fond of sharing stories</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1,22)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3.Which tended to be the most e-mailed according to Dr. Berger’s research?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.Sports news. </el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.Science articles.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Personal accounts.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Financial reviews.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.Non-fiction novels.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 23)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4.What can be a suitable title for the text?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.Sad Stories Travel Far and Wide</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.Online News Attracts More People</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Reading Habits Change with the Times</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Good News Beats Bad on Social Networks</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.The News Catch People’s Eyeball</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 24, true)">确定</el-button>
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
              <span class="one1"><span class="two1">Bad news sells. If it bleeds, it leads. No news is good news, and good news is no news. Those are the classic rules for the <span class="three1">evening broadcasts and the morning papers.</span> But now that information is being spread and monitored(监控) in different ways, researchers are discovering new rules. By tracking people’s e-mails and online posts, scientists have found that good news can spread faster and farther than disasters and sob stories.</span></span>
            </div>
            <div class="centent">
              <span class="one2"><span class="two2">“The …if it bleeds’ rule works for mass media,” says Jonah Berger, a scholar at the University of Pennsylvania. “<span class="three2">They want your eyeballs and don’t care how you’re feeling</span>. But when you share a story with your friends, you care a lot more how they react. You don’t want them to think of you as a <span class="three2">Debbie Downer</span>.”</span></span>
            </div>
            <div class="content">
              <span class="one3">Researchers analyzing word-of-mouth communication—e-mails, Web posts and reviews, face-to-face conversations—found that it tended to be more positive than negative(消极的), but that didn’t necessarily mean people preferred positive news. <span class="two3">Was positive news shared more often simply because people experienced more good things than bad things? To test for that possibility, Dr. Berger looked at how people spread a particular set of news stories: thousands of articles on The New York Times’ website. He and a Penn colleague analyzed the “most e-mailed” list for six months. <span class="three3">One of his first findings was that articles in the science section were much more likely to make the list than non-science articles</span>. He found that science amazed Times’ readers and made them want to share this positive feeling with others.</span></span>
            </div>
            <div class="content">
              <span class="one4"><span class="two4">Readers also tended to share articles that were exciting or funny, or that inspired negative feelings like anger or anxiety, but not articles that left them merely sad. They needed to be aroused(激发) one way or the other, and they preferred good news to bad. The more positive an article, <span class="three4">the more likely it was to be shared, as Dr. Berger explains in his new book, “Contagious: Why Things Catch On.”</span></span></span>
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
      da: ['A', 'C', 'B', 'D'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['F篇'], //文章标题
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
          this.errTip = '答对了, 答案为：A。所有选项中只有A新闻报道符合evening broadcasts and the morning paper范围内的。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the classic rule? Where can we apply to?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is : Those are the classic rules for the evening broadcasts and the morning papers. Which of the options belong to the evening broadcasts and the morning paper?';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：A。所有选项中只有A新闻报道符合evening broadcasts and the morning paper范围内的。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为：C。由文章可知，Debbie Downer是一个不考虑他人感受的人，因此选C。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
         
        }else if(i === 2){
           $(`.two${val+1}`).addClass('active y');
          this.errTip = 'Who is Debbie Downer? What’s special about him? Why would the author mention him here?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is: They want your eyeballs and don’t care how you’re feeling. From this sentence, we can know Debbie Downer is someone who don’t care about others.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C。由文章可知，Debbie Downer是一个不考虑他人感受的人，因此选C。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为：B。 由文中可知，科学类的文章被转发最多的。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the result of Dr. Berger’s research? ';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is: One of his first findings was that articles in the science section were much more likely to make the list than non-science articles. Make the list: appear on the list.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：B。 由文中可知，科学类的文章被转发最多的。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为：D。从主题句可知，文章在传达：good news spread faster than sad news，因此答案选D。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the main idea of the each paragraph?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Try to locate the first sentence or the last sentence of each paragraph. For example, By tracking people’s e-mails and online posts, scientists have found that good news can spread faster and farther than disasters and sob stories. // He found that science amazed Times’ readers and made them want to share this positive feeling with others.// The more positive an article, the more likely it was to be shared';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D。从主题句可知，文章在传达：good news spread faster than sad news，因此答案选D。';
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
          this.$router.push('/index6');
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
