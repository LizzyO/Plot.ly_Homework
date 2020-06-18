
// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;
    var sample_names = importedData.names;

    console.log(sample_names)
      
        // Select the sample ID value from the form
        for (var i = 0; i < sample_names.length; i++) {
        var selData = d3.select("#selDataset")

        selData.append("option").text(sample_names[i]);
        }

    var sample_value = data.sample_value;
    console.log(sample_value)

    var trace1 = {
        x: data.otu_id,
        y: data.sample_values,
        text: data.otu_id,
        type: "bar",
        orientation: "h"
      };
    
      // data
      var chartData = [trace1];

      var layout = {
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
      
    Plotly.newPlot("bar", chartData, layout);
});



