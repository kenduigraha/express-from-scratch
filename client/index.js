$('document').ready(() => {
  let $description = $('#description')

  // $description.html('change this paragraph')

  $.getJSON(`http://localhost:3000/books`, (data) => {
    console.log(data)
    $description.html(`${data[0].id}: ${data[0].name} - ${data[0].price}$`)
  })

})
