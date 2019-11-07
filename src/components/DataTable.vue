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
    <div class="row">
      <table class="table table-striped table-bordered dataTable" style="width: 100%;">
        <thead>
        <tr role="row">
          <th class="sorting_asc" rowspan="1" colspan="1" aria-sort="ascending" aria-label="Name" >Name</th>
          <th class="sorting" rowspan="1" colspan="1" aria-label="Position">Position</th>
          <th class="sorting" rowspan="1" colspan="1" aria-label="Office">Office</th>
          <th class="sorting" rowspan="1" colspan="1" aria-label="Age">Age</th>
          <th class="sorting" rowspan="1" colspan="1" aria-label="Start Date">Start Date</th>
          <th class="sorting" rowspan="1" colspan="1" aria-label="Salary">Salary</th>
<!--          <th class="sorting_asc_disabled sorting_desc_disabled">Actions</th>-->
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Tiger Nixon</td>
          <td>System Architect</td>
          <td>Edinburgh</td>
          <td>61</td>
          <td>2011/04/25</td>
          <td>$320,800</td>
        </tr>
        <tr>
          <td>Garrett Winters</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>63</td>
          <td>2011/07/25</td>
          <td>$170,750</td>
        </tr>
        <tr>
          <td>Ashton Cox</td>
          <td>Junior Technical Author</td>
          <td>San Francisco</td>
          <td>66</td>
          <td>2009/01/12</td>
          <td>$86,000</td>
        </tr>
        <tr>
          <td>Cedric Kelly</td>
          <td>Senior Javascript Developer</td>
          <td>Edinburgh</td>
          <td>22</td>
          <td>2012/03/29</td>
          <td>$433,060</td>
        </tr>
        <tr>
          <td>Airi Satou</td>
          <td>Accountant</td>
          <td>Tokyo</td>
          <td>33</td>
          <td>2008/11/28</td>
          <td>$162,700</td>
        </tr>
        <tr>
          <td>Brielle Williamson</td>
          <td>Integration Specialist</td>
          <td>New York</td>
          <td>61</td>
          <td>2012/12/02</td>
          <td>$372,000</td>
        </tr>
        <tr>
          <td>Herrod Chandler</td>
          <td>Sales Assistant</td>
          <td>San Francisco</td>
          <td>59</td>
          <td>2012/08/06</td>
          <td>$137,500</td>
        </tr>
        <tr>
          <td>Rhona Davidson</td>
          <td>Integration Specialist</td>
          <td>Tokyo</td>
          <td>55</td>
          <td>2010/10/14</td>
          <td>$327,900</td>
        </tr>
        <tr>
          <td>Colleen Hurst</td>
          <td>Javascript Developer</td>
          <td>San Francisco</td>
          <td>39</td>
          <td>2009/09/15</td>
          <td>$205,500</td>
        </tr>
        <tr>
          <td>Sonya Frost</td>
          <td>Software Engineer</td>
          <td>Edinburgh</td>
          <td>23</td>
          <td>2008/12/13</td>
          <td>$103,600</td>
        </tr>
        <tr>
          <td>Jena Gaines</td>
          <td>Office Manager</td>
          <td>London</td>
          <td>30</td>
          <td>2008/12/19</td>
          <td>$90,560</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Office</th>
          <th>Age</th>
          <th>Start date</th>
          <th>Salary</th>
        </tr>
        </tfoot>
      </table>
    </div>
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