export default function Limitations() {
  return (
    <section className="limitations">
      <div className="textbox">
        <h1>Limitations of BMI</h1>
        <p>
          Although BMI is often a practical indicator of healthy weight, it is
          not suited for every person. Specific groups should carefully consider
          their BMI outcomes, and in certain cases, the measurement may not be
          beneficial to use.
        </p>
        <img src="src\assets\BMI-images\pattern-curved-line-left.svg" alt="" />
      </div>

      <div className="grid-container">
        <div className="box1">
          <div className="grid-item">
            <h3>
              <span>
                <img src="src\assets\BMI-images\icon-gender.svg" alt="" />
              </span>
              Gender
            </h3>
            <p>
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
        </div>
        <div className="box2">
          <div className="grid-item">
            <h3>
              <span>
                <img src="src\assets\BMI-images\icon-age.svg" alt="" />
              </span>
              Age
            </h3>
            <p>
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="grid-item">
            <h3>
              <span>
                <img src="src\assets\BMI-images\icon-muscle.svg" alt="" />
              </span>
              Muscle
            </h3>
            <p>
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </div>

        <div className="box3">
          <div className="grid-item">
            <h3>
              <span>
                <img src="src\assets\BMI-images\icon-pregnancy.svg" alt="" />
              </span>
              Pregnancy
            </h3>
            <p>
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimise health risks for both mother and child.
            </p>
          </div>
          <div className="grid-item">
            <h3>
              <span>
                <img src="src\assets\BMI-images\icon-race.svg" alt="" />
              </span>
              Race
            </h3>
            <p>
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
