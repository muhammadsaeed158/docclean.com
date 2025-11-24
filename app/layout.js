export const metadata = {
  title: "DocClean – AI Document Cleaner",
  description: "AI-based document background remover and cleaner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-black">
        {children}
      </body>
    </html>
  );
}