<template>
    <hader />
  
    <div class="my-6 max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <h2 class="text-2xl font-semibold mb-6">update Property</h2>
      <form @submit.prevent="updateprop()" class="space-y-4 text-black">
        <!-- Property Image URL -->
        <div>
          <label for="propertyImg" class="block text-sm font-medium text-gray-700"
            >Property Image URL</label
          >
          <input
          v-model="imgUrl"
            type="text"
            id="propertyImg"
            name="propertyImg"
            
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <!-- House Number -->
        <div>
          <label for="HouseNo" class="block text-sm font-medium text-gray-700"
            >House Number</label
          >
          <input
            v-model="houseNo"
            type="number"
            id="HouseNo"
            name="HouseNo"
           
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <!-- Owner Name -->
        <div>
          <label for="OwnerName" class="block text-sm font-medium text-gray-700"
            >Owner Name</label
          >
          <input
            v-model="ownername"
            type="text"
            id="OwnerName"
            name="OwnerName"
           
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <!-- Address -->
        <div>
          <label for="address" class="block text-sm font-medium text-gray-700"
            >Address</label
          >
          <textarea
          v-model="address"
  
            id="address"
            name="address"
            rows="3"
            
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          ></textarea>
        </div>
  
        <!-- Number of Floors -->
        <div>
          <label for="NoOfFloor" class="block text-sm font-medium text-gray-700"
            >Number of Floors</label
          >
          <input
          v-model="floor"
  
            type="number"
            id="NoOfFloor"
            name="NoOfFloor"
            
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <!-- Number of Rooms -->
        <div>
          <label for="NoOfRooms" class="block text-sm font-medium text-gray-700"
            >Number of Rooms</label
          >
          <input
          v-model="rooms"
  
            type="number"
            id="NoOfRooms"
            name="NoOfRooms"
           
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <!-- Mobile Number -->
        <div>
          <label for="MobileNo" class="block text-sm font-medium text-gray-700"
            >Mobile Number</label
          >
          <input
            v-model="mobno"
            type="tel"
            id="MobileNo"
            name="MobileNo"
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
  
        <!-- Submit Button -->
        <div class="mt-6">
          <button 
            type="submit"
            class="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            save
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
    mounted() {
    this.id = this.$route.params.id;
  },
  data() {
    return {
      id: null, 
      houseNo: '', 
      mobno: '',
      floor: '',
      rooms: '',
      ownername: '',
      address: '',
      imgUrl: ''
    };
  },
  methods: {
    async updateprop() {
      const  id  = this.id;
   await axios.put(`https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api/property/${id}`,{
          "HouseNo": this.houseNo,
          "MobileNo": this.mobno,
          "NoOfFloor": this.floor,
          "NoOfRooms": this.rooms,
          "OwnerName": this.ownername,
          "address": this.address,
          "propertyImg": this.imgUrl
        }
       );
        alert("update property successfull");
        this.$router.go();
    }
}
  };
  
  </script>