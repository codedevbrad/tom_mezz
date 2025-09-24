import './style.css';

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>The UK Mezzanines Way</h2>
          <p>
            At UK Mezzanines, we design, supply, and install bespoke mezzanine floors 
            that transform underused space into practical, cost-effective solutions. 
            From offices and warehouses to retail spaces, our expert team ensures 
            every project meets building regulations and is tailored to your needs.
            <br /><br />
            We know expansion costs matter. That’s why we provide clear quotations, 
            efficient planning, and fast installation across the UK. 
            <br /><br />
            Whether it’s a small office extension or a large-scale warehouse build, 
            you can trust us to deliver mezzanine floors that are safe, compliant, 
            and built to last.
          </p>
        </div>
        <div className="about-image">
           <video
              src="https://res.cloudinary.com/dnph27ksd/video/upload/v1758724414/mezz_ljhakr.mp4"
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            />
        </div>
      </div>
    </section>
  );
}