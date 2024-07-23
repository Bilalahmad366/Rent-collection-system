<template>
    <hader />
  
    <div class="my-6 max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-6">Add rent</h2>
      <form @submit.prevent="addrent" class="space-y-4 text-black">
        <!-- Property Number (PropertyNo) -->
        <div>
          <label for="propertyNo" class="block text-sm font-medium text-gray-700">Property Number</label>
          <input
            v-model="PropertyNo"
            type="number"
            id="propertyNo"
            name="propertyNo"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Property Name (PropertyName) -->
        <div>
          <label for="propertyName" class="block text-sm font-medium text-gray-700">Property Name</label>
          <input
            v-model="PropertyName"
            type="text"
            id="propertyName"
            name="propertyName"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Tenant Name (TenantName) -->
        <div>
          <label for="tenantName" class="block text-sm font-medium text-gray-700">Tenant Name</label>
          <input
            v-model="TenantName"
            type="text"
            id="tenantName"
            name="tenantName"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Monthly Rent (MonthlyRent) -->
        <div>
          <label for="monthlyRent" class="block text-sm font-medium text-gray-700">Monthly Rent</label>
          <input
            v-model="MonthlyRent"
            type="number"
            id="monthlyRent"
            name="monthlyRent"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Tenant Mobile Number (TenantMobileNo) -->
        <div>
          <label for="tenantMobileNo" class="block text-sm font-medium text-gray-700">Tenant Mobile Number</label>
          <input
            v-model="TenantMobileNo"
            type="tel"
            id="tenantMobileNo"
            name="tenantMobileNo"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Agreement Start Date (AgreementStartDate) -->
        <div>
          <label for="agreementStartDate" class="block text-sm font-medium text-gray-700">Agreement Start Date</label>
          <input
            v-model="AgreementStartDate"
            type="text"
            id="agreementStartDate"
            name="agreementStartDate"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Agreement Expiry Date (AgreementExpiryDate) -->
        <div>
          <label for="agreementExpiryDate" class="block text-sm font-medium text-gray-700">Agreement Expiry Date</label>
          <input
            v-model="AgreementExpiryDate"
            type="text"
            id="agreementExpiryDate"
            name="agreementExpiryDate"
            required
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <!-- Submit Button -->
        <div class="mt-6">
          <button 
            type="submit"
            class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  
    <Foter />
  </template>
  
  <script>
  import axios from "axios";
  import hader from "../components/hader.vue";
  import Foter from "../components/Foter.vue";
  export default {
    components: {
      hader,
      Foter,
    },
    data() {
      return {

          PropertyNo: "",
        PropertyName: "",
        TenantName: "",
        MonthlyRent: "",
        TenantMobileNo: "",
        AgreementStartDate: "",
        AgreementExpiryDate: "",
      };
    },
    methods :{
     async addrent(){
  await axios.post("https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api/RentDetail",{
   
        "PropertyNo": this.PropertyNo,
        "PropertyName": this.PropertyName,
        "TenantName": this.TenantName,
        "MonthlyRent": this.MonthlyRent,
        "TenantMobileNo": this.TenantMobileNo,
        "AgreementStartDate": this.AgreementStartDate,
        "AgreementExpiryDate": this.AgreementExpiryDate,
  
  });
          alert("property added successfully")
          this.$router.go();
      }
    }
  };
  
  </script>