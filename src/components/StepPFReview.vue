<script setup>
const userEmail = defineModel("userEmail")
const userName = defineModel("userName")
const userCpf = defineModel("userCpf")
const userBirthdate = defineModel("userBirthdate")
const userPhone = defineModel("userPhone")
const userPassword = defineModel("userPassword")
</script>

<template>
  <div class="step-pf-review">
    <h2 class="step-pf-review__title">Revise suas informações</h2>
    <div class="step-pf-review__form-field">
      <label for="email">Endereço de e-mail:</label>
      <input type="email" id="email" v-model="userEmail" required />
    </div>
    <div class="step-pf-review__form-field">
      <label for="name">Nome:</label>
      <input
        type="text"
        id="name"
        v-model="userName"
        pattern="[a-zA-Z\u00C0-\u00FF\s]+"
        minlength="2"
        maxlength="50"
        required
      />
    </div>
    <div class="step-pf-review__form-field">
      <label for="cpf">CPF:</label>
      <input
        type="text"
        id="cpf"
        v-model="userCpf"
        pattern="\d{3}\.?\d{3}\.?\d{3}-?\d{2}"
        required
      />
    </div>
    <div class="step-pf-review__form-field">
      <label for="birthdate">Data de nascimento:</label>
      <input
        type="date"
        id="birthdate"
        v-model="userBirthdate"
        :max="
          new Date(new Date().setFullYear(new Date().getFullYear() - 18))
            .toISOString()
            .split('T')[0]
        "
        :min="
          new Date(new Date().setFullYear(new Date().getFullYear() - 110))
            .toISOString()
            .split('T')[0]
        "
        required
      />
      <span class="step-pf-review__info">Para prosseguir é necessário ter 18 anos.</span>
    </div>
    <div class="step-pf-review__form-field">
      <label for="phone">Telefone:</label>
      <input
        type="tel"
        id="phone"
        v-model="userPhone"
        pattern="(?:(^\+\d{2})?)(?:([1-9]{2})|([0-9]{3})?)(\d{4,5})(\d{4})"
        required
      />
    </div>
    <div class="step-pf-review__form-field">
      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="userPassword" minlength="4" required />
    </div>
  </div>
</template>
