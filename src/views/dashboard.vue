<template>
  <hader />
  <div class="p-6 max-w-7xl mx-auto">
        
        <!-- Property Details Section -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden mb-6">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Property Details</h2>
                <div class="btn w-4/5 pb-10">
                    <RouterLink to="/Addproperty"><button class="btn  float-end px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none"
                        >add new property</button></RouterLink>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <!-- Property 1 -->
                    <div v-for="item in Properties"
                    :key="item.id" class="p-4 bg-gray-100 rounded-lg ">
                        <h3 class="text-lg font-semibold text-gray-700 mb-2">Property {{ item.HouseNo }}</h3>
                        <p class="text-sm text-gray-600">Owner: {{ item.OwnerName}}</p>
                        <p class="text-sm text-gray-600">Address: {{ item.address }}</p>
                        <p class="text-sm text-gray-600">No. of Floors: {{item.NoOfFloor }}</p>
                        <p class="text-sm text-gray-600">No. of Rooms: {{ item.NoOfRooms}}</p>
                        <p class="text-sm text-gray-600">Mobile No.: {{item.MobileNo}}</p>
                        <img :src="item.propertyImg"  alt="Property Image" class="mt-2 propimg">
                        <div class="update relative inline m-2">
                            <RouterLink :to="{path:'/update/'+ item._id}"><i class="fa-solid fa-pencil text-2xl"></i></RouterLink>
                        </div>
                        <div class="delete relative  inline">
                            <button @click="delet(item._id)" ><i class="fa-solid fa-trash-can-arrow-up text-2xl cursor-pointer"></i></button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

        <!-- Rent Information Section -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Rent Information</h2>
                <div class="btn w-4/5 pb-10">
                    <RouterLink to="/Addrent"><button class="btn  float-end px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300 ease-in-out focus:outline-none"
                        >add new rent</button></RouterLink>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   
                    <div v-for="item in rent"
                    :key="item._id" class="p-4 bg-gray-100 rounded-lg">
                        <h3 class="text-lg font-semibold text-gray-700 mb-2">Tenant Name: {{item.TenantName}}</h3>
                        <p class="text-sm text-gray-600">Property: {{item.PropertyNo}}</p>
                        <p class="text-sm text-gray-600">Monthly Rent: {{item. MonthlyRent }}</p>
                        <p class="text-sm text-gray-600">Mobile No.: {{ item.TenantMobileNo }}</p>
                        <p class="text-sm text-gray-600">Agreement Start: {{item.AgreementStartDate }}</p>
                        <p class="text-sm text-gray-600">Agreement End: {{item.AgreementExpiryDate}}</p>

                         <div class="updaterent relative inline m-2">
                            <RouterLink :to="{path:'/updaterent/'+ item._id}"><i class="fa-solid fa-pencil text-2xl"></i></RouterLink>
                        </div>
                        <div class="deleterent relative  inline">
                            <button @click="deletrent(item._id)" ><i class="fa-solid fa-trash-can-arrow-up text-2xl cursor-pointer"></i></button>
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
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
    Properties: [],
  rent:[],
    
    };
  },
  async mounted() {
   let result= await axios.get("https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api/property");
  
    this.Properties = result.data;

   let rent=await axios.get("https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api/RentDetail")
    this.rent = rent.data;
  },
  methods:{
    async delet(id){
       await axios.delete(`https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api/property/${id}`);
       this.$router.go();
    alert("property deleted successfull")
    },
    async deletrent(id){
       await axios.delete(`https://rococo-basbousa-faf12a.netlify.app/.netlify/functions/api//RentDetail/${id}`);
       this.$router.go();
    alert("rent info deleted successfull")
    },
   
}
}

  

</script>
<style scoped>
.delete {
    top: -348px;
    left: 250px;
}
.update {
    top: -347px;
    left: 250px;
   
}
.deleterent {
    top: -134px;
    left: 418px;
}
.updaterent {
    top: -134px;
    left: 486px;
}

.propimg{
    height: 13rem;
}
.btnn{
    width: 100%;
}

</style>