<template>
  <div>
    <v-card-title
      class="text-h3"
    >
      {{ word }}
    </v-card-title>
    <form @submit="onSubmitForm">
      <input
        ref="answer"
        v-model="value"
        type="text"
        :style="inputStyle"
      >
      <v-btn
        type="submit"
        class="ma-2"
      >
        입력!
      </v-btn>
    </form>
    <div>{{ result }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      word: '감자',
      result: '',
      value: '',
      inputStyle: {
        border: '1px solid',
        borderColor: 'orange',
        height: '40px',
        outline : 'none'
      }
    };
  },
 methods: {
            onSubmitForm(e){
                e.preventDefault();
                if(this.word[this.word.length - 1] === this.value[0]){
                    this.result = '딩동댕';
                    this.word = this.value;
                    this.value = '';
                    this.$refs.answer.focus();
                }else{
                    this.result='땡';
                    this.value='';
                    this.$refs.answer.focus();
                }
            }
        },

};
</script>

