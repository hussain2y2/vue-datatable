import Vue from 'vue';
import DataTable from './DataTable';

const Components = {
  DataTable
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name]);
});

export default Components;