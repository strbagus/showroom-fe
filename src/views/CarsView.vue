<template>
    <div>
        <RouterLink to="/">
            <div class="bg-red-500">Back</div>
        </RouterLink>
        {{ $route.params.carName }}
        <h1 class="text-white">Raw Data:</h1>
        {{ Car }}
    </div>
</template>
<script>
import axios from 'axios';
export default {
    mounted() {
        axios.get(import.meta.env.VITE_APP_ROOT_API+'car/'+this.$route.params.carId)
        .then(response => (this.Car = response.data));
    },
    data: () => ({
        Car: [],       
    }),
}
</script>