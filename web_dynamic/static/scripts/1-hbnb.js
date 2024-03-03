
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
    $('input[type="checkbox"]').change(function() {
      updateSelectedAmenities();
      console.log('Selected Amenities:', selectedAmenities);
    });
    // Your other scripts can use the selectedAmenities variable as needed.
  });
