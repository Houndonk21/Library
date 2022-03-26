
let myLibrary = [];

class Book
{
    constructor(title, author, pages, readStatus = true)
    {
        this.title = title
        this.author = author
        this.pages = pages
        this.readStatus = readStatus
    }
  
}

class UI
{
    static displayBooks() 
    {
        const storedBooks = 
        [
            {
                title: "book one",
                author: 'author',
                pages: '256',
                readStatus: 'read'
            },
            {
                title: "book two",
                author: 'author',
                pages: '2566',
                readStatus: 'Unread'
            }
        ];

        const books = storedBooks

        books.forEach((book) => UI.addBookToLibrary(book))
    }

    static addBookToLibrary(book)
    {
        const list = document.querySelector(".book-list");

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><input type="button" class="read-status-list" value="read"></td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }
    
    static deleteBook(el) {
        if(el.classList.contains('delete')) {
          el.parentElement.parentElement.remove();
        }
    }
    static changeStatus(foo)
    {
        if(foo.classList.contains('read-status-list'))
        {
            foo.buttonToggle();
        }
    }

    static clearFields()
    {
        document.querySelector(".title").value = '';
        document.querySelector(".author").value = '';
        document.querySelector(".pages").value = '';
    }
}
//display books
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//submit book
document.querySelector(".book-form").addEventListener("submit", (e) => {
    e.preventDefault()

    const title = document.querySelector(".title").value
    const author = document.querySelector(".author").value
    const pages = document.querySelector(".pages").value
    const readStatus = document.querySelector(".read-status").value

    if(title === '' || author === '' || pages === '')
    {
        alert("Complete all the fields!!");
    }
    else
    {
        const book = new Book(title, author, pages, readStatus)

        UI.addBookToLibrary(book);

        UI.clearFields();
    } 
})

//remove book
document.querySelector(".book-list").addEventListener("click", (e) => { UI.deleteBook(e.target); });
document.querySelector(".read-status").addEventListener("click", (e) => { UI.changeStatus(e.target); });

function buttonToggle()
{
    const readStatus =  document.querySelector(".read-status");
    if (readStatus.value == "read")
    {
        readStatus.value = "unread";
    }
    else if (readStatus.value == "unread")
    {
        readStatus.value = "read";
    }
}

function buttonToggleList()
{
    const readStatus =  document.querySelector(".read-status-list");
    if (readStatus.value == "read")
    {
        readStatus.value = "unread";
    }
    else if (readStatus.value == "unread")
    {
        readStatus.value = "read";
    }
}