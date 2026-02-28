import PyPDF2
import re

pdf_path = "practice-makes-perfect-complete-french-grammar.pdf"
with open(pdf_path, "rb") as file:
    reader = PyPDF2.PdfReader(file)
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"

print("Scanning for chapter numbers 4 to 28...")
for i in range(4, 29):
    # Just look for the number i followed by some text
    matches = re.findall(rf"\n{i}\s+([A-Za-z].*?)\n", full_text)
    if matches:
        print(f"Chapter {i} matches: {matches[:3]}") # Print first few matches
