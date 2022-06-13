  
  $(".btnExport,.btnMonth,.btnDOJ").click(function () {
    var $this = $(this);
    var tempTable = $("tab-pane .active").find("table").html();
    if($this.hasClass('btnExport'))
    {
     
       $("#testExportId .excludeExport").remove();
       tableToExcel("testExportId", "Sheet", "CurrentMonthBirthday");
      
       $("#testExportId").html(tempTable);

    }
    if($this.hasClass('btnMonth'))
    {
      $("#month_leave .excludeExport").remove();
      tableToExcel("month_leave", "Sheet", "CurrentMonthLeave");

      $("#month_leave").html(tempTable);
    }
    if($this.hasClass('btnDOJ'))
    {
      $("#current_month_doj .excludeExport").remove();
      tableToExcel("current_month_doj", "Sheet", "CurrentMonthJoining");
  
       $("#current_month_doj").html(tempTable);

    }
    
    
}); 

  

  
  function tableToExcel(table, sheetName, fileName) {
    
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
   

    var uri = 'data:application/vnd.ms-excel;base64,',
        templateData = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>',
        base64Conversion = function (s) { return window.btoa(unescape(encodeURIComponent(s))) },
        formatExcelData = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) }

    $("tbody > tr[data-level='0']").show();

    if (!table.nodeType)
        table = document.getElementById(table)

    var ctx = { worksheet: sheetName || 'Worksheet', table: table.innerHTML }

    var element = document.createElement('a');
    element.setAttribute('href', 'data:application/vnd.ms-excel;base64,' + 
    base64Conversion(formatExcelData(templateData, ctx)));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    

    $("tbody > tr[data-level='0']").hide();
}

