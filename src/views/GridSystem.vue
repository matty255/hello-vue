<template>
  <v-container
    class=""
    fluid
  >
    <v-row>
      <v-col>
        <v-card class="pa-4 yellow">
          col
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-4 yellow">
          col
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4 yellow">
          col
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4 yellow">
          col
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="pa-4 yellow">
          col
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-show="false"
          class="pa-4 yellow"
        >
          col
        </v-card>
      </v-col>
      <v-col>
        <v-card

          class="pa-4 yellow"
        >
          col
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4 yellow">
          col
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card
          class="pa-4 yellow mt-3"
          height="300"
        >
          col
        </v-card>
      </v-col>
      <v-col>
        <v-card
          v-for="n in 3"
          :key="n"
          :class="n === 3 && 'ml-auto pa-4 yellow my-3'"
          class="pa-4 yellow my-3"
        >
          Flex item
        </v-card>
      </v-col>
    </v-row>

    <v-row

      class="d-flex flex-column justify-space-around"
    >
      <v-col>
        <v-card
          class="pa-4 yellow align-end"
          width="100"
        >
          col
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {};
</script>
<style>
</style>
