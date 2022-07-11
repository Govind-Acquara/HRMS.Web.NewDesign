(function (window, undefined) {
  "use strict";

  /*
    NOTE:
    ------
    PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
    WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */

  if ($(".sidebar-toggle").length != 0) {
    // Sidebar Javascript start

    const sidebar = document.querySelector(".sidebar-toggle");
    const overlay = document.querySelector(".overlay-bg");
    const sidebarContent = document.querySelector(".sidebar-content");

    $(".sidebar-toggle").on("click", function () {
      sidebar.classList.toggle("side-active");
      sidebarContent.classList.toggle("side-active");
      overlay.classList.toggle("show");
    });

    document.querySelector(".overlay-bg").addEventListener("click", () => {
      sidebar.classList.remove("side-active");
      sidebarContent.classList.remove("side-active");
      overlay.classList.remove("show");
    });

    document.querySelector(".CloseBTN").addEventListener("click", () => {
      sidebar.classList.remove("side-active");
      sidebarContent.classList.remove("side-active");
      overlay.classList.remove("show");
    });

    // Sidebar Javascript end
  }

  if ($("#ViewLeaveTable").length != 0) {
    // View Leave Page Table Script

    $(document).ready(function () {
      $("#ViewLeaveTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(8)")
        .each(function () {
          var title = $("#ViewLeaveTable tfoot th").eq($(this).index()).text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      var buttons = $("#ViewLeaveTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(".col-md-6:eq(0)");

      var table = $("#ViewLeaveTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  if ($("#WFHtable").length != 0) {
    // WFH Table Script

    $(document).ready(function () {
      $("#WFHtable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(9)")
        .not("th:nth-child(10)")
        .each(function () {
          var title = $("#WFHtable tfoot th").eq($(this).index()).text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#WFHtable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#WFHtable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  if ($("#ViewEmployeeTable").length != 0) {
    // View Employee Table Script

    $(document).ready(function () {
      $("#ViewEmployeeTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(8)")
        .not("th:nth-child(9)")
        .each(function () {
          var title = $("#ViewEmployeeTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#ViewEmployeeTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#ViewEmployeeTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  if ($("#EditEmployeeTable").length != 0) {
    // Edit Employee Table Script
    $(document).ready(function () {
      $("#EditEmployeeTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(8)")
        .not("th:nth-child(9)")
        .each(function () {
          var title = $("#EditEmployeeTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#EditEmployeeTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#EditEmployeeTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  if ($("#EmployeeReportTable").length != 0) {
    //Employee Report Page Table Script

    $(document).ready(function () {
      $("#EmployeeReportTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(10)")
        .each(function () {
          var title = $("#EmployeeReportTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#EmployeeReportTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#EmployeeReportTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  //Forget Attendance Page Table Script

  if ($("#ForgetAttendanceTable").length != 0) {
    $(document).ready(function () {
      $("#ForgetAttendanceTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(7)")
        .each(function () {
          var title = $("#ForgetAttendanceTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#ForgetAttendanceTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#ForgetAttendanceTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  //Attendance Report Page Table Script

  if ($("#AttendanceReportTable").length != 0) {
    $(document).ready(function () {
      $("#AttendanceReportTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(8)")
        .each(function () {
          var title = $("#AttendanceReportTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#AttendanceReportTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: ["excel", "print", "copy", "pdf", "colvis"],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#AttendanceReportTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  //Daily Attendance Page Table Script

  if ($("#DailyAttendanceTable").length != 0) {
    $(document).ready(function () {
      $("#DailyAttendanceTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(7)")
        .each(function () {
          var title = $("#DailyAttendanceTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#DailyAttendanceTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          // buttons: ["excel", "print", "copy", "pdf", "colvis"],
          buttons: [
            { extend: 'excel', className: 'p-1 ' },
            { extend: 'print', className: 'p-1 ' },
            { extend: 'copy', className: 'p-1 ' },
            { extend: 'pdf', className: 'p-1 ' },
            { extend: 'colvis', className: 'p-1' }
        ],
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#DailyAttendanceTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }

  //Mark Attendance Page Table Script

  if ($("#MarkAttendanceTable").length != 0) {
    $(document).ready(function () {
      $("#MarkAttendanceTable tfoot th")
        .not("th:nth-child(1)")
        .not("th:nth-child(7)")
        .each(function () {
          var title = $("#MarkAttendanceTable tfoot th")
            .eq($(this).index())
            .text();
          $(this).html(
            '<input type="text" class="form-control" placeholder="Search ' +
              title +
              '" />'
          );
        });

      $("#MarkAttendanceTable")
        .DataTable({
          responsive: true,
          autoWidth: true,
          lengthChange: false,
          buttons: [
            { extend: 'excel', className: 'p-1 ' },
            { extend: 'print', className: 'p-1 ' },
            { extend: 'copy', className: 'p-1 ' },
            { extend: 'pdf', className: 'p-1 ' },
            { extend: 'colvis', className: 'p-1' }
        ],      
        })
        .buttons()
        .container()
        .appendTo(" .col-md-6:eq(0)");

      var table = $("#MarkAttendanceTable").DataTable();

      table.columns().every(function () {
        var that = this;

        $("input", this.footer()).on("keyup change", function () {
          that.search(this.value).draw();
        });
      });
    });
  }


})(window);
