jQuery(document).ready(function ($) {
  "use strict";
  // Table
  $("#full-width-table").DataTable();

  //Table Style 1
  $("#style1").DataTable({
    order: [[3, "desc"]],
  });

  //Table Style 2
  $("#style2").DataTable({
    columnDefs: [
      {
        targets: [0],
        orderData: [0, 1],
      },
      {
        targets: [1],
        orderData: [1, 0],
      },
      {
        targets: [4],
        orderData: [4, 0],
      },
    ],
  });

  // Table Style 3
  $("#style3").DataTable({
    columnDefs: [
      {
        targets: [2],
        visible: false,
        searchable: false,
      },
      {
        targets: [3],
        visible: false,
      },
    ],
  });

  //Table Style 4
  $("#style4").DataTable();

  //Table Style 5
  $("#style5").DataTable({
    dom: '<"top"i>rt<"bottom"flp><"clear">',
  });

  //Table Style 6
  $("#style6").DataTable();

  //Table Style 7
  $("#style7").DataTable({
    pagingType: "full_numbers",
  });

  // Table Style 8
  $("#style8").DataTable({
    scrollY: "200px",
    scrollCollapse: true,
    paging: false,
  });
  //Table Style 9
  $("#style9").DataTable({
    scrollX: true,
  });
  //Table Style 10
  $("#style10").DataTable({
    scrollY: 200,
    scrollX: true,
  });
  //Table Style 11
  $("#style11").DataTable({
    language: {
      lengthMenu: "Display _MENU_ records per page",
      zeroRecords: "Nothing found - sorry",
      info: "Showing page _PAGE_ of _PAGES_",
      infoEmpty: "No records available",
      infoFiltered: "(filtered from _MAX_ total records)",
    },
  });
  //Table Style 12
  $("#style12").DataTable({
    ajax: "http://dummy.restapiexample.com/api/v1/employees",
    columns: [{ data: "id" }, { data: "employee_name" }, { data: "employee_salary" }, { data: "employee_age" }],
  });
  //Table Style 13
  var t = $("#style13").DataTable();
  var counter = 1;

  $("#addRow").on("click", function () {
    t.row.add([counter + ".1", counter + ".2", counter + ".3", counter + ".4", counter + ".5"]).draw(false);

    counter++;
  });

  // Automatically add a first row of data
  $("#addRow").click();

  //Table Style 14
  $("#style14 tfoot th").each(function () {
    var title = $(this).text();
    $(this).html('<input type="text" class="form-control" placeholder="Search ' + title + '" />');
  });

  // DataTable
  var table = $("#style14").DataTable();

  // Apply the search
  table.columns().every(function () {
    var that = this;

    $("input", this.footer()).on("keyup change clear", function () {
      if (that.search() !== this.value) {
        that.search(this.value).draw();
      }
    });
  });

  //Table Style 15
  $("#style15").DataTable({
    initComplete: function () {
      this.api()
        .columns()
        .every(function () {
          var column = this;
          var select = $('<select><option value=""></option></select>')
            .appendTo($(column.footer()).empty())
            .on("change", function () {
              var val = $.fn.dataTable.util.escapeRegex($(this).val());

              column.search(val ? "^" + val + "$" : "", true, false).draw();
            });

          column
            .data()
            .unique()
            .sort()
            .each(function (d, j) {
              select.append('<option value="' + d + '">' + d + "</option>");
            });
        });
    },
  });

  //Table Style 16
  var table = $("#style16").DataTable();

  $("#style16 tbody").on("mouseenter", "td", function () {
    var colIdx = table.cell(this).index().column;

    $(table.cells().nodes()).removeClass("highlight");
    $(table.column(colIdx).nodes()).addClass("highlight");
  });

  //Table Style 17
  function format(d) {
    // `d` is the original data object for the row
    return (
      '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
      "<tr>" +
      "<td>Full name:</td>" +
      "<td>" +
      d.name +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Extension number:</td>" +
      "<td>" +
      d.extn +
      "</td>" +
      "</tr>" +
      "<tr>" +
      "<td>Extra info:</td>" +
      "<td>And any further details here (images etc)...</td>" +
      "</tr>" +
      "</table>"
    );
  }
  var table = $("#style17").DataTable({
    ajax: "http://dummy.restapiexample.com/api/v1/employees",
    columns: [
      {
        className: "details-control",
        data: "id",
        defaultContent: "",
      },
      { data: "employee_name" },
      { data: "employee_salary" },
      { data: "employee_age" },
    ],
    order: [[1, "asc"]],
  });

  // Add event listener for opening and closing details
  $("#style17 tbody").on("click", "td.details-control", function () {
    var tr = $(this).closest("tr");
    var row = table.row(tr);

    if (row.child.isShown()) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass("shown");
    } else {
      // Open this row
      row.child(format(row.data())).show();
      tr.addClass("shown");
    }
  });

  //Table Style 18
  var table = $("#style18").DataTable();

  $("#style18 tbody").on("click", "tr", function () {
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    } else {
      table.$("tr.selected").removeClass("selected");
      $(this).addClass("selected");
    }
  });

  $("#btn-del").click(function () {
    table.row(".selected").remove().draw(false);
  });

  //Table Style 19
  var table = $("#style19").DataTable({
    columnDefs: [
      {
        orderable: false,
        targets: [1, 2, 3],
      },
    ],
  });

  $("#submit").click(function () {
    var data = table.$("input, select").serialize();
    alert("The following data would have been submitted to the server: \n\n" + data.substr(0, 120) + "...");
    return false;
  });

  //Table Style 20
  var table = $("#style20").DataTable({
    scrollY: "200px",
    paging: false,
  });

  $("a.toggle-vis").on("click", function (e) {
    e.preventDefault();

    // Get the column API object
    var column = table.column($(this).attr("data-column"));

    // Toggle the visibility
    column.visible(!column.visible());
  });

  //Table Style 21
  var groupColumn = 2;
  var table = $("#style21").DataTable({
    columnDefs: [{ visible: false, targets: groupColumn }],
    order: [[groupColumn, "asc"]],
    displayLength: 25,
    drawCallback: function (settings) {
      var api = this.api();
      var rows = api.rows({ page: "current" }).nodes();
      var last = null;

      api
        .column(groupColumn, { page: "current" })
        .data()
        .each(function (group, i) {
          if (last !== group) {
            $(rows)
              .eq(i)
              .before('<tr class="group"><td colspan="5">' + group + "</td></tr>");

            last = group;
          }
        });
    },
  });

  // Order by the grouping
  $("#style21 tbody").on("click", "tr.group", function () {
    var currentOrder = table.order()[0];
    if (currentOrder[0] === groupColumn && currentOrder[1] === "asc") {
      table.order([groupColumn, "desc"]).draw();
    } else {
      table.order([groupColumn, "asc"]).draw();
    }
  });

  //Table Style 22
  $("#style22").DataTable({
    footerCallback: function (row, data, start, end, display) {
      var api = this.api(),
        data;

      // Remove the formatting to get integer data for summation
      var intVal = function (i) {
        return typeof i === "string" ? i.replace(/[\$,]/g, "") * 1 : typeof i === "number" ? i : 0;
      };

      // Total over all pages
      var total = api
        .column(4)
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      // Total over this page
      var pageTotal = api
        .column(4, { page: "current" })
        .data()
        .reduce(function (a, b) {
          return intVal(a) + intVal(b);
        }, 0);

      // Update footer
      $(api.column(4).footer()).html("$" + pageTotal + " ( $" + total + " total)");
    },
  });

  //Table Style 23
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  $("#myTable1").DataTable({
    ajax: "http://dummy.restapiexample.com/api/v1/employees",
    columns: [{ data: "id" }, { data: "employee_name" }, { data: "employee_salary" }, { data: "employee_age" }],
    scrollY: 200,
    scrollCollapse: true,
    paging: false,
  });

  $("#myTable2").DataTable({
    ajax: "http://dummy.restapiexample.com/api/v1/employees",
    columns: [{ data: "id" }, { data: "employee_name" }, { data: "employee_salary" }, { data: "employee_age" }],
    scrollY: 200,
    scrollCollapse: true,
    paging: false,
  });

  // Apply a search to the second table for the demo
  $("#myTable2").DataTable().search("New York").draw();
});
