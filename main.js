// Mapping pages to their respective file names
const pages = ['index.html', 'september.html', 'october.html', 'november.html', 'december.html'];

// Determine the current page based on the URL
const currentPage = window.location.pathname.split("/").pop();
const pageIndex = pages.indexOf(currentPage);

// Set the URLs for the previous and next pages
const prevPage = pageIndex > 0 ? pages[pageIndex - 1] : null;
const nextPage = pageIndex < pages.length - 1 ? pages[pageIndex + 1] : null;

// Get the button elements
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Enable or disable buttons based on the current page
if (prevPage) {
    prevBtn.onclick = () => window.location.href = prevPage;
} else {
    prevBtn.disabled = true;
}

if (nextPage) {
    nextBtn.onclick = () => window.location.href = nextPage;
} else {
    nextBtn.disabled = true;
}
