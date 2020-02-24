<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1.What does the author say about silence in conversations?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.It implies anger.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.It promotes friendship.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.It is culture-specific.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.It is content-based.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.It is form-dependent</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 25)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.Which of the following people might regard silence as a call for careful thought?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.The Chinese.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.The French.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.The Mexicans.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.The Russians.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.The Spanish</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1,26)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3.What does the author advise nurses to do about silence?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.Let it continue as the patient pleases.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.Break it while treating patients.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Evaluate its harm to patients.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Make use of its healing effects.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.Notice the use of silence</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 27)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4.What may be the best title for the text?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.Sound and Silence</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.What It Means to Be Silent</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Silence to Native Americans</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Speech Is Silver; Silence Is Gold</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.The importance of Silence</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 28, true)">确定</el-button>
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
              <span class="one1"><span class="two1"><span class="one4"><span class="two4"><span class="three4">The meaning of silence varies among cultural groups.</span></span></span> Silences may be thoughtful, or they may be empty when a person has nothing to say. A silence in a conversation may also show stubbornness, or worry. <span class="three1">Silence may be viewed by some cultural groups as extremely uncomfortable</span>; therefore attempts may be made to fill every gap (间隙) with conversation. <span class="three1">Persons in other cultural groups value silence and view it as necessary for understanding a person's needs.</span></span></span>
            </div>
            <div class="centent">
              <span class="one2"><span class="two2"><span class="one4"><span class="two4"><span class="three4">Many Native Americans value silence and feel it is a basic part of communicating among people, just as some traditional Chinese and Thai persons do.</span></span></span> Therefore, <span class="three2">when a person from one of these cultures is speaking and suddenly stops, what maybe implied(暗示) is that the person wants the listener to consider what has been said before continuing</span>. In these cultures, silence is a call for reflection.</span></span>
            </div>
            <div class="content">
              <span class="one4"><span class="two4"><span class="three4">Other cultures may use silence in other ways, particularly when dealing with conflicts among people or in relationships of people with different amounts of power.</span></span></span> For example, Russian, French, and Spanish persons may use silence to show agreement between parties about the topic under discussion. However, Mexicans may use silence when instructions are given by a person in authority rather than be rude to that person by arguing with him or her. In still another use, persons in Asian cultures may view silence as a sign of respect, particularly to an elder or a person in authority.
            </div>
            <div class="content">
              <span class="one3"><span class="one4"><span class="two4"><span class="three4">Nurses and other care-givers need to be aware of the possible meanings of silence when they come across the personal anxiety their patients may be experiencing.</span></span></span> <span class="two3">Nurses should recognize their own personal and cultural construction of silence so that a patient’s silence is not interrupted too early or allowed to go on unnecessarily. <span class="three3">A nurse who understands the healing(治愈) value of silence can use this understanding to assist in the care of patients from their own and from other cultures.</span></span></span>
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
      da: ['C', 'A', 'D', 'B'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['G篇'], //文章标题
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
          this.errTip = '答对了, 答案为：C, 由第一段的关键词some cultural groups and other cultural groups可知，沉默是因文化而异的。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'Does silence mean differently in conversation in different cultures?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is: Silence may be viewed by some cultural groups as extremely uncomfortable, Persons in other cultural groups value silence and view it as necessary for understanding a person"s needs.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C, 由第一段的关键词some cultural groups and other cultural groups可知，沉默是因文化而异的。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为：A, 由文中可知，本土美国人，中国人和泰国人都属于把沉默视为思考所必需的一类。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
         
        }else if(i === 2){
           $(`.two${val+1}`).addClass('active y');
          this.errTip = 'a call for careful thought means the need of time to consider something';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is: ... Native Americans ...... Chinese and Thai persons do. Therefore, when a person from one of these cultures is speaking and suddenly stops, what maybe implied is that the person wants the listener to consider what has been said before continuing.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：A, 由文中可知，本土美国人，中国人和泰国人都属于把沉默视为思考所必需的一类。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为：D, 关键句中提到能够理解沉默的治愈价值的话那就能这种理解充分用到患者身上去帮助他们。E选项是一个干扰项，只是关注还不够，还需要去应用，因此选D。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'here the author gave some suggestions about how the nurses should do when working?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is : A nurse who understands the healing(治愈) value of silence can use this understanding to assist in the care of patients from their own and from other cultures.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D, 关键句中提到能够理解沉默的治愈价值的话那就能这种理解充分用到患者身上去帮助他们。E选项是一个干扰项，只是关注还不够，还需要去应用，因此选D。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为：B, 本文首先提出沉默对于不同文化群体，它所代表的含义也不同，后面文章也围绕这一中心思想展开描述，因此答案应该是 What it means to be silent. ';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the main idea of each paragraph? Locate the topic sentences.';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'para1: The meaning of silence varies among cultural groups.  Para2: Many Native Americans value silence and feel it is a basic part of communicating among people, just as some traditional Chinese and Thai persons do.  Para3 :Other cultures may use silence in other ways, particularly when dealing with conflicts among people or in relationships of people with different amounts of power.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：B, 本文首先提出沉默对于不同文化群体，它所代表的含义也不同，后面文章也围绕这一中心思想展开描述，因此答案应该是 What it means to be silent. ';
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
          this.$router.push('/index7');
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
