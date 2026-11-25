import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Doctors() {
  const navigate = useNavigate();

  const loggedInUser = localStorage.getItem("loggedInUser");

  const role =
    loggedInUser === "admin"
      ? "admin"
      : "user";

  const doctors = [
    {
      name: "Dr. Priya Sharma",
      department: "General Physician",
      experience: "15 Years",
      image: "/images/doctor1.JPG"
    },
    {
      name: "Dr. Raj Kumar",
      department: "Cardiologist",
      experience: "19 Years",
      image: "/images/doctor2.AVIF"
    },
    {
      name: "Dr. Ramesh Rao",
      department: "Neurologist",
      experience: "20 Years",
      image: "/images/doctor3.JPG"
    },
    {
      name: "Dr. Anjali Reddy",
      department: "Dermatologist",
      experience: "7 Years",
      image: "/images/doctor4.AVIF"
    }
  ];

  const handleBookAppointment = (doctorName) => {
    navigate("/appointments", {
      state: {
        doctor: doctorName
      }
    });
  };

  return (
    <>
      <Navbar />

      <div className="dashboard">

        <Sidebar role={role} />

        <main className="main-content">

          <h1>Our Doctors</h1>

          <p className="welcome">
            Meet our experienced medical professionals.
          </p>

          <div className="doctor-grid">

            {doctors.map((doctor, index) => (
              <div
                className="doctor-card"
                key={index}
              >

                <div className="doctor-image-container">

                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="doctor-image"
                  />

                </div>

                <h2>{doctor.name}</h2>

                <p className="doctor-department">
                  {doctor.department}
                </p>

                <p>
                  <strong>Experience:</strong>{" "}
                  {doctor.experience}
                </p>

                <button
                  className="doctor-button"
                  onClick={() =>
                    handleBookAppointment(doctor.name)
                  }
                >
                  Book Appointment
                </button>

              </div>
            ))}

          </div>

        </main>

      </div>
    </>
  );
}

export default Doctors;