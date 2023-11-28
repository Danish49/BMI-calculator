import Eating from './assets/BMI-images/icon-eating.svg';
import Excercise from './assets/BMI-images/icon-exercise.svg'
import Sleep from './assets/BMI-images/icon-sleep.svg'
export default function Remedies() {
  return (
    <section className="remedies">
      <div className="remedy">
        <img src={Eating} alt="" />
        <h3>Healthy eating</h3>
        <p>
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
      <div className="remedy">
        <img src={Excercise} alt="" />
        <h3>Regular exercise</h3>
        <p>
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div className="remedy">
        <img src={Sleep} alt="" />
        <h3>Adequate sleep</h3>
        <p>
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
      </div>
    </section>
  );
}
