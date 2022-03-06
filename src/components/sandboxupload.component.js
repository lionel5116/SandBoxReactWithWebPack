import React from "react";
import UploadFiles from "../components/upload-files.component";
import UploadFilesLight from "../components/upload-files2.component";
function SandboxUpload() {
    return (
      <div className="container" style={{ width: "600px" }}>
        <div style={{ margin: "20px" }}>
          <h3>Lionel Jones</h3>
          <h4>React upload Files</h4>
        </div>
        {/*<UploadFiles /> */}
        <UploadFilesLight />
      </div>
    );
  }
  export default SandboxUpload