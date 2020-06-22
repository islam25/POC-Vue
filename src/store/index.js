import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);

export default new vuex.Store({
    state: {
        data: [
            { id: 1, name: 'Eslam', department: 'SD' }
        ]
    },
    getters: {
        studentByDept: (state) => (department) => {
            return state.data.filter(item => item.department == department)
        }
    },
    mutations: {
        addStudent(state, student) {
                let id = state.data.length + 1;
                state.data.push({ id: id, name: student.name, department: student.department });
        }
    },
    actions: {
    }
});