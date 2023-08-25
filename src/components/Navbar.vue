<template lang="">
    <div>
    <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div class="container-fluid">
            <router-link class="navbar-brand" :to="{name: 'home' }">Home</router-link>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarColor02">
            <ul class="navbar-nav me-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" :to="{name: 'Dashborad' }">Dashborad</router-link>
                </li>
            </ul>
            <form class="d-flex">
                <router-link class="btn btn-secondary my-2 my-sm-0"  :to="{name: 'Singin' }">Sing In</router-link>
            </form>
            </div>
        </div>
    </nav>
    </div>
</template>
<script>
export default {
  
  name: 'Navbar',

};
</script>
<style lang="">
    
</style>