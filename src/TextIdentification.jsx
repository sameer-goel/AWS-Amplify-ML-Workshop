import React, { useState } from "react";
import Predictions from "@aws-amplify/predictions";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoadingSpinner from "./LoadingSpinner";

function TextIdentification() {
  const [response, setResponse] = useState("");
  const [uploadedImage, setUploadedImage] = useState({ preview: "", raw: "" });

  function identifyFromFile(event) {
    setResponse(LoadingSpinner);
    const {
      target: { files },
    } = event;
    const [file] = files || [];

    if (!file) {
      return;
    }
    setUploadedImage({
      preview: URL.createObjectURL(file),
      raw: file,
    });
    Predictions.identify({
      text: {
        source: {
          file,
        },
        format: "PLAIN", // Available options "PLAIN", "FORM", "TABLE", "ALL"
      },
    })
      .then(({ text: { fullText } }) => {
        setResponse(fullText);
      })
      .catch((err) => setResponse(JSON.stringify(err, null, 2)));
  }
  // console.log(response);

  return (
    <div className="identify-text">
      <div style={{ padding: 50 }}>
        <h1>Text Identification</h1>
        <input type="file" onChange={identifyFromFile} />
        <hr />
        <div className="prediction-reults">{response}</div>
        <div className="uploadedImage">
          {uploadedImage.preview ? (
            <img src={uploadedImage.preview} alt="dummy" />
          ) : (
            <>
              Upload an Image having some text data or use{" "}
              <a
                href="https://s3-us-west-2.amazonaws.com/bucket.aws/share/AmlifyMLImages.zip"
                target="_blank"
                download
              >
                Sample Image
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TextIdentification;
