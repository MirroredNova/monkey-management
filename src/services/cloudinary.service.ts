export default class CloudinaryService {
  static async uploadImage(image: File) {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'yhgfdywb');
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
      {
        method: 'POST',
        body: formData
      }
    );
    return response;
  }
}
