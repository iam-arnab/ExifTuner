import piexifjs from 'piexifjs';

function modifyCameraExifData(imageData: string, make: string, model: string) {
    let exifData = piexifjs.load(imageData);
    exifData['0th'][piexifjs.ImageIFD.Make] = make;
    exifData['0th'][piexifjs.ImageIFD.Model] = model;
    let exifbytes = piexifjs.dump(exifData);
    let modifiedImage = piexifjs.insert(exifbytes, imageData);
    return modifiedImage;
}

function modifyLocationData(
    imageData: string,
    latitude: number,
    longitude: number,
    altitude: number
) {
    const extractGpsInfo = (coordinates: Array<number>) => {
        const lat = coordinates[0];
        const lon = coordinates[1];

        const latRef = lat >= 0 ? 'N' : 'S';
        const lonRef = lon >= 0 ? 'E' : 'W';

        return {
            latitude: lat,
            longitude: lon,
            latitudeRef: latRef,
            longitudeRef: lonRef,
        };
    };

    let exifData = piexifjs.load(imageData);
    const gpsInfo = extractGpsInfo([latitude, longitude]);
    exifData.GPS[piexifjs.GPSIFD.GPSLatitudeRef] = gpsInfo.latitudeRef;
    exifData.GPS[piexifjs.GPSIFD.GPSLatitude] =
        piexifjs.GPSHelper.degToDmsRational(gpsInfo.latitude);
    exifData.GPS[piexifjs.GPSIFD.GPSLongitudeRef] = gpsInfo.longitudeRef;
    exifData.GPS[piexifjs.GPSIFD.GPSLongitude] =
        piexifjs.GPSHelper.degToDmsRational(gpsInfo.longitude);
    exifData.GPS[piexifjs.GPSIFD.GPSAltitude] = altitude;
    let exifbytes = piexifjs.dump(exifData);
    let modifiedImage = piexifjs.insert(exifbytes, imageData);
    return modifiedImage;
}

function modifyDateTimeData(
    imageData: string,
    dateTimeOriginal: string,
    createDate: string
) {
    let exifData = piexifjs.load(imageData);
    exifData['Exif'][piexifjs.ExifIFD.DateTimeOriginal] = dateTimeOriginal;
    exifData['Exif'][piexifjs.ExifIFD.DateTimeDigitized] = createDate;
    let exifbytes = piexifjs.dump(exifData);
    let modifiedImage = piexifjs.insert(exifbytes, imageData);
    return modifiedImage;
}

export { modifyCameraExifData, modifyLocationData, modifyDateTimeData };
