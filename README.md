# Exam Schedule Tracker

This is a simple client-side website that allows students to upload their exam date sheet (in PDF, Excel, or image format), select their class and field of study, and automatically detects the next exam along with the time left until it starts.

## Features

- Upload date sheet in PDF, Excel (.xlsx), or image format.
- Select class (HSSC-I or HSSC-II).
- Select field of study (Pre-Medical, Pre-Engineering, ICS, etc.).
- Automatically parses the date sheet and calculates the next exam.
- Displays the next exam subject and time left in a clean, responsive UI.
- Fully client-side, no server required.
- Ready to be hosted on GitHub Pages.

## Date Sheet Format

The date sheet should have the following columns in order:

| Class | Field | Subject | Date | Time |

- Class: e.g., HSSC-I, HSSC-II
- Field: e.g., Pre-Medical, Pre-Engineering, ICS
- Subject: Subject name
- Date: Date of exam (e.g., 2024-06-15 or 15/06/2024)
- Time: Time of exam (e.g., 09:00 AM)

Ensure the date and time formats are consistent and recognizable by JavaScript `Date` constructor.

## Libraries Used

- [SheetJS (xlsx)](https://sheetjs.com/) for Excel parsing.
- [pdf.js](https://mozilla.github.io/pdf.js/) for PDF parsing.
- [Tesseract.js](https://tesseract.projectnaptha.com/) for OCR on images.

## Notes

- The website works fully offline after loading.
- Ensure your date sheet follows the specified format for accurate parsing.
- For image uploads, OCR accuracy depends on image quality.

## License

This project is open source and free to use.
