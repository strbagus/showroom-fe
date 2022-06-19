<script setup>
import SideBar from "@/components/SideBar.vue";
import MerkData from "@/components/MerkData.vue";
</script>
<template>
    <main>
        <router-link to="/">Kembali</router-link>
        <div class=" flex-column flex">
            <!-- <div class="sidebar bg-green-300 w-72">
                <SideBar />
            </div> -->
            <div class="bg-blue-300 w-full p-5">
                <MerkData />
                
            </div>
        </div>
    </main>
</template>