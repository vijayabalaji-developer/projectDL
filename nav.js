$(document).ready(function(e) {
  $('.sub-menu').click(function(){
    $(this).toggleClass('tab');
  });

  $("#Home").click(function(){
    $(".Home").html("<p>Home</p>");
  });

  $("#ResourceSubmissionF1").click(function(){
    $(".Home").html("<p>ResourceSubmissionF1</p>");
  });

  $("#ResourceSubmissionF2").click(function(){
    $(".Home").html("<p>ResourceSubmissionF2</p>");
  });

  $("#ResourceEdit").click(function(){
    $(".Home").html("<p>ResourceEdit</p>");
  });

  $("#NewArrivals").click(function(){
    $(".Home").html("<p>NewArrivals</p>");
  });

  $("#AdvancedSearch").click(function(){
    $(".Home").html("<p>AdvancedSearch</p>");
  });

  $("#SimpleSearch").click(function(){
    $(".Home").html("<p>SimpleSearch</p>");
  });

  $("#JournalEntry").click(function(){
    $(".Home").html("<p>JournalEntry</p>");
  });

  $("#JournalSearch").click(function(){
    $(".Home").html("<p>JournalSearch</p>");
  });

  $("#JournalUpdates").click(function(){
    $(".Home").html("<p>JournalUpdates</p>");
  });

  $("#PublicWebsitesEntry").click(function(){
    $(".Home").html("<p>PublicWebsitesEntry</p>");
  });

  $("#PublicWebsitesUpdates").click(function(){
    $(".Home").html("<p>PublicWebsitesUpdates</p>");
  });

  $("#Search").click(function(){
    $(".Home").html("<p>Search</p>");
  });

  $("#DatabaseWebsitesEntry").click(function(){
    $(".Home").html("<p>DatabaseWebsitesEntry</p>");
  });

  $("#DatabaseSearch").click(function(){
    $(".Home").html("<p>DatabaseSearch</p>");
  });

  $("#DatabaseWebsitesUpdate").click(function(){
    $(".Home").html("<p>DatabaseWebsitesUpdate</p>");
  });

});
