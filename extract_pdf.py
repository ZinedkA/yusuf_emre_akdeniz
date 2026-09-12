import fitz
import os

pdf_path = r"C:\Users\ysfmr\.gemini\antigravity\brain\b04a59be-381f-4552-af74-713c299785e5\.user_uploaded\media_1789228885771.pdf"
out_dir = r"D:\yusuf_emre_akdeniz\hardware-projects"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

doc = fitz.open(pdf_path)

# Pages 4 to 10 are index 3 to 9
for i in range(3, doc.page_count):
    page = doc.load_page(i)
    pix = page.get_pixmap(dpi=150) # render at 150 DPI for web
    pix.save(os.path.join(out_dir, f"project_{i+1}.png"))

print("Extracted pages 4 to", doc.page_count)
