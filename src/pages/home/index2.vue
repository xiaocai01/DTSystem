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
                  <el-radio v-model="radio" label="A">A. They take plastics as their everyday food.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B. They are newly evolved creatures.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C. They can consume plastics.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D. They wind up in landfills.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E. They break down little plastics.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 9)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.According to Jennifer DeBruyn, the next step of the study is to_______ .</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A. identify other means of the breakdown</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B. finalize the process of breakdown</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C. confirm the research findings</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D. increase the breakdown speed</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E. find out the source of the enzyme</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1,10)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3. It can be inferred from the last paragraph that the chemical might .</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A. help to raise worms</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B. help make plastic bags</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C. be used to clean the oceans</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D. be produced in factories in future</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E. be employed in the mountain</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 11)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4. What is the main purpose of the passage?</div>
                <div class="select">
                  <el-radio v-model="radio" label="A">A. To explain a study method on worms.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="B">B. To introduce the diet of a special worm.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="C">C. To present a way to break down plastics.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="D">D. To propose new means to keep eco-balance.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" label="E">E. To argue the usefulness of the worm.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(3, 12, true)">确定</el-button>
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
              <span class="one1">While famous foreign, architects are invited to lead the designs of landmark buildings in China such as the new CCTV tower and the National Center for the Performing Arts, <span class='three1'>many excellent Chinese architects are making great efforts to take the center stage.</span></span>
            </div>
            <div class="centent">
              <span class="one1"><span class="two1"><span class='three1'>Their efforts have been proven fruitful.</span> Wang Shu, a 49-year-old Chinese architect, won the 2012 Pritzker Architecture Prize -which is often referred to as the Nobel Prize in architecture-on February 28. He is the first Chinese citizen to win this award.</span></span>
            </div>
            <div class="content">
              <span class="one2">Wang serves as head of the Architecture Department at the China Department at the China Academy of Art (CAA). His office is located at the Xiangshan campus of the university in Hangzhou, Zhejiang Province. Many buildings on the campus are his original creations.</span>
            </div>
            <div class="content">
              <span class="one2"><span class="two2">The style of the campus is quite different from that of most Chinese universities. <span class='three2'>Many visitors were amazed by the complex architectural space and abundant building types. The curves （曲线）of the buildings perfectly match the rise and fall of hills, forming a unique view.</span></span></span>
            </div>
            <div class="content">
              <span class="one3"><span class="two3">Wang collected more than 7 million abandoned bricks of different ages. He asked the workers to use traditional techniques to make the bricks into walls, roofs and corridors.</span> <span class='three3'>This creation attracted a lot of attention thanks to its mixture of modern and traditional Chinese elements.</span></span>
            </div>
            <div class="content">
              <span class="one3">Wang’s works show a deep understanding of <span class='three3'>modern architecture</span> and a good knowledge of <span class='three3'>traditions</span>. Through such <span class='three3'>a balance</span>, he had created a new type of Chinese architecture, said Tadao Ando, the winner of the1995 Pritzker Prize.</span>
            </div>
            <div class="content">
              <span class="one4"><span class="two4">Wang believes traditions should not be sealed in glass boxes at museums. “That is only evidence that traditions once existed, ”</span> he said.</span>
            </div>
            <div class="content">
              <span class="one4">“Many Chinese people have a misunderstanding of traditions. They think tradition means old things from the past. In fact, tradition also refers to the things that have been developing and that are still being created, “he said.</span>
            </div>
            <div class="content">
              <span class="one4"><span class="two4">“Today, many Chinese people are learning Western styles and theories rather than focusing on Chinese traditions. Many people tend to talk about traditions without knowing what they really are,” said Wang.</span></span>
            </div>
            <div class="content">
              <span class="one4"><span class="two4"><span class='three4'>The study of traditions should be combined, with practice</span>. Otherwise, the recreation of traditions would be artificial and empty, he said.</span></span>
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
      da: ['E', 'C', 'D', 'D'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['C篇'], //文章标题
      defaultT: [5,6,7,8], //题号
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
          this.errTip = '答对了, 答案为：E, 答案关键部分是take the center stage，意思是登上了中心的舞台，这说明中国艺术家越来越受到国际的认可。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'How does the writer think about the foreigner architects and Chinese architects? And how does he prove it?';
          
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The writer thinks that Chinese architects are making great efforts to take the center stage.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：E, 答案关键部分是take the center stage，意思是登上了中心的舞台，这说明中国艺术家越来越受到国际的认可。';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 答案为：C, 人们并不是因为某一个特征吸引住，而是被这些特征所组合成的独特景象锁震撼了。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What does the CAA Xiangshan campus attract people most?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'People were amazed by the complex architectural space and abundant building types, curves of the buildings perfectly match the rise and fall of hills, and all of these form a unique view.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：C, 人们并不是因为某一个特征吸引住，而是被这些特征所组合成的独特景象锁震撼了。';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 答案为：D，The harmony(和谐) of old and new，其他选项都是以偏概全，在做题时注意区分。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'Why does the writer think Wang’s architectural design could attract a lot of people’s attention?';
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'The key is: thanks to its mixture of modern and traditional Chinese elements, a balance a deep understanding of modern architecture and a good knowledge of traditions';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D，The harmony(和谐) of old and new，其他选项都是以偏概全，在做题时注意区分。';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 答案为：D，Wang believes traditions should not be sealed in glass boxes at museums, 排除B，AC排除，并没有在文中提及，E有提及，但是只是学习还不够，还要与实践结合，给传统文化注入新的元素进行创造。';
        }else if(i === 1){
          $(`.one${val+1}`).addClass('active g');
          this.isShow = false;
          
        }else if(i === 2){
          $(`.two${val+1}`).addClass('active y');
          this.errTip = 'What are the suggestions Wang put forward about Chinese traditions?';
          
        }else if(i === 3){
          $(`.three${val+1}`).addClass('active r');
          this.errTip = 'Pay attention to this sentence: The study of traditions should be combined, with practice.';
        }else{
          $(`.three${val+1}`).addClass('active r');
          this.errTip = '答案为：D，Wang believes traditions should not be sealed in glass boxes at museums, 排除B，AC排除，并没有在文中提及，E有提及，但是只是学习还不够，还要与实践结合，给传统文化注入新的元素进行创造。';
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

      if(isOver === true && this.radio == this.da[val]){
        setTimeout(() => {
          this.$router.push('/index3');
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
