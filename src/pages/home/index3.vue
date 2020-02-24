<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1. What can we infer about languages in hunter-gatherer times?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.They developed very fast.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.They were large in number.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.They had similar patterns.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.They were closely connected.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E. They disappeared rapidly.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 13)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.Which of the following best explains"dominant " underlined in paragraph 2？</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A. Complex.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B. Advanced.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.Powerful.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.Modem.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.Conventional</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1,14)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3.How many languages are spoken by less than 6, 000 people at present?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A.About 6,800</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B.About 3,400</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C.About 2,400</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D.About 1,200</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.About 1000</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 15)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4.What is the main idea of the text?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A. New languages will be created.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B People’s lifestyles are reflected in languages.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C. Human development results in fewer languages.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D. Geography determines language evolution.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E.More languages die out because of globalisation.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 16, true)">确定</el-button>
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
              <span class="one1"><span class="one4">Languages have been coming and going for thousands of years, but in recent times there has been less coming and a lot more going.</span> <span class="two1">When the the world was still populated by hunter-gatherers, small, tightly knit <span class="three1">groups developed their own patterns of speech independent of each other</span>. Some language experts believe that 10,000 years ago, when the world had just five to ten million people, <span class="three1">they spoke perhaps 12,000 languages between them.</span></span></span>
            </div>
            <div class="centent">
              <span class="one2"><span class="one4">Soon afterwards, many of those people started settling down to become farmers, and their languages too became more settled and fewer in number.</span> <span class="two2">In recent centuries, trade, industrialisation. the development of the nation-state and the spread of universal compulsory education, especially <span class="three2">globalisation and better communications in the past few decades, all have caused many Languages to disappear, and dominant languages such as English, Spanish and Chinese are increasingly taking over.</span></span></span>
            </div>
            <div class="content">
              <span class="one3"><span class="three3">At present, the world has about 6 800 languages</span>. The distribution of these languages is hugely uneven. The general rule is that mild zones have relatively few languages. Often spoken by many people while hot, wet zones have lots, often spoken by small numbers. <span class="two3">Europe has only around 200 Languages: the Americas about 1,000. Africa 2,400; and Asia and the Pacific perhaps 3,200, of which Papua New Guinea alone accounts for well over 800. The median number of speakers is a mere 6,000, which means that <span class="three3">half the worlds languages are spoken by fewer people than that.）</span></span></span>
            </div>
            <div class="content">
              <span class="one4">（Already well over 400 of the total of 6,800 languages are close to extinction, with only a few elderly speakers left</span>. Pick, at random, Busuu in Cameroon (eight remaining speakers), Chiapaneco in Mexico(150). Lipan Apache in the United States(two or three) or Wadjigu in Australia (one, with a question-mark): none of these seems to have much chance of survival.
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
      da: ['B', 'C', 'B', 'C'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['D篇'], //文章标题
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
          this.errTip = '答对了, 答案为B，由数字可知当时的语言种类数量多。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'How does the writer describe the languages in Hunter-gatherer times?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'they developed their own speech pattern which is not related to each other and they spoke 12,000 languages.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为B，由数字可知当时的语言种类数量多。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为C, 强大的。A选项为复杂的，B为高级的，先进的，D为现代的，E为传统的。';
        }else if(i === 1){
           $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What’s the meaning of taking over? Try to grasp the meaning by understanding this phrase.';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Look at the examples listed after the “dominant” languages, like English, Chinese, Spanish, we can know that these languages are spoken by a lot of people.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为C, 强大的。A选项为复杂的，B为高级的，先进的，D为现代的，E为传统的。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为B, 用6800除以2得到3400. 其他都是文章出现过的，但都是干扰项。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'There are a lot of numbers in the passage, but focus on the one that is asked.';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Now there are 6,800 kinds of languages and half of the world languages are spoken by fewer people than 6000. so this is a math problem.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为B, 用6800除以2得到3400. 其他都是文章出现过的，但都是干扰项。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为 C, 语言种类的数量不断在减少。其他选项基本上以偏概全，在做主旨大意题一定要找到主题句的关键词和短语，并且要正确理解其关系。';
        }else if(i === 1){
           $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What is the key words in this passage? Where can you find it?';
        }else if(i === 2){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Underline the topic sentence of each paragraph, we can see the key words are: less coming, more going, fewer in number, fewer languages, close to extinction. ';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为 C, 语言种类的数量不断在减少。其他选项基本上以偏概全，在做主旨大意题一定要找到主题句的关键词和短语，并且要正确理解其关系。';
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
          this.$router.push('/index4');
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
    .g.active{
      background-color: green;
      color: #fff;
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
