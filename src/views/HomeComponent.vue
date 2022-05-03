<template>
  <div>
    <div
      class="mx-auto"
      align="center"
    >
      <v-list-item-title class="text-h3 mt-5">
        Vue 문법 중요한거 5가지 외우기!
      </v-list-item-title>
      <p
        class="text-h4 font-weight-bold mb-3 pt-10"
        align="left"
      >
        1. template 문법
      </p>

      <ul
        align="left"
        class="text-h6"
      >
        <li>v-html은 문자열 형태의 html을 브라우저가 html로 처리하게끔 해줍니다. v-text는 단순 문자열로 나옵니다.</li>
        <li>v-bind로 html의 속성값도 바인딩할 수 있습니다. 약어로 :로도 사용할 수 있으며 무척 자주 사용합니다.</li>
        <li>v-model을 사용하면 input으로부터 data에 값을 넣을 수 있습니다. input에는 select같은 것도 포함되니 잘 알아둡시다.</li>
        <li>v-show와 v-if를 사용하면 조건부렌더링을 할 수 있습니다.</li>
        <li>v-on은 이벤트핸들러입니다. 약어는 @으로 가장 자주 쓰이는 문법 중 하나입니다. key를 이벤트에 할당하는 방식이 리액트보다 쉽습니다.</li>
      </ul>
      <p
        class="text-h4 font-weight-bold mb-3 pt-10"
        align="left"
      >
        2. computed 문법
      </p>

      <ul
        align="left"
        class="text-h6"
      >
        <li>반환 값이 data 속성이고, 반환값이 똑같다면 로직을 수행하지 않고 결과 값을 반환함으로서 렌더링을 최적화할 수 있습니다.</li>
        <li>computed의 get과 set을 사용하면 데이터를 가져오거나 넣어줄때 지정한 로직을 수행할 수 있게 해줍니다.</li>
        <li>데이터에 연산이 포함된다면 되도록 computed에 넣어줍시다.</li>
      </ul>
      <p
        class="text-h4 font-weight-bold mb-3 pt-10"
        align="left"
      >
        3. watch 문법
      </p>

      <ul
        align="left"
        class="text-h6"
      >
        <li>관리하는 data 속성의 변수가 변경이 되면 watch 함수가 실행되게 할 수 있습니다. useEffect같은 역할입니다.</li>
        <li>인자값에 현재값, 과거값을 넣어서 비교하는 것도 가능합니다.</li>
        <li>computed와 사용할 때를 헷갈리곤 하는데 computed는 반복되는 연산을 줄이기 위해서 사용하는 것이고 watch는 연산의 실행을 트리거로 할 수 있는 문법입니다. watch를 쓸때는 useEffect를 쓸때와 마찬가지로 무한루프가 일어나지 않게 조심합니다.</li>
      </ul>

      <p
        class="text-h4 font-weight-bold mb-3 pt-10"
        align="left"
      >
        4. vue의 lifecycle
      </p>

      <ul
        align="left"
        class="text-h6"
      >
        <li>beforeCreate() - 제일 처음 실행되는 메소드</li>
        <li>created() - 생성 후 데이터 관련 작업이 실행되는 시점입니다</li>
        <li>beforeMount() - template html이 돔에 추가되기 직전 호출되는 메소드입니다.</li>
        <li>mounted() - DOM에 html이 올라온 직후 호출합니다.</li>
        <li>update(), beforeUpdate() - 데이터의 변화로 인해 재렌더링이 발생할 때만 호출됩니다. 두개의 메소드로 시점을 조절할 수 있습니다.</li>
        <li>destroyed(), beforeDestroyed() - 각각 제거된 후, 제거되기 전 호출되는 메소드입니다.</li>
      </ul>

      <p
        class="text-h4 font-weight-bold mb-3 pt-10"
        align="left"
      >
        5. vueX
      </p>

      <ul
        align="left"
        class="text-h6"
      >
        <li>vue의 상태관리 라이브러리입니다.</li>
        <li>리덕스와 달리 스토어를 여러개 둘 수 있습니다.</li>
        <li>state = state</li>
        <li>getters = computed</li>
        <li>mutations = state를 동기적으로 수정하고 싶을때</li>
        <li>
          actions = state를 비동기적으로 수정하고 싶을때, 여러 mutation을 연달아 실행하고 싶을 때
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
