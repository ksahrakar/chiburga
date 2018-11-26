
$(".addBurger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("addBurger clicked");
    var newBurger = {
    burger_name: $("#b_name").val().trim(),
    devoured: false
    };

    // Send the POST request
    $.ajax("/api/burgers/",{type:"POST", data: newBurger}).then(
    function() {
        console.log("...your new creation is available for consumption");
        // Reload the page to get the updated list
        location.reload();
    });
});

$(".eatBurger").on("click", function(event) {
    var id = $(this).data("burgerID");

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {type: "PUT", data: id}).then(
      function() {
        console.log("... you consumed a burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

