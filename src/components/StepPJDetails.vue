<script setup>
const userCompanyName = defineModel("userCompanyName")
const userCnpj = defineModel("userCnpj")
const userOpeningDate = defineModel("userOpeningDate")
const userPhone = defineModel("userPhone")
</script>

<template>
  <div class="step-pj-details">
    <h2 class="step-pj-details__title">Pessoa Jurídica</h2>
    <div class="step-pj-details__form-field">
      <label for="companyName">Razão social:</label>
      <input type="text" id="companyName" v-model="userCompanyName" required />
    </div>
    <div class="step-pj-details__form-field">
      <label for="cnpj">CNPJ:</label>
      <input
        type="text"
        id="cnpj"
        v-model="userCnpj"
        pattern="\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}"
        required
      />
    </div>
    <div class="step-pj-details__form-field">
      <label for="openingDate">Data de abertura:</label>
      <input
        type="date"
        id="openingDate"
        v-model="userOpeningDate"
        :max="new Date().toISOString().split('T')[0]"
        required
      />
    </div>
    <div class="step-pj-details__form-field">
      <label for="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        v-model="userPhone"
        pattern="(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})"
        required
      />
    </div>
  </div>
</template>
