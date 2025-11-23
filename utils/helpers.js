// Format timestamps into readable date
export function formatDate(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

// Generate a short ID (used for documents or filenames)
export function shortId(len = 8) {
  return Math.random().toString(36).substring(2, 2 + len);
}

// Check if file is image
export function isImage(file) {
  return file && file.type.startsWith("image/");
}

// Convert file to base64 (optional)
export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;

    reader.readAsDataURL(file);
  });
}