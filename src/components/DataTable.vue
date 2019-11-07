<template>
  <div class="dataTables_wrapper dt-bootstrap4">
    <div class="row">
      <div class="col-sm-12 col-md-6" v-if="pageOption">
        <div class="dataTables_length">
          <label>Show
            <select name="length" @change="setPerPage($event)" v-model="perPage"
                    class="custom-select custom-select-sm form-control form-control-sm">
              <option v-for="(option, key) in pageOptions" :key="key" :value="option">{{ option }}</option>
            </select> entries
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6" v-if="enableSearch">
        <div class="dataTables_filter">
          <label>Search:
            <input type="search" @keyup="setSearchText($event)" v-model="searchText"
                   class="form-control form-control-sm">
          </label>
        </div>
      </div>
    </div>
    <div class="row">
      <table class="table table-striped table-bordered dataTable" style="width: 100%;">
        <thead>
        <tr role="row">
          <th v-for="(column, index) in columns" @click="sortByColumn(column)" :key="index"
              :class="column.name !== sortedColumn ? 'sorting' : order === 'asc' ? 'sorting_asc' : 'sorting_desc'">
            {{ column.value }}
          </th>
          <th class="sorting_asc_disabled sorting_desc_disabled" v-if="actions.enabled">ACTIONS</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="tableData.length === 0">
          <td class="lead text-center" :colspan="columns.length + 1">No data available in table.</td>
        </tr>
        <tr v-else v-for="(record, index) in tableData" :key="index">
          <td v-for="(value, key) in record" :key="key">{{ value }}</td>
          <td v-if="actions.enabled">ACTIONS</td>
        </tr>
        </tbody>
        <tfoot v-if="tableFooter">
        <tr>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.value }}
          </th>
          <th class="sorting_asc_disabled sorting_desc_disabled" v-if="actions.enabled">ACTIONS</th>
        </tr>
        </tfoot>
      </table>
    </div>
    <div class="row">
      <div class="col-sm-12 col-md-5" v-if="tableData.length > 0">
        <div class="dataTables_info" role="status">
          Showing 1 to 10 of 57 entries
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <div class="dataTables_paginate paging_simple_numbers" id="example_paginate">
          <ul class="pagination">
            <li class="paginate_button page-item previous"
                :class="{'disabled' : activePage === 1}">
              <a href="javascript:" @click.prevent="changePage(activePage - 1)" class="page-link">Previous</a>
            </li>
            <li class="paginate_button page-item" v-for="(page, index) in pages" :key="index"
                :class="{'active': page === pagination.meta.current_page}">
              <a href="javascript:" @click.prevent="changePage(page)" class="page-link">{{ page }}</a>
            </li>
            <li class="paginate_button page-item next" :class="{'disabled': activePage === pagination.meta.last_page }">
              <a href="javascript:" @click.prevent="changePage(activePage + 1)" class="page-link">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'DataTable',
        props: {
            token: String,
            fetchUrl: {type: String, required: true},
            columns: {type: Array, required: true},
            enableSearch: Boolean,
            pageOption: Boolean,
            actions: {
                type: String,
                enabled: Boolean,
            },
            tableFooter: Boolean,
        },
        data() {
            return {
                url: '',
                tableData: [],
                pageOptions: [
                    10, 25, 50, 100, 125
                ],
                pagination: {
                    meta: {to: 1, from: 1}
                },
                offset: 4,
                perPage: 10,
                activePage: 1,
                sortedColumn: this.columns[0].name,
                order: 'asc',
                searchText: '',
            }
        },
        computed: {
            pages() {
                if (!this.pagination.meta.to) {
                    return []
                }
                let from = this.pagination.meta.current_page - this.offset;
                if (from < 1) {
                    from = 1
                }
                let to = from + (this.offset * 2);
                if (to >= this.pagination.meta.last_page) {
                    to = this.pagination.meta.last_page;
                }
                let pagesArray = [];
                for (let page = from; page <= to; page++) {
                    pagesArray.push(page);
                }
                return pagesArray;
            },
            totalData() {
                return (this.pagination.meta.to - this.pagination.meta.from) + 1
            }
        },
        watch: {
            fetchUrl: {
                handler: function (fetchUrl) {
                    this.url = fetchUrl
                },
                immediate: true
            }
        },
        created() {
            return this.fetch();
        },
        methods: {
            setPerPage(e) {
                this.perPage = e.target.value;
                this.fetch();
            },
            setSearchText(e) {
                this.searchText = e.target.value;
                this.fetch();
            },
            sortByColumn(column) {
                if (column.name === this.sortedColumn) {
                    this.order = (this.order === 'asc') ? 'desc' : 'asc';
                } else {
                    this.sortedColumn = column.name;
                    this.order = 'asc';
                }
                this.fetch();
            },
            serialNumber(key) {
                return (this.activePage - 1) * this.perPage + 1 + key
            },
            changePage(pageNumber) {
                this.activePage = pageNumber;
                this.fetch();
            },
            fetch() {
                axios.defaults.headers.common["Authorization"] = this.token;
                let dataFetchUrl = `${this.url}?page=${this.activePage}&column=${this.sortedColumn}&order=${this.order}&per_page=${this.perPage}&search=${this.searchText}`;
                axios.get(dataFetchUrl)
                    .then(({data}) => {
                        this.pagination = data;
                        this.tableData = data.data;
                    })
            },
        },
        filters: {
            columnHead(value) {
                return value.split('_').join(' ').toUpperCase()
            }
        }
    }
</script>