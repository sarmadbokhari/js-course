$(function () {

  var $root = $('form.new-puppy');

// View Interaction

  $root.on('submit', function (e) {
    // TODO
    e.preventDefault();
    puppies.create({
      name: $('.name').val(),
      image_url: $('.image').val(),
    });
  });

});
