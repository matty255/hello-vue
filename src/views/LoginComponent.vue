
<template>
  <v-container fluid>
    <v-row class="text-center">
      <v-col
        cols="3"
        sm="2"
        md="3"
      />
      <v-col
        cols="12"
        sm="8"
        md="6"
      >
        <v-card
          elevation="11"
          class="pt-10"
        >
          <h2 class="orange--text text-uppercase mb-3">
            {{ title }}
          </h2>
          <v-divider
            color="orange"
            class="mt-2 darken-4 pa-1 mx-3"
          />
          <!-- ref로 추적 -->
          <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            class="mt-10 mb-6 pr-8 pl-8 pb-8 pt-4"
            @submit.prevent="onLogin"
          >
            <v-text-field
              v-model="email"
              append-icon="mdi-mailbox"
              outlined
              color="yellow"
              error-count="2"
              :rules="emailRules"
              label="E-mail"
              required
            />
            <v-text-field
              v-model="password"
              color="yellow"
              :rules="passwordRules"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show1 ? 'text' : 'password'"
              label="Password"
              outlined
              required
              @click:append="show1 = !show1"
            />

            <v-btn
              x-large
              type="submit"
              block
              :disabled="!valid"
              color="yellow darken-4"
              class="mr-4 text"
              @click="validate"
            >
              <span class="white--text">Login</span>
              <v-icon
                light
                color="yellow"
              >
                mdi-account-circle
              </v-icon>
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
      <v-col
        cols="3"
        sm="2"
        md="3"
      />
    </v-row>
  </v-container>
</template>


    <script>
    export default {
      data: () => ({
        title: "로그인 컴포넌트 만들기",
        valid: true,
        show1: false,
        email: "",
        emailRules: [
          v => !!v || "ID를 입력해주세요",
          v => /.+@.+\..+/.test(v) || "ID는 메일 형태로 해주세요"
        ],
        password: "",
        passwordRules: [
          v => !!v || "Password를 입력해주세요",
          v => (v && v.length >= 8) || "Password는 8자 이상이어야 합니다"
        ]
      }),

      methods: {
        //..validate inputs
        validate() {
          this.refs.form.validate();
        },
        //Login method here
        onLogin() {
          if(this.email === "" || this.password === "") {
            alert("빈칸을 채워주세요")
          } else{
            alert("로그인 되었습니다.")
          }

        }
      }
    };
    </script>

    <style scoped>
    </style>




