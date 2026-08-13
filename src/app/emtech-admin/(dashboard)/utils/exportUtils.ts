export function exportToCsv(filename: string, rows: object[]) {
  if (!rows || !rows.length) {
    alert("Dışa aktarılacak veri bulunamadı.");
    return;
  }
  
  const separator = ',';
  const keys = Object.keys(rows[0]);
  
  const csvContent =
    "data:text/csv;charset=utf-8,\uFEFF" +
    keys.join(separator) +
    '\n' +
    rows.map(row => {
      return keys.map(k => {
        let cell = row[k as keyof typeof row] === null || row[k as keyof typeof row] === undefined ? '' : row[k as keyof typeof row];
        cell = cell instanceof Date ? cell.toLocaleString() : cell.toString().replace(/"/g, '""');
        if (cell.search(/("|,|\n)/g) >= 0) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(separator);
    }).join('\n');

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `${filename}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
