<script setup>
import { ref, watch } from "vue"
import StepEmail from "@/components/StepEmail.vue"
import StepPFDetails from "@/components/StepPFDetails.vue"
import StepPJDetails from "@/components/StepPJDetails.vue"
import StepPassword from "@/components/StepPassword.vue"
import StepPFReview from "@/components/StepPFReview.vue"
import StepPJReview from "@/components/StepPJReview.vue"

const form = ref({
  userEmail: "",
  userPersonType: "pf",
  userName: "",
  userCpf: "",
  userBirthdate: "",
  userCompanyName: "",
  userCnpj: "",
  userOpeningDate: "",
  userPhone: "",
  userPassword: ""
})

const formRef = ref(null)

const currentStep = ref(1)

function incrementStep() {
  if (formRef.value.checkValidity()) {
    if (currentStep.value < 4) {
      currentStep.value++
    } else if (currentStep.value === 4) {
      submitForm()
    }
  } else {
    formRef.value.reportValidity()
  }
}

function decrementStep() {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

async function submitForm() {
  try {
    const response = await fetch("/registration", {
      method: "POST",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form.value)
    })

    const result = await response.json()
    if (response.ok) {
      alert(`✅  Registro concluído com sucesso!
      Dados: ${JSON.stringify(result.data)}`)
    } else {
      alert(result.message)
    }
  } catch (error) {
    console.error("Fetch error:", error)
    alert("Erro ao enviar dados: " + error.message)
  }
}

watch(
  () => form.value.userPersonType,
  (newVal, oldVal) => {
    if (newVal !== oldVal) {
      form.value.userName = ""
      form.value.userCpf = ""
      form.value.userBirthdate = ""
      form.value.userCompanyName = ""
      form.value.userCnpj = ""
      form.value.userOpeningDate = ""
      form.value.userPhone = ""
      form.value.userPassword = ""
    }
  }
)
</script>

<template>
  <!-- Remova o comentário da linha abaixo para visualizar o objeto form sendo montado em seu navegador -->
  <!-- <pre>{{ form }}</pre> -->
  <form ref="formRef" @submit.prevent="incrementStep" class="form-stepper">
    <div class="form-stepper__step-indicator">
      Etapa <span class="form-stepper__current-step">{{ currentStep }}</span> de 4
    </div>
    <StepEmail
      v-if="currentStep === 1"
      v-model:userEmail="form.userEmail"
      v-model:personType="form.userPersonType"
    />
    <div v-if="currentStep === 2">
      <StepPFDetails
        v-if="form.userPersonType === 'pf'"
        v-model:userName="form.userName"
        v-model:userCpf="form.userCpf"
        v-model:userBirthdate="form.userBirthdate"
        v-model:userPhone="form.userPhone"
      />
      <StepPJDetails
        v-if="form.userPersonType === 'pj'"
        v-model:userCompanyName="form.userCompanyName"
        v-model:userCnpj="form.userCnpj"
        v-model:userOpeningDate="form.userOpeningDate"
        v-model:userPhone="form.userPhone"
      />
    </div>
    <StepPassword v-if="currentStep === 3" v-model:userPassword="form.userPassword" />
    <div v-if="currentStep === 4">
      <StepPFReview
        v-if="form.userPersonType === 'pf'"
        v-model:userEmail="form.userEmail"
        v-model:userName="form.userName"
        v-model:userCpf="form.userCpf"
        v-model:userBirthdate="form.userBirthdate"
        v-model:userPhone="form.userPhone"
        v-model:userPassword="form.userPassword"
      />
      <StepPJReview
        v-if="form.userPersonType === 'pj'"
        v-model:userEmail="form.userEmail"
        v-model:userCompanyName="form.userCompanyName"
        v-model:userCnpj="form.userCnpj"
        v-model:userOpeningDate="form.userOpeningDate"
        v-model:userPhone="form.userPhone"
        v-model:userPassword="form.userPassword"
      />
    </div>

    <div class="form-stepper__button-group">
      <button
        v-if="currentStep > 1"
        class="form-stepper__button form-stepper__button--outline"
        @click.prevent="decrementStep"
      >
        Voltar
      </button>
      <button type="submit" class="form-stepper__button form-stepper__button--submit">
        {{ currentStep === 4 ? "Cadastrar" : "Continuar" }}
      </button>
    </div>
  </form>
</template>
