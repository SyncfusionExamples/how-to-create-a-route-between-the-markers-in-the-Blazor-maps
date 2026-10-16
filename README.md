# Create a Route Between Markers in Syncfusion Blazor Maps

## Overview

This sample demonstrates how to create and visualize a route between markers using the Syncfusion [Blazor Maps](https://www.syncfusion.com/blazor-components/blazor-map) component. The application retrieves route coordinate information from the Google Maps Directions API and uses the returned geographic points to render a navigation path between selected locations on a map. This approach is useful for logistics applications, delivery tracking systems, route planning solutions, and location-based dashboards where users need to visualize paths between multiple destinations.

The sample also demonstrates how external routing services can be integrated with the Syncfusion Maps component to create interactive route visualizations within a Blazor Server application.

## Key Features

- Displays location markers representing route endpoints.
- Retrieves route coordinate data from the Google Maps Directions API.
- Renders navigation paths between locations using route coordinates returned by the external service.
- Integrates external geospatial data with the Syncfusion Maps component.
- Demonstrates route visualization between designated geographic locations.
- Shows how map markers and route paths can be displayed together within a single map view.
- Includes configuration for using a Google Maps Directions API key in the application.

## Prerequisites

- Visual Studio 2022 or Visual Studio Code
- .NET SDK compatible with the project's target framework
- Google Maps Directions API key

## How to Run the Project

**Visual Studio 2022**

1. Clone or download this repository.
2. Open the available solution file if present; otherwise open `MapsBlaz.csproj`.
3. Restore all NuGet packages.
4. Set the Blazor Server project as the startup project if required.
5. Add your Google Maps Directions API key to `_Host.html` as described in the sample.
6. Build the project.
7. Run the application using `Ctrl+F5`.
8. Open the local URL provided by the ASP.NET Core application.

**Visual Studio Code**

1. Clone or download this repository.
2. Open the repository folder in Visual Studio Code.
3. Open the integrated terminal.
4. Navigate to the directory containing `MapsBlaz.csproj`.

```bash
dotnet restore
dotnet run
```

5. Add the required Google Maps Directions API key configuration and open the local URL displayed in the terminal.

## Support and Feedback

- For general product questions, visit the [Syncfusion Community Forum](https://www.syncfusion.com/forums) or [Syncfusion Support](https://www.syncfusion.com/support).
- To report an issue specific to this sample, open a GitHub issue in this repository.
- For official documentation related to map navigation lines and route visualization, visit https://help.syncfusion.com/chart-sdk/blazor/maps/navigation-line

## License

This is a Syncfusion sample project provided to demonstrate product usage. Review the [Syncfusion license terms](https://www.syncfusion.com/sales/pricing?category=ui-components) before using Syncfusion components in your own applications.
