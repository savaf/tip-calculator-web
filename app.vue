<script setup lang="ts">
import IconDollar from '@/assets/icons/icon-dollar.svg?data'
import IconPerson from '@/assets/icons/icon-person.svg?data'

const errorMessages = {
  bill: 'Can\'t be zero',
  people: 'Can\'t be zero',
}

let bill = ref<number | null>(null)
let tipRate = ref<number | null>(null)
let customTipRate = ref<number | null>(null)
let people = ref<number | null>(null)
let tipAmountPerPerson = ref<number | null>(null)
let totalTip = ref<number | null>(null)

function setTipRateAndClearCustom(value: number) {
  customTipRate.value = null
  tipRate.value = value
}

function inputCustomTipRate(value: string) {
  tipRate.value = Number(value)
}

watch([bill, tipRate, people], () => {
  if (validateFields()) {
    totalTip.value = calculateTipTotal()
    tipAmountPerPerson.value = calculateTipAmountPerPerson()
  }
})

let billErrorMessage = ref<string>('')
let peopleErrorMessage = ref<string>('')
function validateFields() {
  billErrorMessage.value = ''
  peopleErrorMessage.value = ''

  if (bill.value === 0 || bill.value === null) {
    billErrorMessage.value = errorMessages.bill
  }
  if (people.value === 0 || people.value === null) {
    peopleErrorMessage.value = errorMessages.people
  }

  return !billErrorMessage.value && !peopleErrorMessage.value
}

function calculateTipAmountPerPerson() {
  return totalTip.value! / people.value!
}

function calculateTipTotal() {
  const tipAmount = (bill.value! * tipRate.value!) / 100
  return tipAmount
}


const totalFormatted = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(totalTip.value!)
})

const tipAmountPerPersonFormatted = computed(() => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(tipAmountPerPerson.value!)
})

function resetForm () {
  bill.value = null
  tipRate.value = null
  customTipRate.value = null
  people.value = null
  tipAmountPerPerson.value = null
  totalTip.value = null
}
</script>

<template>
  <div id="app" class="mx-auto max-w-main-container prose">
    <header class="text-center w-full">
      <h1 class="sr-only">Tip Calculator</h1>
      <img src="/logo.svg" alt="Splitter's Logo" class="app-logo" />
    </header>
    <form class="container bg-white w-full desktop:p-8 desktop:pl-12 p-6
      rounded-t-main-container desktop:rounded-main-container shadow-main-container
      flex flex-col desktop:flex-row justify-between
      space-y-8 desktop:space-y-0
      desktop:gap-x-12
    ">

      <div class="space-y-8 desktop:mb-4 w-full">

        <CommonsTextField
          label="Bill"
          id="bill"
          placeholder="0"
          :errorMessage="billErrorMessage"
          :icon="IconDollar"
          type="number"
          v-model="bill"

        />

        <div>
          <label for="tip" class="text-base">Tip %</label>
          <div
            id="tip"
            class="mt-4 grid grid-cols-2 desktop:grid-cols-3 gap-4 desktop:gap-x-3"
            role="group" aria-label="Select a tip or type a custom percentage">
            <CommonsButton :variant="tipRate === 5 ? 'primary' : 'secondary'" @click="setTipRateAndClearCustom(5)">5%</CommonsButton>
            <CommonsButton :variant="tipRate === 10 ? 'primary' : 'secondary'" @click="setTipRateAndClearCustom(10)">10%</CommonsButton>
            <CommonsButton :variant="tipRate === 15 ? 'primary' : 'secondary'" @click="setTipRateAndClearCustom(15)">15%</CommonsButton>
            <CommonsButton :variant="tipRate === 25 ? 'primary' : 'secondary'" @click="setTipRateAndClearCustom(25)">25%</CommonsButton>
            <CommonsButton :variant="tipRate === 50 ? 'primary' : 'secondary'" @click="setTipRateAndClearCustom(50)">50%</CommonsButton>
            <CommonsTextField type="number" placeholder="Custom" v-model="customTipRate" @input="inputCustomTipRate($event.target.value)" />
          </div>
        </div>

        <CommonsTextField
          label="Number of People"
          id="people"
          placeholder="0"
          :errorMessage="peopleErrorMessage"
          :icon="IconPerson"
          type="number"
          v-model="people"
        />


      </div>

      <div class="bg-primary-dark text-white pt-10 p-6  w-full rounded-2xl relative flex flex-col justify-between">

        <div class="space-y-[21px]">
          <p class="flex justify-between mt-0">
          <span class="text-base">
            Tip Amount
            <br />
            <span class="text-xs text-primary-grayish">/ person</span>
          </span>
          <span class="text-3xl font-bold text-primary">{{ tipAmountPerPersonFormatted }}</span>
        </p>
        <p class="flex justify-between">
          <span class="text-base">
            Total
            <br />
            <span class="text-xs text-primary-grayish">/ person</span>
          </span>
          <span class="text-3xl font-bold text-primary">{{ totalFormatted }}</span>
        </p>
        </div>

        <CommonsButton variant="primary" class="w-full mt-8" @click="resetForm">Reset</CommonsButton>

      </div>
    </form>
  </div>
</template>

<style>
.app-logo {
  margin-top: 50px;
  margin-bottom: 40px;
  display: inline-block;

  @screen desktop {
    margin-top: 163px;
    margin-bottom: 88px;
  }
}
</style>
