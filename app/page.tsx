"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const dresses = Array.from(
    { length: 12 },
    (_, i) => `/images/dress${i + 1}.jpg`
  );

  const reels = [
    "/videos/reel1.mp4",
    "/videos/reel2.mp4",
    "/videos/reel3.mp4",
    "/videos/reel4.mp4",
    "/videos/reel5.mp4",
  ];

  return (
    <main className="page">

      <section className="hero">
        <img
          src="/images/hero.jpg"
          className="hero-image"
        />

        <div className="overlay"></div>

        <div className="hero-content">
          <p className="subtitle">
            Cinematic Fashion Studio
          </p>

          <h1>AH Click Cine</h1>

          <p className="desc">
            Premium fashion visuals, luxury storytelling,
            cinematic edits & creative direction.
          </p>
        </div>
      </section>

      <section className="about">
        <h2>Luxury Visual Experience</h2>

        <p>
          We craft cinematic fashion campaigns,
          premium reels, modern edits and visual stories
          designed to create unforgettable impressions.
        </p>
      </section>

      <section className="gallery-section">
        <h2 className="section-title">
          Featured Gallery
        </h2>

        <div className="gallery-grid">
          {dresses.map((img, i) => (
            <div
              key={i}
              className="card"
              onClick={() => setSelectedImage(img)}
            >
              <img src={img} />
            </div>
          ))}
        </div>
      </section>

      <section className="reels-section">
        <h2 className="section-title">
          Cinematic Reels
        </h2>

        <div className="reels-grid">
          {reels.map((video, i) => (
            <video
              key={i}
              src={video}
              controls
              muted
              playsInline
              preload="metadata"
            />
          ))}
        </div>
      </section>

      <section className="contact">
        <img
          src="/images/contact.jpg"
          className="contact-bg"
        />

        <div className="overlay"></div>

        <div className="contact-content">
          <h2>Let’s Create Something Cinematic</h2>

          <a href="mailto:alihamzaedit009@gmail.com">
            alihamzaedit009@gmail.com
          </a>

          <a href="https://wa.me/923267358323">
            +92 326 7358323
          </a>

          <a href="https://instagram.com/ah_clickcine">
            @ah_clickcine
          </a>
        </div>
      </section>

      {selectedImage && (
        <div
          className="popup"
          onClick={() => setSelectedImage(null)}
        >
          <img src={selectedImage} />
        </div>
      )}
    </main>
  );
}