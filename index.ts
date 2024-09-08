declare global {
    interface Window {
        jspdf: any; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;
    const generatePdfButton = document.getElementById('generate-pdf') as HTMLButtonElement;

    generatePdfButton.addEventListener('click', (event) => {
        event.preventDefault();

        const doc = new jsPDF();
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        doc.text('Resume', 10, 10);
        doc.text(`Name: ${name}`, 10, 20);
        doc.text(`Email: ${email}`, 10, 30);
        doc.text(`Phone: ${phone}`, 10, 40);
        doc.text('Education:', 10, 50);
        doc.text(education, 10, 60);
        doc.text('Experience:', 10, 70);
        doc.text(experience, 10, 80);
        doc.text('Skills:', 10, 90);
        doc.text(skills, 10, 100);

        doc.save('resume.pdf');
    });
});
