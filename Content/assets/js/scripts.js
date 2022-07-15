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
        .not("th:nth-child(11)")
        .not("th:nth-child(12)")
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
        .not("th:nth-child(5)")
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


    //Forget Attendance Report Page Table Script

    if ($("#ForgotAttendanceReport").length != 0) {
      $(document).ready(function () {
        $("#ForgotAttendanceReport tfoot th")
          .not("th:nth-child(1)")
          .not("th:nth-child(8)")
          .each(function () {
            var title = $("#ForgotAttendanceReport tfoot th")
              .eq($(this).index())
              .text();
            $(this).html(
              '<input type="text" class="form-control" placeholder="Search ' +
                title +
                '" />'
            );
          });
  
        $("#ForgotAttendanceReport")
          .DataTable({
            responsive: true,
            autoWidth: true,
            lengthChange: false,
            buttons: ["excel", "print", "copy", "pdf", "colvis"],
          })
          .buttons()
          .container()
          .appendTo(" .col-md-6:eq(0)");
  
        var table = $("#ForgotAttendanceReport").DataTable();
  
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





  // Weekly Off Page Script start

  //Table checkbox Script

  if ($('#sundayAll , #mondayAll , #tuesdayAll , #wednesdayAll , #thursdayAll , #fridayAll , #saturdayAll').length != 0) {


$('#sundayAll , #mondayAll , #tuesdayAll , #wednesdayAll , #thursdayAll , #fridayAll , #saturdayAll').click(function(e) {
  var tr = $(e.target).closest('tr');
   $('td input[type=checkbox]', tr).prop('checked', this.checked);
});

  }

  if ($('#sunday1 , #sunday2 , #sunday3 , #sunday4 , #sunday5').length != 0) {

$('#sunday1 , #sunday2 , #sunday3 , #sunday4 , #sunday5').click(function(){
    var isChecked = $("#sundayAll").is(":checked");
    var isAllNotChecked=$("#sunday1 , #sunday2 , #sunday3 , #sunday4 , #sunday5").is(":not(:checked)");
    if(isChecked)
    { $("#sundayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#sundayAll").prop("checked", false);
        }
        else 
        {
            $("#sundayAll").prop("checked", true);
        }
 });

}


if ($('#monday1 , #monday2 , #monday3 , #monday4 , #monday5').length != 0) {


 $('#monday1 , #monday2 , #monday3 , #monday4 , #monday5').click(function(){
    var isChecked = $("#mondayAll").is(":checked");
    var isAllNotChecked=$("#monday1 , #monday2 , #monday3 , #monday4 , #monday5").is(":not(:checked)");
    if(isChecked)
    { $("#mondayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#mondayAll").prop("checked", false);
        }
        else 
        {
            $("#mondayAll").prop("checked", true);
        }

 });

}


if ($('#tuesday1 , #tuesday2 , #tuesday3 , #tuesday4 , #tuesday5').length != 0) {

 $('#tuesday1 , #tuesday2 , #tuesday3 , #tuesday4 , #tuesday5').click(function(){
    var isChecked = $("#tuesdayAll").is(":checked");
    var isAllNotChecked=$("#tuesday1 , #tuesday2 , #tuesday3 , #tuesday4 , #tuesday5").is(":not(:checked)");
    if(isChecked)
    { $("#tuesdayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#tuesdayAll").prop("checked", false);
        }
        else 
        {
            $("#tuesdayAll").prop("checked", true);
        }

 });

}


if ($('#wednesday1 , #wednesday2 , #wednesday3 , #wednesday4 , #wednesday5').length != 0) {


 $('#wednesday1 , #wednesday2 , #wednesday3 , #wednesday4 , #wednesday5').click(function(){
    var isChecked = $("#wednesdayAll").is(":checked");
    var isAllNotChecked=$("#wednesday1 , #wednesday2 , #wednesday3 , #wednesday4 , #wednesday5").is(":not(:checked)");
    if(isChecked)
    { $("#wednesdayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#wednesdayAll").prop("checked", false);
        }
        else 
        {
            $("#wednesdayAll").prop("checked", true);
        }
});

}


if ($('#thursday1 , #thursday2 , #thursday3 , #thursday4 , #thursday5').length != 0) {

 $('#thursday1 , #thursday2 , #thursday3 , #thursday4 , #thursday5').click(function(){
    var isChecked = $("#thursdayAll").is(":checked");
    var isAllNotChecked=$("#thursday1 , #thursday2 , #thursday3 , #thursday4 , #thursday5").is(":not(:checked)");
    if(isChecked)
    { $("#thursdayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#thursdayAll").prop("checked", false);
        }
        else 
        {
            $("#thursdayAll").prop("checked", true);
        }
 });

}

if ($('#friday1 , #friday2 , #friday3 , #friday4 , #friday5').length != 0) {

 $('#friday1 , #friday2 , #friday3 , #friday4 , #friday5').click(function(){
    var isChecked = $("#fridayAll").is(":checked");
    var isAllNotChecked=$("#friday1 , #friday2 , #friday3 , #friday4 , #friday5").is(":not(:checked)");
    if(isChecked)
    { $("#fridayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#fridayAll").prop("checked", false);
        }
        else 
        {
            $("#fridayAll").prop("checked", true);
        }
 });

}

if ($('#saturday1 , #saturday2 , #saturday3 , #saturday4 , #saturday5').length != 0) {


 $('#saturday1 , #saturday2 , #saturday3 , #saturday4 , #saturday5').click(function(){
    var isChecked = $("#saturdayAll").is(":checked");
    var isAllNotChecked=$("#saturday1 , #saturday2 , #saturday3 , #saturday4 , #saturday5").is(":not(:checked)");
    if(isChecked)
    { $("#saturdayAll").prop("checked", false);}
    else if(isAllNotChecked)
        {
            $("#saturdayAll").prop("checked", false);
        }
        else 
        {
            $("#saturdayAll").prop("checked", true);
        }
 });

}

if ($('#currentYear').length != 0) {

$('#currentYear').click(function(){
  if ($(this).is(':checked')) {
        // $('#currentYear').prop("checked", false);
        $('#yearStartMonth , #yearEndMonth').prop("disabled", true);
  } else {
        $('#yearStartMonth , #yearEndMonth').prop("disabled", false);
  }
});

}

if ($('#customYear').length != 0) {

$('#customYear').click(function(){
  if ($(this).is(':checked')) {
        $('#currentYear').prop("checked", false);
        $('#yearStartMonth , #yearEndMonth').prop("disabled", false);
  } else {
        $('#yearStartMonth , #yearEndMonth').prop("disabled", true);
  }
});

}
  // Weekly Off Page Script End


  if ($('#WBL').length != 0) {


    $('#WBL').click(function(){
      if ($(this).is(':checked')) {
            $('#SAFD , #SAFL').prop("disabled", true);
      } else {
            $('#SAFD , #SAFL').prop("disabled", false);
      }
    });
    
    }
    
    if ($('#WBS').length != 0) {
    
    $('#WBS').click(function(){
      if ($(this).is(':checked')) {
            $('#WBL').prop("checked", false);
            $('#SAFD , #SAFL').prop("disabled", false);
      } else {
            $('#SAFD , #SAFL').prop("disabled", true);
      }
    });
    
    }

})(window);
