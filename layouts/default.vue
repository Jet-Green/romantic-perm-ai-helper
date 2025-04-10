<script setup lang="ts"></script>
<template>
  <v-app>
    <v-app-bar :elevation="0" class="border">
      <v-container>
        <v-row class="d-flex justify-center align-center">
          <v-col cols="12" md="11" xl="10" class="d-flex justify-space-between align-center">
            <v-btn to="/">home</v-btn>

            <v-spacer></v-spacer>

            <v-btn icon="mdi-account-heart-outline" to="/matches"></v-btn>
            <v-btn icon="mdi-chat-outline" to="/chats"></v-btn>
            <v-btn icon="mdi-account" to="/me"></v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <slot /> <!-- This is where your page content will be rendered -->
    </v-main>

    <v-footer app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
<style scoped lang="scss"></style>