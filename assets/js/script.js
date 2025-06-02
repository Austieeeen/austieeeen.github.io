// Ensure PDFs are zoomed to 100% on load (works for most browsers)
function setPDFZoom() {
    document.querySelectorAll('.pdf-frame').forEach(function(iframe) {
        iframe.onload = function() {
            try {
                // For Chrome/Edge, append #zoom=100 to force 100% zoom
                if (!iframe.src.includes('#zoom=100')) {
                    iframe.src = iframe.src.split('#')[0] + '#zoom=100';
                }
            } catch (e) {}
        };
    });
}
// Run on DOMContentLoaded in case PDFs are present
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setPDFZoom);
} else {
    setPDFZoom();
}