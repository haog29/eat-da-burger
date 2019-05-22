// SCRATCHHHH:
// const { fetch, alert } = window

// const getBurgers = _ => {
//     fetch('/burger')
//       .then(r => r.json())
//       .then(burger => {
//         document.querySelector('#bView').innerHTML = ''
//         burger.forEach(({ id, burger_name, devoured}) => {
//           let burgerDiv = document.createElement('div')
//           burgerDiv.innerHTML = `
//             <h3>#${id} ${burger_name}</h3>
//             <h5>${devoured}</h5>
//             <button id="deleteBurger" data-bid="${id}">delete burger</button>
//             <hr>
//           `
//           document.querySelector('#bView').append(burgerDiv)
//         })
//       })
//       .catch(e => console.error(e))
//   }

//   document.querySelector('#addBurger').addEventListener('click', e => {
//     e.preventDefault()
//     fetch('/burger', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         burger_name: document.querySelector('#enter_text').value,
  
//       })
//     })
//       .then(_ => {
//         alert('Burger added.')
//         getBurgers()
//       })
//       .catch(e => console.error(e))
//   })



//   document.querySelector('#updateBurger').addEventListener('click', e => {
//     e.preventDefault()
//     let newValues = {}
//     if (document.querySelector('#newname').value) {
//       newValues.name = document.querySelector('#newname').value
//     }
//     fetch(`/burger/${document.querySelector('#bid').value}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newValues)
//     })
//       .then(_ => {
//         alert('burger was updated.')
//         getBurgers()
//       })
//       .catch(e => console.error(e))
//   })


//   document.addEventListener('click', e => {
//     if (e.target.id === 'deleteBurger') {
//       fetch(`/burger/${e.target.dataset.bid}`, { method: 'DELETE' })
//         .then(_ => {
//           alert('Burger deleted.')
//           getBurgers()
//         })
//         .catch(e => console.error(e))
//     }
//   })
  
//   getBurgers()