// src/shared/utils/copyText.ts

export const copyText = (text: string): boolean => {
  try {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      return true;
    } else {
      // Eskirgan brauzerlar uchun mantiq (fallback)
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      return true;
    }
  } catch (error) {
    console.error("Nusxalashda xatolik yuz berdi:", error);
    return false;
  }
};