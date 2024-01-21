<script setup lang="ts">
import IconDollar from '@/assets/icons/icon-dollar.svg?data'
import IconPerson from '@/assets/icons/icon-person.svg?data'
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
          errorMessage="Can't be zero"
          :icon="IconDollar"
          type="number"
        />

        <div>
          <label for="tip" class="text-base">Tip %</label>
          <div
            id="tip"
            class="mt-4 grid grid-cols-2 desktop:grid-cols-3 gap-4 desktop:gap-x-3"
            role="group" aria-label="Select a tip or type a custom percentage">
            <CommonsButton variant="secondary">5%</CommonsButton>
            <CommonsButton variant="secondary">10%</CommonsButton>
            <CommonsButton variant="secondary">15%</CommonsButton>
            <CommonsButton variant="secondary">25%</CommonsButton>
            <CommonsButton variant="secondary">50%</CommonsButton>
            <CommonsTextField type="number" placeholder="Custom" />
          </div>
        </div>

        <CommonsTextField
          label="Number of People"
          id="people"
          placeholder="0"
          errorMessage="Can't be zero"
          :icon="IconPerson"
          type="number"
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
          <span class="text-3xl font-bold text-primary">$0.00</span>
        </p>
        <p class="flex justify-between">
          <span class="text-base">
            Total
            <br />
            <span class="text-xs text-primary-grayish">/ person</span>
          </span>
          <span class="text-3xl font-bold text-primary">$0.00</span>
        </p>
        </div>

        <CommonsButton variant="primary" class="w-full mt-8">Reset</CommonsButton>

      </div>
      <!-- <div class="row">
        <div class="col-sm-6">
          <div>
            <label for="bill">Bill</label>
            <input type="number" id="bill" v-model="bill" />
          </div>
        </div>
        <div class="col-sm-6">
          <div>
            <label for="tip">Tip %</label>
            <select id="tip" v-model="tip">
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="25">25%</option>
              <option value="50">50%</option>
              <option value="custom">Custom</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <div>
            <label for="people">Number of People</label>
            <input type="number" id="people" v-model="people" />
          </div>
        </div>
        <div class="col-sm-6">
          <div>
            <label for="customTip">Custom Tip %</label>
            <input type="number" id="customTip" v-model="customTip" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <h3>Tip Amount</h3>
          <p>{{ tipAmount }}</p>
        </div>
        <div class="col-sm-6">
          <h3>Total</h3>
          <p>{{ total }}</p>
        </div>
      </div> -->
    </form>
  </div>


  <!-- Bill

  Select Tip %
  5%
  10%
  15%
  25%
  50%
  Custom

  Number of People

  Tip Amount
  / person

  Total
  / person

  Reset -->
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
