"use client";

import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@/components/ui/button";

const TransactionsPDF = () => {
  const transactions = [
    { date: "2025-08-20", type: "Income", amount: 5000 },
    { date: "2025-08-21", type: "Expense", amount: 2000 },
    { date: "2025-08-22", type: "Income", amount: 3500 },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Transaction Report", 14, 20);

    // Table
    autoTable(doc, {
      head: [["Date", "Type", "Amount"]],
      body: transactions.map((t) => [t.date, t.type, t.amount.toString()]),
      startY: 30,
    });

    // Save the PDF
    doc.save("transactions.pdf");
  };

  return (
    <div className="p-4">
      <Button onClick={downloadPDF}>Download PDF</Button>
    </div>
  );
};

export default TransactionsPDF;
