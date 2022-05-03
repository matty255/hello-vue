<template>
  <div>
    <v-card>
      <h1
        class="
          text-h5
          ma-5 pt-10"
      >
        반응 속도 측정 게임
      </h1>
      <h3
        class="
          text-h5
          ma-5"
      >
        Game play : 네모를 클릭 후, 초록색이 되면 다시 클릭하세요!
      </h3>
      <div
        class="d-flex justify-center mx-auto align-center"
      >
        <div
          id="screen"
          :class="state"
          @click="onClickScreen"
        >
          <p>{{ message }}</p>
        </div>
      </div>

      <v-card-actions>
        <div v-show="result.length">
          <!-- v-show는 뒤에 속성이 true값이여야 보인다. v-if는 아예 보여지지 않지만, v-show는 태그를 만들어서 display:none으로 처리한다.
    div대신 template를 사용할수도 있다. 그러면 없는 태그로 하는 한다. -->
          <div>평균 시간: {{ average }}ms</div>
        </div>
        <v-btn
          text
          color="secondary"
          @click="onReset"
        >
          리셋
        </v-btn>
      </v-card-actions>
    </v-card>
    <!-- template안에 바로 template을 못쓰기 때문에 여기에서는 div를 사용함.-->
  </div>
</template>

<script>
let startTime = 0; // 화면이 보여진 시간
let endTime = 0; // 내가 클릭한 시간
let timeout = null;
export default {
 data(){
     return{
         result: [],
         state: 'waiting',
         message: '클릭해서 시작하세요',
     };
 },
 computed: { // 일반데이터를 가공해서 사용할때 computed를 사용하는 것이 좋다, computed를 사용하는 이유는 저 값이 캐싱이 되기 때문에.
     average(){
         return this.result.reduce((a, c) => a + c, 0) / this.result.length || 0;
     }
 },
 methods: {
    onReset(){ // 리셋
        this.result = [];
     },
    onClickScreen(){ // 게임 로직
         if(this.state == 'waiting'){
             this.state = 'ready';
             this.message = '초록색이 되면 클릭하세요';
            timeout = setTimeout(() => {
                 this.state = 'now';
                 this.message = '지금 클릭!';
                 startTime = new Date(); // 초록색 창이 시작한 곳
             }, Math.floor(Math.random() * 1000) + 2000); // 2 ~ 3초
         } else if(this.state === 'ready'){
             clearTimeout(timeout); // 기존 timeout 없애기
             this.state = 'waiting';
             this.message = '너무 성급하시군요! 초록색이 되면 클릭하세요'
         } else if (this.state === 'now'){
             endTime = new Date(); // 누른 시간
             this.state = 'waiting';
             this.message = '클릭해서 시작하기'
             this.result.push(endTime - startTime);
         }
     }
 },
};
</script>

<!-- CSS -->
<!--style을 사용하기 위해서는 vue-style-loader, css-loader가 필요.
npm i vue-style-loader / css-loader-->
<!-- scoped : 이 컴포넌트 안에서만 이 CSS를 사용하고 싶다면 scoped를 사용하면 된다. -->
<style scoped>
    #screen {
        width: 300px;
        height: 200px;
        text-align: center;
        user-select: none;
        border-radius: 40px;
    }
    #screen.waiting {
        background-color: yellow;
    }
    #screen.ready {
        background-color: red;
        color: white;
    }
    #screen.now{
        background-color: greenyellow;
    }
    #screen p {
        color: goldenrod;
        margin-top: 80px;
        font-size: 30px;

    }

</style>
