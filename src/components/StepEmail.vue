<script setup>
const userEmail = defineModel("userEmail")
const personType = defineModel("personType")
</script>

<template>
  <div class="step-email">
    <h2 class="step-email__title">Seja bem vindo(a)</h2>
    <div class="step-email__form-field">
      <label for="email">Endereço de e-mail:</label>
      <input type="email" id="email" v-model="userEmail" required />
    </div>
    <div class="step-email__radio-group">
      <div class="step-email__radio-group-item">
        <input type="radio" id="pf" v-model="personType" value="pf" />
        <label for="pf">Pessoa Física</label>
      </div>
      <div class="step-email__radio-group-item">
        <input type="radio" id="pj" v-model="personType" value="pj" />
        <label for="pj">Pessoa Jurídica</label>
      </div>
    </div>
  </div>
</template>
