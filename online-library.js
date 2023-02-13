const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c5140475b9msh539baed7d5ad462p13a59fjsn6cf0ce24b957',
		'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
	}
};
const getbook = (bookName) => {
	let response = fetch('https://hapi-books.p.rapidapi.com/search/' + bookName, options)
	response.then((ebook) => {
		return ebook.json()
	}).then((ebook) => {
		console.log(ebook)
		ihtml = ""
		for (item in ebook) {
			console.log(ebook[item])
			ihtml +=
			`<div class="card mx-2 my-2 border-info bg-info" style="width: 18rem; ">
  <img src="${ebook[item].cover}" class="card-img-top" ${ebook[item].cover.style="height:800px; width=800px"}alt="...">
  <div class="card-body">
    <h4 class="card-title text-danger">${ebook[item].name}</h4>
    <h6 class="card-title text-dark">Author: ${ebook[item].authors}</h6>
    <h6 class="card-text text-dark">Total editions: ${ebook[item].created_editions}</h6>
    <h6 class="card-text text-dark">Rating: ${ebook[item].rating}</h6>
    <a href="${ebook[item].url}" class="btn  btn-outline-dark btn-light text-warning">Explore more</a>
  </div>
</div>`
		}
		cardContainer.innerHTML = ihtml
	})
}
submit.addEventListener("click", (e) => {
	e.preventDefault()
	getbook(bookName.value)
})
getbook("Finance")