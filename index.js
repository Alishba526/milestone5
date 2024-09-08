// // import jsPDF from 'jspdf';
document.addEventListener('DOMContentLoaded', function () {
    var jsPDF = window.jspdf.jsPDF; // Access jsPDF from the window object
    var generatePdfButton = document.getElementById('generate-pdf');
    generatePdfButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission if inside a form
        var doc = new jsPDF();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        doc.text('Resume', 10, 10);
        doc.text("Name: ".concat(name), 10, 20);
        doc.text("Email: ".concat(email), 10, 30);
        doc.text("Phone: ".concat(phone), 10, 40);
        doc.text('Education:', 10, 50);
        doc.text(education, 10, 60);
        doc.text('Experience:', 10, 70);
        doc.text(experience, 10, 80);
        doc.text('Skills:', 10, 90);
        doc.text(skills, 10, 100);
        doc.save('resume.pdf');
    });
});
