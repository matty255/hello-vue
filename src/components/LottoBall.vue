<template>
  <v-btn
    class="ball flex-grow-0 flex-shrink-0"
    fab
    dark

    :style="styleObject"
  >
    {{ number }}
  </v-btn>
</template>




<script>
export default {
    name: 'LottoBall',
    props: { // LottoGenerator컴포넌트가 LottoBall 컴포넌트를 사용하면 부모자식관계가 생기는데, 부모가 자식에게 데이터를 줄수 있는데, 그 역할을 하는 것이 props
    //대신 props는 자식이 데이터를 변경할수 없다. readonly라고 생각하면 됨.
    number: {
      type: Number,
      default: 0
    },
    },
    computed: {
        styleObject(){
        let background;
        if(this.number <= 10){
            background = 'red';
        }else if(this.number <= 20){
            background = 'orange';
        }else if(this.number <= 30){
            background = 'gold'
        }else if(this.number <= 40){
            background = 'blue';
        }else{
            background = 'green';
        }
        return{
            background,
        };
        }
    },
}
</script>

<style scoped>
    .ball{
        display: inline-block;
        width: 60px;
        height: 60px;
        line-height: 60px;
        font-size: 24px;
        text-align: center;
        margin: 5px;

    }
</style>
