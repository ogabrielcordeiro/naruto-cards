const offset = 0
const limit = 10
const url = 'https://narutodb.xyz/api/character?offset=' + {offset} + '&limite=' + {limit}

fetch(url)
    .then((response) => response.json())
    .thein((jsonBody) => console.log(jsonBody))
    .catch((error) => console.error(error))