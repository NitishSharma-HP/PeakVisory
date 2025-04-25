import React, { useRef, useState } from "react";
import styles from "./FileUpload.module.css";

const FileUpload = (props: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  // const activeTab = "Receipts";


  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAddFile = ()=>{
    alert('file uploaded')
  }

  return (
    <div className={styles.container}>
      <div
        className={`${styles.uploadBox} ${dragActive ? styles.active : ""}`}
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
      >
        <div className={styles.icon}>
          <img src='/cloud-upload.svg' width='30px'></img>
        </div>
        <div className={styles.dragText}>
          <p>Drag & Drop or Choose file to upload</p>
          <p>JPG, PNG, PDF, CVS</p>
        </div>
        <input
          type="file"
          ref={inputRef}
          onChange={handleChange}
          className={styles.hiddenInput}
        />
        {file && (
          <div className={styles.fileName}>
            Selected file: <span>{file.name}</span>
          </div>
        )}
      </div>
      <div className={styles.addBtn}>
        <button onClick={handleAddFile} className={styles.add}>Add {props.tab}</button>
      </div>
    </div>

  );
};

export default FileUpload;
