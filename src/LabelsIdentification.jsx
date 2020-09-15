import "./App.css";
import React, { useState } from "react";
import Predictions from "@aws-amplify/predictions";
import LoadingSpinner from "./LoadingSpinner";

function LabelsIdentification() {
  const [responseObj, setResponseObj] = useState([]);
  const [imgObjects, setImgObjects] = useState([]);
  const [uploadedImage, setUploadedImage] = useState({ preview: "", raw: "" });
  const [spinner, setSpinner] = useState("");

  function identifyFromFile(event) {
    setResponseObj([]);
    setImgObjects([]);
    setSpinner(LoadingSpinner);
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
      labels: {
        source: {
          file,
        },
        type: "ALL",
      },
    })
      .then((response) => {
        const labels = response.labels.map((l) => l.name);
        setImgObjects(labels);
        const metadata = response.labels.map((l) => l.metadata);
        setResponseObj(metadata);
      })
      .catch((err) => console.log({ err }));
  }

  return (
    <div className="Text">
      <div style={{ padding: 50 }}>
        <h1>Labels Identification</h1>
        <input type="file" onChange={identifyFromFile}></input>
        <hr />
        {imgObjects.length === 0 ? spinner : <></>}
        <div className="Labels-Identification">
          <div className="Lable-names">
            {imgObjects.map((r, i) => (
              <h4 key={i}>{r}</h4>
            ))}
          </div>
          <div className="Lable-values">
            {responseObj.map((r, i) => (
              <h4 key={i}>{r.confidence}</h4>
            ))}
          </div>
        </div>
        <div className="uploadedImage">
          {uploadedImage.preview ? (
            <img src={uploadedImage.preview} alt="dummy" />
          ) : (
            <>
              Upload an Image having some objects like lamp, cup or use{" "}
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

export default LabelsIdentification;
