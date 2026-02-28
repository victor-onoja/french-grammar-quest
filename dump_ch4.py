import PyPDF2

pdf_path = "practice-makes-perfect-complete-french-grammar.pdf"
with open(pdf_path, "rb") as file:
    reader = PyPDF2.PdfReader(file)
    full_text = ""
    for page in reader.pages:
        full_text += page.extract_text() + "\n"

idx = full_text.find("More irregular verbs")
if idx != -1:
    ch4_text = full_text[idx:idx+5000]
    with open("ch4.txt", "w") as f:
        f.write(ch4_text)
    print("Exported Chapter 4 to ch4.txt")
else:
    print("Could not find 'More irregular verbs'")
