<template>
    <div class="container mx-auto">
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-center">
          <thead class="border-b bg-gray-800">
            <tr>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                ID
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Nama
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Gambar
              </th>
              <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            
            <template v-for="item in optionsMerks" :key="item.id">
            <tr class="bg-gray-300 text-white border-b">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {{ item.id }}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{ item.name }}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {{ item.logoname }}
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button type="button" class="inline-block px-3 py-1.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out" @click="deleteMerk(item.id)">
                    hapus
                </button>
              </td>
            </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
        <!-- button insert -->
        <div class="flex justify-end">
            <button type="button" class="px-6 py-2.5 
                bg-blue-600 
                text-white
                font-medium
                text-xs
                leading-tight
                uppercase
                rounded
                shadow-md
                hover:bg-blue-700 hover:shadow-lg
                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                active:bg-blue-800 active:shadow-lg
                transition
                duration-150
                ease-in-out" data-bs-toggle="modal" data-bs-target="#insertModal">
                Tambah
            </button>
        </div>
        <!-- insert form -->
        <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="insertModal" tabindex="-1" aria-labelledby="insertModalLabel" aria-hidden="true">
            <div class="modal-dialog relative w-auto pointer-events-none">
                <div
                class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <form action="" method="post">
                        <div
                            class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Form Insert</h5>
                            <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body relative p-4 text-gray-700">
                                <div>
                                    <label for="">nama</label>
                                    <input type="text" v-model="merkNama" required="required" class="border">
                                </div>
                                <div>
                                    <label for="">photo</label>
                                    <input type="text" v-model="merkPhoto" required="required"  class="border">
                                </div>
                                    <!-- <input type="submit" value="Tambah" > -->
                                
                            
                        </div>
                        <div
                            class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            
                            <input type="button" class="px-6
                                py-2.5
                                bg-blue-600
                                text-white
                                font-medium
                                text-xs
                                leading-tight
                                uppercase
                                rounded
                                shadow-md
                                hover:bg-blue-700 hover:shadow-lg
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                                active:bg-blue-800 active:shadow-lg
                                transition
                                duration-150
                                ease-in-out
                                ml-1" @click="insertMerk()" value="Tambah">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    
    
    mounted() {
        axios.get(import.meta.env.VITE_APP_ROOT_API+'merks')
        .then(response => (this.optionsMerks = response.data));
    },
    data: () => ({
        optionsMerks : [],
        merkNama: null,
        merkPhoto: null,
    }),
    methods:{
        // TODO error when run
        insertMerk: function(){
            return axios.post(import.meta.env.VITE_APP_ROOT_API+"merk", {
                name: merkNama,
                logoname: merkPhoto,
            }).then(response => (console.log(response)));
        },
        // TODO must reload page to show recently data
        deleteMerk: function(id){
            let url = import.meta.env.VITE_APP_ROOT_API+'merk/'+id;
            return axios.delete(url)
            .then(response => (console.log(response)));
        }
     },
}
</script>

<style>

</style>