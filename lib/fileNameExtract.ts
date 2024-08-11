export default function fileNameExtract(dataUrl: string) {
    const urlParts = dataUrl.split('/');
    const filename = urlParts[urlParts.length - 1];
    return filename;
}
