<template>
  <div class="view-page">
    <h1 class="articleTitle">{{articleTitle[0]}}</h1>
    <el-container style="padding: 0 10px;">
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="left">
            <div v-if="defaultTH == 0">
              <div class="title">
                <div class="select">1.What is the text mainly about?_______.</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A.The effort made to balance wildlife.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B.Plant diversity in the Yellowstone area.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C.The conflict between farmers and gray wolves.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D.The reintroduction of wolves to Yellowstone Park.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E.The consequences of the absence of wolves.</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[5]" label="F">F.Wildlife research in the United States.</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(0, 1)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 1">
              <div class="title">
                <div class="select">2.What does the underlined word “reintroduced” in paragraph 1 mean?________ .</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A.started</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B.mentioned</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C.added</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D.presented</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E.brought</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[5]" label="F">F.pioneered</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(1, 2)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 2">
              <div class="title">
                <div class="select">3.What did the disappearance of gray wolves bring about?________</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A.Damage to local ecology</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B.A decline in the park’s income</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C.Preservation of vegetation</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D.An increase in the variety of animals</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E.Protection of the domestic animals</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[5]" label="F">F.A balanced ecology of wildlife</el-radio>
                </div>
                <div class="btn">
                  <el-button type="primary" @click="isSelect(2, 3)">确定</el-button>
                </div>
              </div>
            </div>
            <div v-if="defaultTH == 3">
              <div class="title">
                <div class="select">4.What is the author’s attitude towards the Yellowstone wolf project?_______</div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[0]" label="A">A.Doubtful</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[1]" label="B">B.Positive</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[2]" label="C">C.Disapproving</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[3]" label="D">D.Uncaring</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[4]" label="E">E.Neutral</el-radio>
                </div>
                <div class="select">
                  <el-radio v-model="radio" :disabled="isDisabled[5]" label="F">F.Sarcastic</el-radio>
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
              After years of heated debate, gray wolves were reintroduced to Yellowstone National Park. Fourteen wolves were caught in Canada and transported to the park. By last year, the Yellowstone wolf population had grown to more than 170 wolves.
            </div>
            <div class="centent">
              Gray wolves once were seen here and there in the Yellowstone area and much of the continental United States, but they were gradually displaced by human development. By the 1920s, wolves had practically disappeared from the Yellowstone area. They went farther north into the deep forests of Canada, where there were fewer humans around.
            </div>
            <div class="content">
              The disappearance of the wolves had many unexpected results. Deer and elk populations-major food sources for the wolf-grew rapidly. These animals consumed large amounts of vegetation(植被), which reduced plant diversity in the park. In the absence of wolves, coyote populations also grew quickly. The coyotes killed a large percentage of the park’s red foxes, and completely drove away the park’s beavers.
            </div>
            <div class="content">
              As early as 1966, biologists asked the government to consider reintroducing wolves to Yellowstone Park. They hoped that wolves would be able to control the elk and coyote problems. Many farmers opposed the plan because they feared that wolves would kill their farm animals or pets.
            </div>
            <div class="content">
              The government spent nearly 30 years coming up with a plan to reintroduce the wolves. The U.S. Fish and Wildlife Service carefully monitors and manages the wolf packs in Yellowstone. Today, the debate continues over how well the gray wolf is fitting in at Yellowstone. Elk, deer, and coyote populations are down, while beavers and red foxes have made a comeback. The Yellowstone wolf project has been a valuable experiment to help biologists decide whether to reintroduce wolves to other parts of the country as well.
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
      da: ['D', 'E', 'A', 'B'], //文章答案
      index: 0,
      totalNum: 4,
      articleTitle: ['202002A篇文章'], //文章标题
      defaultTH: 0,
      isShow: false,
      errTip: '',
      isDisabled: [false, false, false, false],
      isDA: ['A', 'B', 'C', 'D', 'E'],
      isSelectDA: []
    }
  },
  methods: {
    tips(val, i) {
      this.isShow = true;
      if(val === 0){
        if(i === -1){
          this.errTip = '答对了, 正确答案为D，通过五段的主题句可以清晰看到首尾段的主题句是相呼应的，都是讲到reintroduce the wolves，因此答案选D。本题用到了注意首尾段，找主题句，以及关注连接词的使用三种阅读策略，你掌握了吗？';
        }else if(i === 1){
          this.errTip = 'Your answer is wrong, please try again';
        }else if(i === 2){
          this.errTip = 'Pay attention to the first and last paragraph (注意文章的开头结尾)。文章的首尾段可以帮助你掌握文章的主要信息';
        }else if(i === 3){
          this.errTip = 'Find the topic sentence (找到主题句)，think about their position. 每一段的主题句很可能在首句，或者是尾句，但是有时会在文章中出现，通常会有一些连接词，特别是表示转折的词，这部分往往是作者想要表达的重点';
        }else if(i === 4){
          this.errTip = '根据刚刚的提示，第一段的主题句在句首gray wolves were reintroduced to Yellowstone National Park，第二段主题句在句中的转折处but后面they were gradually displaced by human development，第三段的主题句在句首The disappearance of the wolves had many unexpected results，第四段主题句在句首biologists asked the government to consider reintroducing wolves to Yellowstone Park，第五段的主题句也在句首The government spent nearly 30 years coming up with a plan to reintroduce the wolves';
        }else{
          this.errTip = '答对了, 正确答案为D，通过五段的主题句可以清晰看到首尾段的主题句是相呼应的，都是讲到reintroduce the wolves，因此答案选D。本题用到了注意首尾段，找主题句，以及关注连接词的使用三种阅读策略，你掌握了吗？';
        }
      }else if(val === 1){
        if(i === -1){
          this.errTip = '答对了, 正确答案为E，这里的reintroduce是带入，带进的意思，即为brought。这道题使用了构词法，句与句之间的逻辑关系以及通读上下文语境，你掌握了吗？';
        }else if(i === 1){
          this.errTip = 'Your answer is wrong, please try again';
        }else if(i === 2){
          this.errTip = 'Guess the word by word-formation (用构词法猜词). 请分析这个词的构成有什么特点';
        }else if(i === 3){
          this.errTip = 'reintroduce这个词是由 re-与introduce 组合而成的，re-这个前缀是再一次，重新的意思。Introduce是介绍的意思，回到句中看wolves被介绍到Yellowstone吗？它们应该是什么关系呢？';
        }else if(i === 4){
          this.errTip = 'guess the word by context (通读上下文语境来理解其意思)，语境提供非常重要的信息，提问处的后一句是wolves were caught in Canada and transported to the park，可以看出这里这里的introduce不是介绍的意思，根据上下文语境应该是一个实际行动，尤其可以通过transported这个词的提示';
        }else{
          this.errTip = '答对了, 正确答案为E，这里的reintroduce是带入，带进的意思，即为brought。这道题使用了构词法，句与句之间的逻辑关系以及通读上下文语境，你掌握了吗？';
        }
      }else if(val === 2){
        if(i === -1){
          this.errTip = '答对了, 正确答案为A，根据第三段的内容可以知道狼的消失会造成鹿数量的激增，进而造成大量植被被吃掉，而且狼的缺失也会让生物链中的受狼制约的动物coyote激增，导致与beaver的数量也急剧下降。因此答案应该是当地生态系统的伤害。本题用到了带题读文，找主题词以及根据已知推断未知三种策略，你掌握了吗？';
        }else if(i === 1){
          this.errTip = 'Your answer is wrong, please try again';
        }else if(i === 2){
          this.errTip = 'Find the answer with the question in the article (带着问题到文章寻找答案)， find the topic word (找到主题词)';
        }else if(i === 3){
          this.errTip = '由题目可定位到第三段，主题句是关于The disappearance of the wolves had many unexpected results，那么到底是什么结果呢，关键部分为animal consume vegetation, one animal killed another animal, and the third animal were driven away';
        }else if(i === 4){
          this.errTip = 'Infer the unknown content according to the known content (根据已知文章内容推断未知信息). 根据每个选项给出的信息进行判断，在使用推断策略时，请注意一定要基于文章给出的信息来推测，不要根据主观想法进行判断。例如选项B，很多人会认为wolf的消失应该会带来经济上的损失，所以就选了它。请注意看第三段句子与句子之间的逻辑关系';
        }else{
          this.errTip = '答对了, 正确答案为A，根据第三段的内容可以知道狼的消失会造成鹿数量的激增，进而造成大量植被被吃掉，而且狼的缺失也会让生物链中的受狼制约的动物coyote激增，导致与beaver的数量也急剧下降。因此答案应该是当地生态系统的伤害。本题用到了带题读文，找主题词以及根据已知推断未知三种策略，你掌握了吗？';
        }
      }else if(val === 3){
        if(i === -1){
          this.errTip = '答对了, 正确答案为B，positive。其他选项的意思分别为A疑惑的，C不赞成的，D不关心的，E中立的，F讽刺的。本题用到了带题读文，根据文章体裁预测两种阅读策略，你掌握了吗？';
        }else if(i === 1){
          this.errTip = 'Your answer is wrong, please try again';
        }else if(i === 2){
          this.errTip = 'Find the answer with the question in the article (带着问题到文章寻找答案)，快速定位，找到文章的关键词。此题问的是作者的态度，因此需要定位到作者的言语';
        }else if(i === 3){
          this.errTip = '根据文章的题材预测，这篇文章是一篇介绍Yellowstone重新引进狼的说明文，那么说明文的特点就是阐述事实，可见文章一般前面都是在描述客观事实，并没有涉及作者态度。因此这里需要学会分辨 事实与观点，例如狗需要水和食物维持生命 （这是一个事实），狗是世界上最好的宠物 （这是一个观点），事实往往是真实正确，能被证实的；但是观点是指一个人的想法，态度，是没有经过证实的';
        }else if(i === 4){
          this.errTip = '根据上面的提示，我们可以找到作者发表态度的句子在最后一段The Yellowstone wolf project has been a valuable experiment to help biologists……从valuable这个词可以看出作者对这个计划的态度是好的';
        }else{
          this.errTip = '答对了, 正确答案为B，positive。其他选项的意思分别为A疑惑的，C不赞成的，D不关心的，E中立的，F讽刺的。本题用到了带题读文，根据文章体裁预测两种阅读策略，你掌握了吗？';
        }
      }
    },
    isSelect(val, pageName, isOver) {
      if(!this.radio) return false;
      this.isSelectDA.push(this.radio);
      if(this.radio !== this.da[val]){
        this.index = this.index + 1;
        this.tips(val, this.index);
        this.isDA.forEach((v, i) => {
          if(v === this.radio){
            this.isDisabled[i] = true;
          }
        })
        this.radio = '';
      }else{
        let len = this.isSelectDA.length;
        this.tips(val, -1);
        // this.defaultTH = val + 1;
        this.index = 0;
        if(len === 0){
          this.recordDT({
            articleId: this.articleTitle[0],
            pageName: pageName,
            record: this.radio,
            userId: Cookies.get('userId'), 
            count: 1
          });
        }else{
          this.recordDT({
            articleId: this.articleTitle[0],
            pageName: pageName,
            record: this.isSelectDA.toString(),
            userId: Cookies.get('userId'), 
            count: 1
          });
        }
        this.radio = '';
        if(isOver === true){
          this.$router.push('/success');
        }
      }
      
    },
    // 记录学生答题
    recordDT(obj) {
      const self = this;
      const loading = self.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      $.ajax({
        url: '/api/selectDA',
        dataType: 'JSON',
        data: obj,
        success(d) {
          console.log(d);
          self.defaultTH++;
          self.isSelectDA = [];
          self.isDisabled = self.isDisabled.map(v => v = false);
          loading.close();
        },
        error(err){
          loading.close();
          this.$message.error('网络出错啦，请刷新再试一下');
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
