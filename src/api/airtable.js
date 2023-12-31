// airtableAPI.js
const Airtable = require('airtable');

// Define a function that retrieves data from Airtable
function retrieveAirtableData() {
  const token = 'patOwFwRUKq2RzUQm.d50f5bfab8fb159a73029cba915f9851b5a6b4e9cca68249225fcb2440c92b34';
  const baseID = 'appuBAQQ3XsslFaLo';

  const base = new Airtable({ apiKey: token }).base(baseID);

  console.log('Working...');

  base('Users').select({
    maxRecords: 5,
    view: 'Grid view'
  }).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    records.forEach(function (record) {
      console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
  }, function done(err) {
    if (err) {
      console.error(err);
      return;
    }
  });
}

// Export the function so it can be used in other files
module.exports = { retrieveAirtableData };
