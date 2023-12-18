let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

function openPDF(pdfPath) {
    // Use window.open to open the PDF in a new tab or window
    window.open(pdfPath, '_blank');
}


document.getElementById("toastbtn").onclick = function() {
    var toastElList = [].slice.call(document.querySelectorAll('.toast'))
    var toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show())
  }