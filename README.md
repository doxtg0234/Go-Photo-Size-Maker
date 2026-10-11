# PhotoPassPro v31 — Professional Automatic Person Background Removal

- Magic Eraser removed.
- Uploading a photo automatically runs browser-side person segmentation.
- The detected person is isolated with a softened alpha edge and the original background is removed.
- Transparent cutout is used by the passport crop and background-change features.
- No image upload to a backend is required by this frontend package.
- Uses MediaPipe Selfie Segmentation from CDN.

Open `index.html` in a modern browser with internet access for the segmentation library.
