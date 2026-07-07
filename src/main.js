import {
  CapacitorBarcodeScanner,
  CapacitorBarcodeScannerTypeHintALLOption,
  CapacitorBarcodeScannerAndroidScanningLibrary,
  CapacitorBarcodeScannerCameraDirection,
  CapacitorBarcodeScannerScanOrientation
} from "@capacitor/barcode-scanner";

document.querySelector("#app").innerHTML = `
<div style="font-family:Arial,sans-serif;padding:40px;text-align:center">
  <h1>📷 LAS B QR Scanner</h1>

  <button id="scanBtn"
    style="padding:15px 25px;font-size:18px;border:none;border-radius:10px;background:#1976d2;color:white;cursor:pointer;">
    Scan QR Code
  </button>

  <p id="result" style="margin-top:25px;">Ready...</p>
</div>
`;

document.getElementById("scanBtn").addEventListener("click", async () => {
  const resultElement = document.getElementById("result");

  try {
    const result = await CapacitorBarcodeScanner.scanBarcode({
      hint: CapacitorBarcodeScannerTypeHintALLOption.ALL,
      cameraDirection: CapacitorBarcodeScannerCameraDirection.BACK,
      scanOrientation: CapacitorBarcodeScannerScanOrientation.PORTRAIT,
      android: {
        scanningLibrary: CapacitorBarcodeScannerAndroidScanningLibrary.MLKIT
      }
    });

    resultElement.textContent = result.ScanResult || "No QR code found.";
  } catch (err) {
    console.error(err);
    resultElement.textContent = "Scan cancelled or failed.";
  }
});
