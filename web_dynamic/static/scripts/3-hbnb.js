// task 3
const url = 'http://0.0.0.0:5001/api/v1/status/';
fetch(url)
    .then(response => {
        if (response.ok){
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass();
        }
    });
// task 1 and 2
$(document).ready(function() {
    // Variable to store Amenity IDs
    let selectedAmenities = [];

    // Function to update selected amenities and update the h4 tag
    function updateSelectedAmenities() {
        selectedAmenities = [];
        let selectedAmenitiesNames = [];
        $('input[type="checkbox"]:checked').each(function() {
            selectedAmenities.push($(this).data('id'));
            selectedAmenitiesNames.push($(this).data('name'));
        });
        // Update the content of the h4 tag
        $('.amenities h4').html(selectedAmenitiesNames.join(', '));
    }

    // Listen for changes on each input checkbox tag
    $(document).on('change', 'input[type="checkbox"]', function() {
        updateSelectedAmenities();
        console.log('Selected Amenities:', selectedAmenities);
    });

    // Your other scripts can use the selectedAmenities variable as needed.
});
// task 4
$.ajax({
    type: 'POST',
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    contentType: 'application/json',
    data: JSON.stringify({})
  }).done(function (data) {
    for (const place of data) {
      const template = `<article>

        <div class="title">

          <h2>${place.name}</h2>

          <div class="price_by_night">

        $${place.price_by_night}

          </div>
        </div>
        <div class="information">
          <div class="max_guest">
        <i class="fa fa-users fa-3x" aria-hidden="true"></i>

        <br />

        ${place.max_guest} Guests

          </div>
          <div class="number_rooms">
        <i class="fa fa-bed fa-3x" aria-hidden="true"></i>

        <br />

        ${place.number_rooms} Bedrooms
          </div>
          <div class="number_bathrooms">
        <i class="fa fa-bath fa-3x" aria-hidden="true"></i>

        <br />

        ${place.number_bathrooms} Bathroom

          </div>
        </div>
        <div class="description">

          ${place.description}

        </div>

      </article> <!-- End 1 PLACE Article -->`;
      $('section.places').append(template);
    }
  });