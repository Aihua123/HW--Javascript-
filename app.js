//Display complete data when user open the webpage or refesh it
function showTable(dataGoHere) {
    d3.selectAll('td').remove();
    dataGoHere.map(d => {
        let newTr = d3.select('tbody').append('tr');
        Object.values(d).map(x => newTr.append('td').text(x))
    });
};
showTable(data);

//Listen to the filter table button - when it is clicked, triggle the function allowing us to filter our table
d3.select('#filter-btn').on('click', function (e) {
    d3.event.preventDefault();
    renderTable()
});

function renderTable() {
    // store the words user entered in the input fields into variables 
    let filterDate = d3.select('#datetime').node().value;
    let filterCity = d3.select('#city').node().value;
    let filterState = d3.select('#state').node().value;
    let filterCountry = d3.select('#country').node().value;
    let filterShape = d3.select('#shape').node().value;

    //check whether datetime input field is empty, if not empty, filter the table and 
    //call the ShowTable function to dispaly the filtered table, and save the filtered data
    //to a varaibale called dataToDisplay.
    //if empty, save the original data to dataToDisplay.

    if (filterDate != 0) {
        let filterData = data.filter(d => d.datetime == filterDate)
        showTable(filterData);
        dataToDisplay = filterData;
    } else {
        showTable(data)
        dataToDisplay = data;
    };

    //one by one check city, state, country, and shap input fields empty or not
    //if empty, do nothing.
    //if not empty, filter on dataToDisplay (this ensure multiple filtering is possible) and then display the table

    if (filterCity != 0) {
        let filterData = dataToDisplay.filter(d => d.city == filterCity)
        showTable(filterData);
        dataToDisplay = filterData;
    };

    if (filterState != 0) {
        let filterData = dataToDisplay.filter(d => d.state == filterState)
        showTable(filterData);
        dataToDisplay = filterData;
    };

    if (filterCountry != 0) {
        let filterData = dataToDisplay.filter(d => d.country == filterCountry)
        showTable(filterData);
        dataToDisplay = filterData;
    };

    if (filterShape != 0) {
        let filterData = dataToDisplay.filter(d => d.shape == filterShape)
        showTable(filterData);
        dataToDisplay = filterData;
    };
}
