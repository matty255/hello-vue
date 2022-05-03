
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
          <v-form
            ref="form"
            v-model="valid"
            class="mt-10 mb-6 pr-8 pl-8 pb-8 pt-4"
            lazy-validation
            @submit.prevent="onSignup"
          >
            <v-text-field
              v-model="email"
              color="yellow"
              outlined

              append-icon="mdi-mailbox"
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
              outlined
              :type="show1 ? 'text' : 'password'"
              label="Password"
              error-count="4"
              required
              @click:append="show1 = !show1"
            />
            <v-text-field
              v-model="confirmPassword"
              error-count="2"
              :rules="confirmPasswordRules "
              :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
              :type="show2 ? 'text' : 'password'"
              color="yellow"
              outlined
              label="Confirm Password"
              required
              @click:append="show2 = !show2"
            />

            <v-btn
              shaped
              block
              x-large
              type="submit"
              :disabled="!valid"
              color="yellow darken-4"
              class="mr-4"
              @click="validate"
            >
              <span class="white--text">Sign up</span>
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
    data() {
      return {
        title: "회원가입하기",
        valid: true,
        show1: false,
        show2: false,
        email: "",
        emailRules: [
          v => !!v || "ID를 입력해주세요",
          v => /.+@.+\..+/.test(v) || "ID는 메일 형태로 해주세요"
        ],
        password: "",
        passwordRules: [
          v => !!v || "Password를 입력해주세요",
          v => (v && v.length >= 8) || "Password는 8자 이상이어야 합니다",
          v => /(?=.*[a-z])/.test(v) && /(?=.*\d)/.test(v)  || "영문과 숫자를 혼합해주세요",
          v =>
            /([!@$%<>*''])/.test(v) || "다음과 같은 특수문자를 포함해주세요 [!@#$%]"
        ],
        confirmPassword: "",
        confirmPasswordRules: [
          v => !!v || "Password를 다시 한번 입력해주세요",
          v => v === this.password || "Password가 일치하지 않습니다"
        ]
      };
    },
    methods: {
      //.. valicdating input field
      validate() {
        this.refs.form.validate();
      },
      //..registring a new user
      onSignup() {
        if(this.email === "" || this.password === "" || this.confirmPassword === "") {
            alert("빈칸을 채워주세요")
          } else if (this.password !== this.confirmPassword) {
            alert("비밀번호를 확인해주세요.")
          } else {
            alert("회원가입에 성공하셨습니다. 로그인해주세요")
          }
      }
    }
  };
  </script>

  <style scoped>
  </style>

