<script setup>
const userEmail = defineModel("userEmail")
const userCompanyName = defineModel("userCompanyName")
const userCnpj = defineModel("userCnpj")
const userOpeningDate = defineModel("userOpeningDate")
const userPhone = defineModel("userPhone")
const userPassword = defineModel("userPassword")
</script>

<template>
  <div class="step-pj-review">
    <h2 class="step-pj-review__title">Revise suas informações</h2>
    <div class="step-pj-review__form-field">
      <label for="email">Endereço de e-mail:</label>
      <input type="email" id="email" v-model="userEmail" required />
    </div>
    <div class="step-pj-review__form-field">
      <label for="companyName">Razão social:</label>
      <input type="text" id="companyName" v-model="userCompanyName" required />
    </div>
    <div class="step-pj-review__form-field">
      <label for="cnpj">CNPJ:</label>
      <input
        type="text"
        id="cnpj"
        v-model="userCnpj"
        pattern="\d{2}\.?\d{3}\.?\d{3}\/?\d{4}\-?\d{2}"
        required
      />
    </div>
    <div class="step-pj-review__form-field">
      <label for="openingDate">Data de abertura:</label>
      <input
        type="date"
        id="openingDate"
        v-model="userOpeningDate"
        :max="new Date().toISOString().split('T')[0]"
        required
      />
    </div>
    <div class="step-pj-review__form-field">
      <label for="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        v-model="userPhone"
        pattern="(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})"
        required
      />
    </div>
    <div class="step-pj-review__form-field">
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="userPassword" minlength="4" required />
    </div>
  </div>
</template>
