<template>
    <main>
        <div class="container">
            
        </div>
        <div class="flex flex-wrap">
            <div class="lg:w-1/6 w-1/2 p-2" v-for="item in optionsCars" v-bind:key="item.id">
            <!-- TODO link path w/ params -->
                <!-- <RouterLink> -->
                    <div class="bg-red-500 flex flex-col">
                        <div class="h-24 bg-gray-500 m-1">
                            gambar {{ item.name }}
                        </div>
                        <div class="flex flex-col m-1">
                            <h1 class="text-lg text-white">
                                {{ item.name }}
                            </h1>
                            <hr>
                            <h5 class="text-1xl text-orange-300">
                                {{ "Rp. "+item.sell_price.toLocaleString() }}
                            </h5>
                        </div>
                    </div>
                <!-- </RouterLink> -->
            </div>
        </div>
        <h1 class="text-white text-1">Raw data:</h1>
        {{ optionsCars }}
    </main>
    
</template>
<script>
import axios from 'axios';
export default {
    mounted() {
        axios.get(import.meta.env.VITE_APP_ROOT_API+'cars')
        .then(response => (this.optionsCars = response.data));
    },
     data: () => ({
        optionsCars : [],
        name: 'CarList',
     }),
}
</script>