
<template>
  <hader />
  <main >
    <div class="flex justify-around items-center bg-neutral-700">
      <div class="text-white">
        <p>welcome to our rent collection System .......</p>
      </div>
      <div class="homeImg pt-10">
        <img class="h-96" src="../assets/homeimage.png" alt="homeImg" />
      </div>
    </div>
<div class="text-center p-3">
  <h1 class="text-2xl font-bold">
    select your choise
  </h1>
</div>
    <!-- all products are here -->
    <div class="All ">
      <div
        v-for="item in homeProperties"
        :key="item.id"
        class="flex border bg-slate-50 rounded overflow-hidden m-10 gap-12 h-64 items-center pr-5"
      >
        <div class="img">
          <img class="h-64 w-full" :src="item.propertyImg" alt="" />
        </div>
        <div class="p-4">
          <div class="mb-2">
            <span class="font-bold">Owner Name:</span>
            <span>{{ item.OwnerName }}</span>
          </div>
          <div class="mb-2">
            <span class="font-bold">House Number:</span>
            <span>{{ item.HouseNo }}</span>
          </div>
          <div class="mb-2">
            <span class="font-bold">Number of Floors:</span>
            <span>{{ item.NoOfFloor }}</span>
          </div>
          <div class="mb-2">
            <span class="font-bold">Number of Rooms:</span>
            <span>{{ item.NoOfRooms }}</span>
          </div>
          <div class="mb-2">
            <span class="font-bold">Address:</span>
            <span>{{ item.address }}</span>
          </div>
          <div class="mb-2">
            <span class="font-bold">Mobile Number:</span>
            <span>{{ item.MobileNo }}</span>
          </div>
        </div>
        <button
          class="btn float-end px- py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none"
        >
          Buy Now
        </button>
      </div>
    </div>
  </main>
  <Foter />
</template>


<script >
import axios from "axios";
import Foter from "../components/Foter.vue";
import hader from "../components/hader.vue";
export default {
  components: {
    hader,
    Foter,
  },
  data() {
    return {
      homeProperties: [],
    };
  },
  async mounted() {
    let result = await axios.get("https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api/property");
    console.log(result.data);
    this.homeProperties = result.data;
  },
};
</script>
<style scoped>
.btn {
  left: 267px;
  position: relative;
  bottom: -98px;
}
</style>
