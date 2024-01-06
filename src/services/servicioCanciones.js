export async function consultarCanciones() {
    const clientId = '5938fd7d0e5f4d889ba4db749d5780ad'; // Reemplaza con tu Client ID
    const clientSecret = '63d8eca3cf88416ca881b4f92588b05b'; // Reemplaza con tu Client Secret
  
    // Codifica las credenciales de cliente en Base64
    const credenciales = `${clientId}:${clientSecret}`;
    const encodedCredentials = btoa(credenciales);
  
    // Define los parámetros para la solicitud de token
    const tokenEndpoint = 'https://accounts.spotify.com/api/token';
    const authOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${encodedCredentials}`
      },
      body: 'grant_type=client_credentials'
    };
  
    try {
      // Realiza la solicitud de token de acceso
      const tokenResponse = await fetch(tokenEndpoint, authOptions);
      const tokenData = await tokenResponse.json();
      const accessToken = tokenData.access_token;
      console.log('Token de acceso:', accessToken);
  
      // Ahora que tenemos el token de acceso, hacemos la solicitud para obtener los top tracks
      const artistId = '5XJDexmWFLWOkjOEjOVX3e'; // Reemplaza con el ID del artista
      const apiUrl = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=us`;
  
      const requestOptions = {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      };
  
      const topTracksResponse = await fetch(apiUrl, requestOptions);
      const topTracksData = await topTracksResponse.json();
  
      return topTracksData;
    } catch (error) {
      console.log('Error al consultar las canciones:', error);
      return null;
    }
  }
  



    /*
    //RECETA PARA CONSUMIR APIS
    
    //1.PA DONDE VAS OME 
    //URL+ EP DEL SERVICIO
    const IDARTISTA="5XJDexmWFLWOkjOEjOVX3e"
    const URI=`https://api.spotify.com/v1/artists/${IDARTISTA}/top-tracks?market=us`
    const TOKEN="Bearer BQDYFjgqPZl5cSWfVE1JS6JGqsOo8PACDLiWtkyoWJIWM7dXqfFKh8exjOyWU4rPwq80A-OKvrgLA9mnd8_Eq4GudkbA4X2lDwAclp-VwzGBxX5gRFg"
    
    //qUE VAS A HACER ALLÁ
    //COFIGURO PETICION
    let peticion={
        method:"GET",
        headers:{
            "Authorization":TOKEN
        },
    }
    
    //2.PIDA EL TAXI
    //UTILIZA LA PROMESA FETCH PARA IR AL BACK Y CONSUMIR EL API
    let respuesta=await fetch(URI, peticion)
    let canciones=await respuesta.json()
    return canciones
    */



