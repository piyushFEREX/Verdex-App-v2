import jsPDF from "jspdf"; 
import html2canvas from "html2canvas";


export async function downloadReportPDF(
  filename: string = "career-report.pdf"
) {
  const element = document.getElementById("pdf-report");

  console.log("PDF element:", element);

  if (!element) {
    alert("PDF report DOM not found");
    return;
  }

  //  force layout + paint
  await new Promise(requestAnimationFrame);
  await new Promise(r => setTimeout(r, 200));

  const rect = element.getBoundingClientRect();
  console.log("PDF size:", rect.width, rect.height);

  if (rect.width === 0 || rect.height === 0) {
    alert("PDF element has zero size");
    return;
  }

  console.log("Starting canvas capture...");

  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: true
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

  let heightLeft = pdfHeight;
  let position = 0;

  pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
  heightLeft -= pdf.internal.pageSize.getHeight();

  while (heightLeft > 0) {
    position -= pdf.internal.pageSize.getHeight();
    pdf.addPage();
    pdf.addImage(imgData, "PNG", 0, position, pdfWidth, pdfHeight);
    heightLeft -= pdf.internal.pageSize.getHeight();
  }

  pdf.save(filename);
}
