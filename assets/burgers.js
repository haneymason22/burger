$(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newburger
    }).then(
      function() {
        console.log("created new cat");
        location.reload();
      }
    );
  });

  $(".create-form").on("devourIt", function(event) {
    event.preventDefault();

    var newCat = {
      name: $("#bu").val().trim(),
      sleepy: $("[name=sleepy]:checked").val().trim()
    };

    $.ajax("/api/cats", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

