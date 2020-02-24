<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1. Some social app companies were to blame because_______ .</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. they didn't adequately check their users' registration</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. they organized photo trips to attract more youngsters</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. they encouraged youngsters to post more photos</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. they didn't stop youngsters from staying up late</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. they misled students to concentrate on social media</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 1)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.According to Life in Likes, as children grew, they became more anxious to________ .</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. circulate their posts quickly</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. know the qualities of their posts</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. use mobile phones for play</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. get more public approval</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. gain better performance in school</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1, 2)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3. What should parents do to solve the problem?</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. Communicate more with secondary schools.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. Urge media companies to create safer apps.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. Ask the experienced teachers for more advice.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. Forbid their children from visiting the web.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. Keep track of children's use of social media.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 3)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4. What does the passage mainly talk about?</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A. The influence of social media on children.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B. The importance of social media to children.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C. The problem in building a healthy relationship.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D. The measure to reduce risks from social media.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E. The determination to regulate the social media.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 4, true)">确定</el-button>
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
              Children as young as ten are becoming dependent on social media for their sense of self-worth, a major study warned.
            </div>
            <div class="centent">
              <span class="one1">It found many youngsters now measure their status by how much public approval they get online, often through “like”. Some change their behavior in real life to improve their image on the web. <span class="two1">The report into youngsThe report into youngsters aged from 8 to 12 was carried out by Children's Commissioner (专员）Anne Longfield. She said social media firms were exposing children to major emotional risks, with some youngsters starting secondary school ill-equipped to cope with the tremendous pressure they faced online.</span></span>
            </div>
            <div class="content">
              <span class="one1"><span class="two1">Some social apps were popular among the children even though <span class="three1">they supposedly require users to be at least 13</span>.The youngsters admitted planning trips around potential photo-opportunities and then messaging friends—and friends of friends —to demand “likes” for their online posts.</span></span>
            </div>
            <div class="content">
              <span class="one2">The report found that youngsters felt their friendships could be at risk if they did not respond to social media posts quickly, and around the clock.</span>
            </div>
            <div class="content">
              <span class="one2"><span class="two2">Children aged 8 to 10 were "starting to feel happy" when others liked their posts. However, those in the 10 to 12 age group were "concerned with how many people like their posts", <span class="three2">suggesting a “need” for social recognition that gets stronger the older they become.</span></span></span>
            </div>
            <div class="content">
              <span class="one2"><span class="two2">Miss Longfield warned that a generation of children risked growing up "worried about their appearance and image as a result of the unrealistic lifestyles they follow on platforms, and increasingly anxious about switching off due to the constant demands of social media.</span></span>
            </div>
            <div class="content">
              <span class="one2">She said: "Children are using social media with family and friends and to play games when they are in primary school. But what starts as fun usage of apps turns into tremendous pressure in real social media interaction at secondary school."</span>
            </div>
            <div class="content">
              <span class="one2">As their world expanded. she said, children compared themselves to others online in a way that was "hugely damaging in terms of their self-identity, in terms of their confidence, but also in terms of their ability to develop themselves"</span>
            </div>
            <div class="content">
              Miss Longfield added: "Then there is this push to connect—if you go offline, will you miss something, will you miss out, will you show that you don't care about those people you are following, all of those come together in a huge way at once."
            </div>
            <div class="content">
              However, they still did not know how to cope with mean-spirited jokes, or the sense of incompetence they might feel if they compared themselves to celebrities or more brilliant friends online. The report said they also faced pressure to respond to messages at all hours of the day—especially at secondary school when more youngsters have mobile phones.
            </div>
            <div class="content">
              <span class="one3"><span class='two3'>The Children’s Commissioner said schools and parents must now do more to prepare children for the emotional minefield they faced online.</span> And she said social media companies must also "take more responsibility". They should either monitor their websites better so that children do not sign up too early, or they should adjust their websites to the needs of younger users.</span>
            </div>
            <div class="content">
              <span class="one3"><span class="three3">“It’s also hugely important for parents to know which apps their children are using.”</span></span>
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
  name: 'HelloWorld',
  data () {
    return {
      radio: '',  //选择答案
      frist: 0,
      da: ['A', 'D', 'E', 'A'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['A篇'], //文章标题
      defaultT: [1, 2, 3, 4, 5], //题号
      defaultTH: 0,
      isShow: false,
      errTip: '',
      isDisabled: [false, false, false, false, false],
      isDA: ['A', 'B', 'C', 'D', 'E']
    }
  },
  methods: {
    tips(val, i) {
      this.isShow = true;
      if(val === 0){
        if(i === -1){
          this.errTip = '答对了, 答案为：A。软件公司由于没有限制可使用用户的最低年龄而受到谴责。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What are the things that the social app companies did not do so well?';
         
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The social app companies supposedly require users to be at least 13.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：A。软件公司由于没有限制可使用用户的最低年龄而受到谴责。';
        }
      }else if(val === 1){
        if(i === -1){
           this.errTip = '答对了, 答案为：D。从文中可知，8到10岁的孩子使用这个社交软件是非常开心的，但是10到12岁这一群体则担心有多少人会喜欢他们展示的空间，随着年龄长大，他们更想获得他人的认可。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What do the children feel When they start to use the app? Does this feeling change as they grow older?';
          
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Children aged 8 to 10 were "starting to feel happy" when others liked their posts. However, those in the 10 to 12 age group were "concerned with how many people like their posts", suggesting a “need” for social recognition that gets stronger the older they become.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D。从文中可知，8到10岁的孩子使用这个社交软件是非常开心的，但是10到12岁这一群体则担心有多少人会喜欢他们展示的空间，随着年龄长大，他们更想获得他人的认可。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为：E。父母需要知道孩子正在使用什么社交软件，因此应该选择E。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
         $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the problem? What should parents do?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The Children’s Commissioner said schools and parents must now do more to prepare children for the emotional minefield they faced online. //It’s also hugely important for parents to know which apps their children are using.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：E。父母需要知道孩子正在使用什么社交软件，因此应该选择E。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为：A。文章的主旨大意讲述了社交媒体对孩子的影响以及各方应该如何帮助克服不良影响。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'How many parts can this passage be divided into? ';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The passage can be divided into three parts, phenomenon-- influence--measure.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：A。文章的主旨大意讲述了社交媒体对孩子的影响以及各方应该如何帮助克服不良影响。';
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
