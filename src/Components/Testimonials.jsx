

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const testimonials = [
  {
    name: "Wanjiru Mwangi",
    role: "Donor",
    message: "Donating blood was an incredible experience. The team was very supportive and made me feel comfortable throughout the process!",
    photo: "https://via.placeholder.com/60", // Replace with actual photo URL
    rating: 5,
  },
  {
    name: "David Otieno",
    role: "Volunteer",
    message: "Being a volunteer has been one of the most fulfilling experiences of my life. I love being part of a community that saves lives!",
    photo: "https://via.placeholder.com/60", // Replace with actual photo URL
    rating: 4,
  },
  {
    name: "Aisha Abdallah",
    role: "Recipient",
    message: "I am grateful for the blood donors. Their generosity saved my life during a critical time, and I cannot thank them enough!",
    photo: "https://via.placeholder.com/60", // Replace with actual photo URL
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>What Our Donors Say</h2>
      <div className="testimonials row">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <img src={testimonial.photo} alt={testimonial.name} className="rounded-circle" />
            <h3>{testimonial.name}</h3>
            <p className="role">{testimonial.role}</p>
            <p className="message">"{testimonial.message}"</p>
            <p className="rating">{"★".repeat(testimonial.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
