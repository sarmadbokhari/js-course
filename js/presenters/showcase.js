(function () {

  var $root = $("#puppy-showcase"), puppyTemplate = $("#templates .puppy").html();

// View Interaction

  // Using event delegation on the $root because the
  // because the image is in the template to be rendered.
  $root.on('click', '.vote-image', function (e) {
    var puppyID = $(this).parents('.puppy').data("id");
    console.log(puppyID);
    e.preventDefault();
  });


// Model Interaction

  puppies.on("create", function (puppy) {
    console.log('Spawned puppy:', puppy);
    var newHTML = Robin.render(puppyTemplate, puppy);
    $root.append(newHTML);
  });

  puppies.on('vote-cast', function (puppy) {
    console.log('Vote cast for:', puppy);
    // TODO
  });

})();
