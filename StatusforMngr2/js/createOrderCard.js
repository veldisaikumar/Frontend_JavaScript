const createOrderCard = (orderId) => {
    let colDiv = document.createElement('div')
	let cardDiv = document.createElement('div')
	let cardHeaderDiv = document.createElement('div')
	let cardBodyDiv = document.createElement('div')
	let cardTitleH5 = document.createElement('h5')
	let cardTextP = document.createElement('p')
	let orderStatusSpan = document.createElement('span')
	let cardFooterDiv = document.createElement('div')

	colDiv.classList = 'col-md-3'
	cardDiv.classList = 'card text-center'
	cardHeaderDiv.classList = 'card-header'
	cardBodyDiv.classList = 'card-body'
	cardTitleH5.classList = 'card-title'
	cardTextP.classList = 'card-text'
	orderStatusSpan.classList = 'badge rounded-pill bg-success'
	cardFooterDiv.classList = 'card-footer'

	cardHeaderDiv.innerHTML = `<span> Order No.: <b>${orderId}</b> </span><i class="fa-solid fa-xmark" cancel-btn></i>`
	cardTitleH5.innerText = `Bill Amount: $${Math.ceil(Math.random()*42) + 10 }`
	cardTextP.innerHTML = `Large Pizza - ${Math.ceil(Math.random()*3)} Nos<br>Medium Pizza - ${Math.ceil(Math.random()*3)} Nos`
	orderStatusSpan.innerText = 'Order placed'
    orderStatusSpan.id=orderId
	cardFooterDiv.innerText = '23-09-2022 09:47:36 PM'

	cardBodyDiv.appendChild(cardTitleH5)
	cardBodyDiv.appendChild(cardTextP)
	cardBodyDiv.appendChild(orderStatusSpan)
	cardDiv.appendChild(cardHeaderDiv)
	cardDiv.appendChild(cardBodyDiv)
	cardDiv.appendChild(cardFooterDiv)
	colDiv.appendChild(cardDiv)
	document.getElementById('order-cards-wrapper').appendChild(colDiv)
}

/*
	<div class="col-md-3">
		<div class="card text-center">
			<div class="card-header">
				Order No.: MP202209230005
			</div>
			<div class="card-body">
				<h5 class="card-title">Bill Amount: $52</h5>
				<p class="card-text">Large Pizza - 2 Nos<br>
					Medium Pizza - 3 Nos</p>
				<span class="badge rounded-pill bg-success">Order placed</span>
			</div>
			<div class="card-footer">
				23-09-2022 09:47:36 PM
			</div>
		</div>
	</div>
*/