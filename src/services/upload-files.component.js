//https://www.bezkoder.com/react-file-upload-axios/
import http from "../api/http-common";   //initializes an axios http instance
class UploadFilesService {
    upload(file, onUploadProgress) {
      let formData = new FormData();
      formData.append("file", file);
      return http.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress,
      });
    }
    /*
    getFiles() {
      return http.get("/files");
    }
    */
  }
  export default new UploadFilesService();