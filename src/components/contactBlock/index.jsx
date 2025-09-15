import './index.css';
import { data } from '../../data';


const ContactCTA = () => {
  return (
    <div className="contact-cta">
      <div className="quote-content">
        <h3 className="cta-heading">
          Your Projects, Our Precision - Working Together.
        </h3>
        <div className="cta-actions">
          <a href="/quote" className="quote-btn">Get a Quote</a>
          <a href={data.whatsapp} className="phone-link">📞 {data.number} </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCTA;