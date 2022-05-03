
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
        title: "Login",
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
          v => (v && v.length >= 8) || "Password must be less than 8 characters"
        ]
      }),

      methods: {
        //..validate inputs
        validate() {
          this.refs.form.validate();
        },
        //Login method here
        onLogin() {
          //api call here
        }
      }
    };
    </script>

    <style scoped>
    </style>




