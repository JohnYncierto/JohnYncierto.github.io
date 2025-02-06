const pokemonNameElement = document.getElementById('pokemonName');
        const pokemonImageElement = document.getElementById('pokemonImage');
        const pokemonIdElement = document.getElementById('pokemonId');
        const pokemonHeightElement = document.getElementById('pokemonHeight');
        const pokemonWeightElement = document.getElementById('pokemonWeight');
        const pokemonAbilitiesElement = document.getElementById('pokemonAbilities');
        const pokemonTypesElement = document.getElementById('pokemonTypes');
        const button = document.getElementById('fetchPokemonBtn');
        const pokemonInput = document.getElementById('pokemonInput');

        // Function to fetch Pokémon stats from the PokeAPI
        function fetchPokemonStats() {
            const pokemonName = pokemonInput.value.toLowerCase();  

            if (!pokemonName) {
                alert('Please enter a Pokémon name');
                return;
            }

            // Reset the content
            pokemonNameElement.textContent = 'Loading...';
            pokemonImageElement.src = '';
            pokemonIdElement.textContent = '';
            pokemonHeightElement.textContent = '';
            pokemonWeightElement.textContent = '';
            pokemonAbilitiesElement.textContent = '';
            pokemonTypesElement.textContent = '';

            // Fetch Ditto stats from PokeAPI
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            
                .then(response => response.json())
                .then(data => {
                    const pokemon = data;
                    pokemonNameElement.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
                    pokemonImageElement.src = pokemon.sprites.front_default;
                    pokemonIdElement.textContent = `Pokédex ID: ${pokemon.id}`;
                    pokemonHeightElement.textContent = `Height: ${pokemon.height / 10} m`; 
                    pokemonWeightElement.textContent = `Weight: ${pokemon.weight / 10} kg`; 

                    const abilities = pokemon.abilities.map(ability => ability.ability.name).join(', ');
                    pokemonAbilitiesElement.textContent = `Abilities: ${abilities}`;

                    const types = pokemon.types.map(type => type.type.name).join(', ');
                    pokemonTypesElement.textContent = `Types: ${types}`;
                })
                .catch(error => {
                    console.error('Error fetching Pokémon data:', error);
                    pokemonNameElement.textContent = 'Failed to load Pokémon data';
                });
        }

        // Fetch Pokémon stats when the button is clicked
        button.addEventListener('click', fetchPokemonStats);

        // Fetch Ditto stats when the page loads
        fetchPokemonStats();