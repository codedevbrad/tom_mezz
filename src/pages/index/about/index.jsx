import './style.css';

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="about-container">
        <div className="about-text">
          <h2>The Manchester Laser Cutting Way</h2>
          <p>
            At Manchester Laser Cutting, we specialise in delivering fast, precise, and reliable cutting solutions 
            for projects of every scale. From one-off prototypes to full production runs, our skilled team ensures 
            your parts are cut with accuracy, consistency, and clean, burr-free edges. 
            <br /><br />
            We know deadlines matter. That’s why we offer same-day quoting, efficient nesting, and rapid turnaround 
            times across the Greater Manchester area. 
            <br /><br />
            Whether it’s laser-cut steel, aluminium, or stainless, you can trust us to deliver components that meet 
            your exact specifications - on time, every time.
          </p>
        </div>
        <div className="about-image">
           <video
              src="https://res.cloudinary.com/dnph27ksd/video/upload/v1756997723/20230928_174253_injha1.mp4"
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
