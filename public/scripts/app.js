console.log("Sanity Check: JS is working!");

const handleError = (xhr, status, errorThrown) => console.log('error thrown');



$(document).ready(function(){


const handleSuccess = function(json) {
    for(i=0; i<json.length; i++) {
    
    $('#selfCareList').append(`<li> Task: ${json[i].task} and ${json[i].description}</li>`)
    }
    $('#selfCareList li').append('<button class="delete" type="button"> Delete </button>  <button class="edit" type="button"> Edit </button>')
}


    $.ajax({
        method: 'GET',
        url: '/api/selfcare',
        success: handleSuccess,
        error: handleError
      });



  $('#selfCareForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/selfcare',
      data: $(this).serialize(),
      success: handleSuccessThree,
      error: handleError
    });
  });

  $('#selfCareForm').on('click', '.delete', function() {
    console.log('clicked delete button to', '/api/selfcare/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/selfcare/'+$(this).attr('data-id'),
      success: deleteBookSuccess,
      error: deleteBookError
    });
  });



  


});

var allbooks = [];

function handleSuccess(json) {
    allBooks = json;
    render();
  }



function deleteBookSuccess(json) {
    var book = json;
    console.log(json);
    var bookId = book._id;
    console.log('delete book', bookId);
    // find the book with the correct ID and remove it from our allBooks array
    for(var index = 0; index < allBooks.length; index++) {
      if(allBooks[index]._id === bookId) {
        allBooks.splice(index, 1);
        break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
      }
    }
    render();
  }

































/*
var allBooks = [];

$(document).ready(function(){

  var $booksList = $('#bookTarget');
  $.ajax({
    method: 'GET',
    url: '/api/books',
    success: handleSuccess,
    error: handleError
  });

  $('#newBookForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/books',
      data: $(this).serialize(),
      success: newBookSuccess,
      error: newBookError
    });
  });





  $booksList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/books/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/books/'+$(this).attr('data-id'),
      success: deleteBookSuccess,
      error: deleteBookError
    });
  });

});

function getBookHtml(book) {
  return `<hr>
          <p>
            <b>${book.title}</b>
            by ${book.author}
            <button type="button" name="button" class="deleteBtn btn btn-danger pull-right" data-id=${book._id}>Delete</button>
          </p>`;
}

function getAllBooksHtml(books) {
  return books.map(getBookHtml).join("");
}

// helper function to render all posts to view
// note: we empty and re-render the collection each time our post data changes
function render () {
  // empty existing posts from view
  $booksList.empty();

  // pass `allBooks` into the template function
  var booksHtml = getAllBooksHtml(allBooks);

  // append html to the view
  $booksList.append(booksHtml);
};

function handleSuccess(json) {
  allBooks = json;
  render();
}

function handleError(e) {
  console.log('uh oh');
  $('#bookTarget').text('Failed to load books, is the server working?');
}

function newBookSuccess(json) {
  $('#newBookForm input').val('');
  allBooks.push(json);
  render();
}

function newBookError() {
  console.log('newbook error!');
}

function deleteBookSuccess(json) {
  var book = json;
  console.log(json);
  var bookId = book._id;
  console.log('delete book', bookId);
  // find the book with the correct ID and remove it from our allBooks array
  for(var index = 0; index < allBooks.length; index++) {
    if(allBooks[index]._id === bookId) {
      allBooks.splice(index, 1);
      break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteBookError() {
  console.log('deletebook error!');
}
*/

