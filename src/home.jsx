import "./App.css";
import Form from "./form";
export default function Home() {
  return (
    <>
      <section className="HomeSection">
        <div className="content">
          <img src="\src\assets\BMI-images\logo.svg" alt="" />
          <h1>Body Mass Index Calculator</h1>
          <p>
            Better understand your weight in relation to your height using our
            body mass index (BMI) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </p>
          <Form />
        </div>
      </section>
    </>
  );
}
