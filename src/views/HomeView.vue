
<template>
  <hader />
  <main >
    <div class="flex justify-around items-center bg-neutral-700">
      <div class="text-white text">
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
        class="box flex border bg-slate-50 rounded overflow-hidden gap-6  items-center  "
      >
        <div class="productImg">
          <img class= "" :src="item.propertyImg" alt="" />
        </div>
        <div class="p-4 productText">
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
.box{
  height: 40vh;
  width: 95vw;
  margin: 15px;
}
.productImg img{
  height: 40vh;
  width: 40vw;
  }
  .homeImg img{
    height: 60vh;
    
  }
  @media screen and (max-width: 1100px) {

  .homeImg img{
    height: 40vh;
   
  }
 
}
 @media screen and (max-width: 790px) {
 
  .homeImg img{
    height: 30vh;
  }
  .text{
  font-size: 8px;
}
  .homeImg img{
    height: 20vh;
  }
  .box{
   
    height: 25vh;
  gap:2px;
 
}

 
  
 

.productImg img{
  height: 25vh;
  width: 35vw;
  }
 }
 @media screen and (max-width: 550px) {
.text{
  font-size: 8px;
}
  .homeImg img{
    height: 20vh;
  }
  .box{
    flex-direction: column;
    align-items: center;
    justify-content: center;
  height: 45vh;
  gap:2px;
 
}
.productImg img{
  height: 15vh;
  
  }
 }
</style>
