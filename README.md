# Example of creating routes between the markers from the external source dynamically in the Syncfusion Blazor Maps component.
In this Blazor project, we created an example to show how to create a route between the markers from the external source and integrate them into Blazor Maps.

In this example, we use the JavaScript method to initialize the Google Maps Directions Service through the **initMap** method using JS interop, allowing us to generate routes based on user-defined values. In this JS interop, we return the coordinate points for the source and destination values, along with route data to form the navigation line. This enables us to visualize markers and navigation lines above the OpenStreetMap, providing users with an interactive experience to obtain directions and view the path between the specified locations.

