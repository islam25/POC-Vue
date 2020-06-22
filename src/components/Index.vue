<template>
  <div class="container">
    <br />
    <router-link class="btn btn-primary" to="/create">Create New Student</router-link>
    <table class="table table-bordered" style="margin-top: 20px">
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Department</th>
      </tr>
      <tr v-for="student in students" :key="student.id">
        <td>{{ student.id }}</td>
        <td>{{ student.name }}</td>
        <td>{{ student.department }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Index",
  computed: {
    students() {
      return this.$store.state.data;
    },
    studentByDepartment() {
      return this.$store.getters.studentByDept("SD");
    }
  }
};
</script>

<style scoped>
.w-30 {
  width: 30%;
}
</style>