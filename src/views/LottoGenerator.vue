<template>
  <div>
    <h1>로또 생성기</h1>
    <v-card class="d-flex pa-10 justify-center">
      <lotto-ball
        v-for="ball in winBalls"
        :key="ball"
        :number="ball"
      />
    </v-card>
    <p>보너스</p>
    <lotto-ball
      v-if="bonus"
      :number="bonus"
    />
    <v-btn
      v-if="redo"
      small
      elevation=""
      color=""
      @click="onClickRedo"
    >
      한번 더!
    </v-btn>
  </div>
</template>

<script>
import LottoBall from '../components/LottoBall.vue';

  function getWinNumbers() {
    const candidate = Array(45).fill().map((v, i) => i + 1);
    // fill(배열의 시작 인덱스부터 끝 인덱스까지 이전까지 정적인 값 하나로 채움
    const shuffle = [];
    while (candidate.length > 0) {
      shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
  }

const timeouts = [];

export default {
components:{
    LottoBall,
},
 data(){
     return{
         winNumbers: getWinNumbers(), // 처음에 7개를 다 뽑아내는 것
         winBalls: [], // WinNnmbers에 있는 값을 하나씩 추가해서, 시각적인 모습을 보여주기 위해
         bonus: null,
         redo: false,
     };
 },
 mounted(){
     this.showBalls();
 },
 beforeDestroy() {
     timeouts.forEach((t) => {
         clearTimeout(t);
     })
 },
 methods: {
     onClickRedo() {
         this.winNumbers = getWinNumbers();
         this.winBalls = [];
         this.bonus = null;
         this.redo = false;
         this.showBalls();
     },
     showBalls() {
    for (let i = 0; i < this.winNumbers.length - 1; i++){
        timeouts[i] = setTimeout(() => {
             this.winBalls.push(this.winNumbers[i]);
         }, (i + 1) * 1000);
     }
     timeouts[6] = setTimeout(() =>{
         this.bonus = this.winNumbers[6];
         this.redo = true;
     }, 7000);
     },
 },
};
</script>

<style scoped>

</style>
