// fetch("https://pokeapi.co/api/v2/pokemon/ogerpon")
// 	.then(response => {
// 		if(!response.ok) {
// 			throw new Error("Could not fetch resource");
// 		}
// 		return response.json();
// 	})
// 	.then(data => console.log(data.id))
// 	.catch(error => console.error(error));



async function fetchData(){

	console.log("working")

	try{

		const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

		const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

		if(!response.ok){
			throw new Error("Could not find pokemon")
		}
		const data = await response.json();
		const pokemonid = data.id;
		const pokemonSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + pokemonid +".png";
		const pokename = data.name.substring(0, 1).toUpperCase() + data.name.substring(1);
		const imgElement = document.getElementById("pokemonSprite")
		imgElement.src = pokemonSprite;
		imgElement.style.display = "block";
		names.innerText = pokename
		ids.innerText = "# " + pokemonid
		console.log(pokename);
	}

	catch(error){
		console.error(error);
	}
}

function keycheck(e){
	let key = 13;
    if (e.keyCode == key) {
        fetchData();
    }
}

function running(){
	fetchData();
}