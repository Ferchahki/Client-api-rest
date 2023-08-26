<template lang="">
    <div>
        <h1>Sigin In</h1>
    </div>
<div class="row">
<div class="col-md-6 mx-auto">
    <form @submit.prevent="submit()">
        <div class="form-group">
        <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
        <input v-model="user.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
        <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
        <input v-model="user.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" autocomplete="off">
        </div>
        <button  class="btn btn-primary">SING IN </button>
    </form>
        </div>
    </div>

</template>
<script>
import axios from 'axios'
import { mapActions } from 'vuex';
export default {
    data(){
        return {
            user : {
                email:'',
                password:''
            }
        }
    },
    methods: {
        ...mapActions({

            'signIn': 'auth/signIn'

        }),
       submit() {
        
           this.signIn(this.user);
       }
    },
}
</script>
<style lang="">
    
</style>