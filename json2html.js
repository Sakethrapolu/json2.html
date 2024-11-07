export default function json2html(data) {
    // Define the columns based on the data keys
    const columns = ["Name", "Age", "Gender"];
  
    // Start building the HTML string with the table and header row
    let html = `<table data-user="sakethrapolu@gmail.com">
      <thead>
        <tr>${columns.map(col => `<th>${col}</th>`).join('')}</tr>
      </thead>
      <tbody>`;
  
    // Loop through each data object to create rows
    data.forEach(row => {
      html += `<tr>${columns.map(col => `<td>${row[col] || ''}</td>`).join('')}</tr>`;
    });
  
    // Close the table
    html += '</tbody></table>';
  
    return html;
  }
  