<template>
    <div class="container">
        <h2 style="text-align: center;">Student Form</h2>
        <h4>New Student</h4>
        <hr>
        <div class="row">
            <div class="col-3">
                <h4>Name: </h4>
                <br />
                <h4>Department: </h4>
            </div>
            <div class="col-4">
                <input v-model="studentName" class="form-control" type="text" placeholder="Enter Student Name"> 
                <br />
                <input v-model="department" class="form-control" type="text" placeholder="Enter Department">
                <br />
                <button class="btn btn-primary" style="width: 100%;" @click="saveData()">Save</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

    export default {
        name: 'Form',
        data:{
            return:{
                studentName: '',
                department: ''
            }
        },
        methods:{
            ...mapMutations({
                addStudent: 'addStudent'
            }),
            saveData(){
                //alert(this.studentName + ' ' + this.department)
                //this.$store.commit('addStudent');
                this.addStudent({name: this.studentName, department: this.department});

                this.$router.push('/');
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>