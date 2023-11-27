import { ReactComponent as Eating} from './assets/BMI-images/icon-eating.svg';
import excercise from './assets/BMI-images/icon-exercise.svg'
import sleep from './assets/BMI-images/icon-skeep.svg'
export default function Remedies() {
  return (
    <section className="remedies">
      <div className="remedy">
        <Eating/>
        <h3>Healthy eating</h3>
        <p>
          Healthy eating promotes weight control, disease prevention, better
          digestion, immunity, mental clarity, and mood.
        </p>
      </div>
      <div className="remedy">
        <img src={excercise} alt="" />
        <h3>Regular exercise</h3>
        <p>
          Exercise improves fitness, aids weight control, elevates mood, and
          reduces disease risk, fostering wellness and longevity.
        </p>
      </div>
      <div className="remedy">
        <img src={sleep} alt="" />
        <h3>Adequate sleep</h3>
        <p>
          Sleep enhances mental clarity, emotional stability, and physical
          wellness, promoting overall restoration and rejuvenation.
        </p>
      </div>
    </section>
  );
}
