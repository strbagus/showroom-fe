<template>
<nav class="
  relative
  w-full
  flex flex-wrap
  items-center
  justify-between
  py-4
  bg-gray-100
  text-gray-500
  hover:text-gray-700
  focus:text-gray-700
  shadow-lg
  navbar navbar-expand-lg navbar-light
  ">
  <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
  <button class="
      navbar-toggler
      text-gray-500
      border-0
      hover:shadow-none hover:no-underline
      py-2
      px-2.5
      bg-transparent
      focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
    " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
    class="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <path fill="currentColor"
      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
    </path>
  </svg>
  </button>
  <div class="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
  <a class="
        flex
        items-center
        text-gray-900
        hover:text-gray-900
        focus:text-gray-900
        mt-2
        lg:mt-0
        mr-1
      " href="#">
    <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" style="height: 15px" alt=""
      loading="lazy" />
  </a>
  <!-- Left links -->
  <ul class="navbar-nav flex flex-col pl-0 list-style-none mr-auto">
    <li class="nav-item p-2">
      <router-link to="/">
        <div class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Home</div>
      </router-link>
    </li>
    <li class="nav-item p-2">
      <router-link to="/dashboard">
        <div class="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0">Admin</div>
      </router-link>
    </li>
  </ul>
  <!-- Left links -->
  </div>
  <!-- Collapsible wrapper -->

  <!-- Right elements -->
  <div class="flex items-center relative">
  <div class="dropdown relative">
    <a class="dropdown-toggle flex items-center hidden-arrow" href="#" id="dropdownMenuButton2" role="button"
      data-bs-toggle="dropdown" aria-expanded="false">
      <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" class="rounded-full"
        style="height: 25px; width: 25px" alt="" loading="lazy" />
    </a>
    <ul class="
    dropdown-menu
    min-w-max
    absolute
    hidden
    bg-white
    text-base
    z-50
    float-left
    py-2
    list-none
    text-left
    rounded-lg
    shadow-lg
    mt-1
    hidden
    m-0
    bg-clip-padding
    border-none
    left-auto
    right-0
  " aria-labelledby="dropdownMenuButton2">
      <li>
        <a class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Action</a>
      </li>
      <li>
        <a class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Another action</a>
      </li>
      <li>
        <a class="
        dropdown-item
        text-sm
        py-2
        px-4
        font-normal
        block
        w-full
        whitespace-nowrap
        bg-transparent
        text-gray-700
        hover:bg-gray-100
      " href="#">Something else here</a>
      </li>
    </ul>
  </div>
  </div>
  <!-- Right elements -->
  </div>
</nav>
    <!-- <nav class="bg-white shadow dark:bg-gray-800">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
            <a href="#" class="text-gray-800 transition-colors duration-200 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">home</a>

            <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">features</a>

            <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">pricing</a>

            <a href="#" class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-200 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">blog</a>

        </div>
    </nav> -->
</template>