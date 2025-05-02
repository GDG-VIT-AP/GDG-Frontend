export function extractDateTime(isoString) {
    const dateObj = new Date(isoString);
  
    const pad = (n) => n.toString().padStart(2, "0");
  
    const date = `${dateObj.getFullYear()}-${pad(dateObj.getMonth() + 1)}-${pad(dateObj.getDate())}`;
    const time = `${pad(dateObj.getHours())}:${pad(dateObj.getMinutes())}:${pad(dateObj.getSeconds())}`;
  
    return { date, time };
  }
  