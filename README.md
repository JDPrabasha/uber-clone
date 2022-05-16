# Uber Clone

An Uber Clone Application built using React Native.

Features:

- Set Origin from list of availible locations
- Set Destination from list of availible locations
- View map and disance between locations
- Check pricing

Screens:

<div style={display:flex flex-wrap:wrap }>
     
 <img src="https://user-images.githubusercontent.com/62155402/168645596-0261eac9-e69a-446f-a4cd-c1d31c6f7c0e.jpg" width="300">
 <img src="https://user-images.githubusercontent.com/62155402/168645609-5d182350-de5e-4e9b-b4fb-bc94398b3576.jpg" width="300">
   <img src="https://user-images.githubusercontent.com/62155402/168645613-8c3e6100-32bd-4429-9637-3aa0cd3dbbc6.jpg" width="300">
   <img src="https://user-images.githubusercontent.com/62155402/168645617-235018b2-72e9-4b9d-b2a5-46c1633ea448.jpg" width="300">
   
     
</div>




APIs used:

- Google Maps API
- Google Distance Matrix API
- Google Places API

## How To Run

This project requires access to the above mentioned APIs. Add a ".env" file in the root directory with an API key that connects to a Google Account with the required access.
Add your key in the following format inside the file created:

`GOOGLE_MAPS_APIKEY=YOUR KEY`

Next, within the root directory, run

`expo start`
