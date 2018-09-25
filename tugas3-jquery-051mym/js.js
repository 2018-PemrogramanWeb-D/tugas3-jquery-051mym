$(document).ready(function(){
    $("#btn").click(function(){
        $("#t").html("<b>Data Pekerja Perusahaan X</b>");
    });
});

$(document).ready(function(){
    $("#btntabel").click(function(){
        $("#panel").slideToggle("slow");
        var div = $("div");
        div.animate({opacity: '0.3'}, "slow");
        div.animate({opacity: '1'}, "slow");
    });
});

$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
