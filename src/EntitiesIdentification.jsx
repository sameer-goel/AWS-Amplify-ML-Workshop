import "./App.css";
import React, { useState } from "react";
import Predictions from "@aws-amplify/predictions";
import LoadingSpinner from "./LoadingSpinner";

function LabelsIdentification() {
  const [items, setItems] = useState([]);
  const [uploadedImage, setUploadedImage] = useState([]);
  const [spinner, setSpinner] = useState("");

  function identifyFromFile(event) {
    setItems([]);
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
      entities: {
        source: {
          file,
        },
        celebrityDetection: true, // boolean. It will only show detected celebrities
      },
    })
      .then(({ entities }) => {
        let i = 0;
        entities.forEach(({ boundingBox, landmarks, metadata }) => {
          setItems((prevItems) => [...prevItems, metadata.name]);
        });
      })
      .catch((err) => console.log({ err }));
  }

  console.log(items);
  //   console.log(typeof celebs);
  return (
    <div className="Text">
      <div style={{ padding: 50 }}>
        <h1>Entity Identification</h1>
        <input type="file" onChange={identifyFromFile}></input>
        <hr />
        <div className="Labels-Identification">
          <div className="prediction-reults">
            <ul>
              {items.map((item, key) => (
                <h3 key={key}>{item}</h3>
              ))}
            </ul>
          </div>
        </div>
        {items.length === 0 ? spinner : <></>}
        <div className="uploadedImage">
          {uploadedImage.preview ? (
            <img src={uploadedImage.preview} alt="dummy" />
          ) : (
            <>
              Upload an Image having some celebrities like Jeff Bezos, Julie
              Sweet or use{" "}
              <a
                href="https://s3-us-west-2.amazonaws.com/bucket.aws/share/EntityRecognition.jpg"
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
