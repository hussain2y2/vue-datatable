<template>
  <div class="dataTables_wrapper dt-bootstrap4">
    <div class="row">
      <div class="col-sm-12 col-md-6">
        <div class="dataTables_length">
          <label>Show
            <select name="length" class="custom-select custom-select-sm form-control form-control-sm">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select> entries
          </label>
        </div>
      </div>
      <div class="col-sm-12 col-md-6">
        <div class="dataTables_filter">
          <label>Search:
            <input type="search" class="form-control form-control-sm" placeholder="Search">
          </label>
        </div>
      </div>
    </div>
    <div class="row"></div>
    <div class="row">
      <div class="col-sm-12 col-md-5">
        <div class="dataTables_info" role="status">
          Showing 1 to 10 of 57 entries
        </div>
      </div>
      <div class="col-sm-12 col-md-7">
        <div class="dataTables_paginate paging_simple_numbers" id="example_paginate">
          <ul class="pagination">
            <li class="paginate_button page-item previous disabled">
              <a href="#" class="page-link">Previous</a>
            </li>
            <li class="paginate_button page-item active">
              <a href="#" class="page-link">1</a>
            </li>
            <li class="paginate_button page-item ">
              <a href="#" class="page-link">2</a>
            </li>
            <li class="paginate_button page-item ">
              <a href="#" class="page-link">3</a>
            </li>
            <li class="paginate_button page-item next">
              <a href="#" class="page-link">Next</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DataTable',
    props: {
      msg: String
    }
  }
</script>