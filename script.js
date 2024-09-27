document.getElementById('download-pdf').addEventListener('click', function () {
    // Get the resume content
    const resume = document.getElementById('resume');

    // Use html2pdf to generate and download the PDF
    html2pdf(resume, {
        margin:       0.5,
        filename:     'Ameer-Hamza-Resume.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 4 },
        jsPDF:        { format: 'a4', orientation: 'portrait' }
    });
});
