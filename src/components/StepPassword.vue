<script setup>
const userPassword = defineModel("userPassword")
</script>

<template>
  <div class="step-password">
    <h2 class="step-password__title">Senha de acesso</h2>
    <div class="step-password__form-field">
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="userPassword" minlength="4" required />
    </div>
  </div>
</template>
