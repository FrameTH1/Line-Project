mapboxgl.accessToken = "pk.eyJ1IjoiZnJhbWV0aCIsImEiOiJjbDVrdG1mb20wMXI3M2lzMzlmMzJsNDYwIn0.QNgPTCTvaxVK6adL7Z3lWQ";


const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/mapbox/streets-v11', // style URL
  zoom: 6, // starting zoom
  center: [0, 0], // starting position
});

map.on("load", () => {
  // Load an image from an external URL.
  map.loadImage(
    "./img/location-mark.png",
    (error, image) => {
      if (error) throw error;

      // Add the image to the map style.
      // map.addImage("cat", image);

      // Add a data source containing one point feature.
      map.addSource("point", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [longitude, latitude],
              },
            },
          ],
        },
      });

      // Add a layer to use the image to represent the data.
      map.addLayer({
        id: "points",
        type: "symbol",
        source: "point", // reference the data source
        layout: {
          "icon-image": "cat", // reference the image
          "icon-size": [
            "interpolate",
            // Set the exponential rate of change to 1.5
            ["exponential", 1.5],
            ["zoom"],
            // When zoom is 10, buildings will be 100% transparent.
            10,
            0.5,
            // When zoom is 18 or higher, buildings will be 100% opaque.
            22,
            0.1,
          ],
        },
      });
    }
  );
});
