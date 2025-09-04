import React, { useState } from 'react';
import './PropertyMediaUpload.css';

const navItems = [
  { name: 'My Profile', icon: '👤' },
  { name: 'My Properties', icon: '🏠' },
  { name: 'Saved Properties', icon: '💾' },
  { name: 'Add Property', icon: '➕' }
];

const sideSteps = [
  { name: 'Property Type', completed: true },
  { name: 'Sale/Rent', completed: true },
  { name: 'Property Info', completed: false },
  { name: 'Property Media', completed: false, current: true }
];

export default function PropertyMediaUpload() {
  const [photos, setPhotos] = useState([]);
  const [video, setVideo] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const handlePhotoSelect = (e) => {
    const files = Array.from(e.target.files).slice(0, 6);
    setPhotos(files);
  };

  const handleVideoSelect = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (photos.length === 0 && !video) {
      setUploadMessage("Please select images or a video to upload.");
      return;
    }
    setUploading(true);
    setUploadMessage("");
    const formData = new FormData();
    photos.forEach((photo, idx) => {
      formData.append(`images`, photo);
    });
    if (video) {
      formData.append("video", video);
    }
    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setUploadMessage("Upload successful!");
        setPhotos([]);
        setVideo(null);
      } else {
        setUploadMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      setUploadMessage("Error uploading files.");
    }
    setUploading(false);
  };

  return (
    <div className="pmu-page">
      <nav className="pmu-topbar">
        <div className="pmu-nav-icons">
          {navItems.map((item, idx) => (
            <span key={idx} className="pmu-nav-icon" title={item.name}>{item.icon}</span>
          ))}
        </div>
      </nav>
      <div className="pmu-main">
        <aside className="pmu-sidebar">
          <div className="pmu-steps">
            {sideSteps.map((step, idx) => (
              <div key={idx} className={`pmu-step${step.completed ? ' completed' : ''}${step.current ? ' current' : ''}`}>
                <div className="pmu-step-circle">{step.completed ? '✓' : idx + 1}</div>
                <div className="pmu-step-name">{step.name}</div>
              </div>
            ))}
          </div>
        </aside>
        <main className="pmu-content">
          <h1 className="pmu-title" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ cursor: 'pointer', fontSize: '32px' }} title="Go Back">🡸</span>
            Upload media for the property
          </h1>
          <div className="pmu-photo-section">
            <div className="pmu-photo-grid">
              {photos.length > 0
                ? photos.map((photo, idx) => (
                    <div key={idx} className="pmu-photo-thumb">
                      <img src={URL.createObjectURL(photo)} alt={`property-${idx}`} />
                    </div>
                  ))
                : Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="pmu-photo-thumb pmu-photo-placeholder">
                      <span>150 x 150</span>
                    </div>
                  ))}
            </div>
            <div className="pmu-photo-actions">
              <label className="pmu-btn">
                Select up to 6 Photos
                <input type="file" multiple accept="image/*" onChange={handlePhotoSelect} style={{ display: 'none' }} />
              </label>
              <span className="pmu-selected">{photos.length} selected</span>
              <button className="pmu-btn pmu-clear" onClick={() => setPhotos([])}>Clear Photos</button>
            </div>
          </div>
          <div className="pmu-video-section">
            <div className="pmu-video-preview">
              {video ? (
                <video src={URL.createObjectURL(video)} controls />
              ) : (
                <div className="pmu-video-placeholder">
                  <span>Video Preview</span>
                </div>
              )}
            </div>
            <div className="pmu-video-actions">
              <label className="pmu-btn">
                Select a video
                <input type="file" accept="video/*" onChange={handleVideoSelect} style={{ display: 'none' }} />
              </label>
              <button className="pmu-btn pmu-clear" onClick={() => setVideo(null)}>Clear Video</button>
            </div>
            <button className="pmu-btn pmu-upload" onClick={handleUpload} disabled={uploading}>
              {uploading ? "Uploading..." : "Upload"}
            </button>
            {uploadMessage && <div className="pmu-upload-message">{uploadMessage}</div>}
          </div>
        </main>
      </div>
    </div>
  );
}