
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
          <h2 class="yellow--text text-uppercase">
            {{ title }}
          </h2>
          <v-divider
            color="yellow"
            class="mt-2"
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
              shaped
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
        title: "Register",
        valid: true,
        show1: false,
        show2: false,
        email: "",
        emailRules: [
          v => !!v || "E-mail is required",
          v => /.+@.+\..+/.test(v) || "E-mail must be valid"
        ],
        password: "",
        passwordRules: [
          v => !!v || "Password is required",
          v => (v && v.length >= 8) || "Password must be less than 8 characters",
          v => /(?=.*[A-Z])/.test(v) || "Must have one uppercase character",
          v => /(?=.*\d)/.test(v) || "Must have one number",
          v =>
            /([!@$%<>*''])/.test(v) || "Must have one special character [!@#$%]"
        ],
        confirmPassword: "",
        confirmPasswordRules: [
          v => !!v || "Confirm Password is required",
          v =>
            (v && v.length >= 8) ||
            "Confirm Password must be less than 8 characters",
          v => !!v || "Confirm password",
          v => v === this.password || "Passwords do not match"
        ]
      };
    },
    methods: {
      //.. valicdating input field
      validate() {
        this.refs.form.validate();
      },
      //..registring a new user
      onSignup() {}
    }
  };
  </script>

  <style scoped>
  </style>

