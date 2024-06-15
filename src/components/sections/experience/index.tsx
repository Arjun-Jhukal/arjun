import "./experience.scss";

export default function Experience() {
  return (
    <section className="experience section__gap" id="experience">
      <div className="container">
        <div className="section__title hidden lg:block">
          <h2 className="uppercase pb-[60px] text-center">Education & Experience</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:gap-12">
          <div className="education__list col-span-2 lg:col-span-1 mb-8 lg:mb-0">
            <div className="lg:hidden mb-8">
              <h2>Education</h2>
            </div>
            <div className="experience__item">
              <h3>Higher Education [2016 - 2018]</h3>
              <span>from National Academy of Science & Technology</span>
              <p>Dhangadhi, Nepal</p>
            </div>
            <div className="experience__item">
              <h3>Bachelor [2019 - 2023]</h3>
              <span>from Madan Bhandari Memorial College</span>
              <p>Kathmandu, Nepal</p>
            </div>
          </div>
          <div className="experience__list col-span-2 lg:col-span-1">
            <div className="lg:hidden mb-8">
              <h2>Experience</h2>
            </div>
            <div className="experience__item">
              <h3>Quality Assurance | Frontend Developer [2021 - 2022]</h3>
              <span>
                at <a href="#">Suga Inc</a>
              </span>
              <p> Kathmandu, Nepal</p>
            </div>
            <div className="experience__item">
              <h3>Software Developer [2022 - 2023]</h3>
              <span>
                at <a href="#">Progressivelabs</a>
              </span>
              <p> Kathmandu, Nepal</p>
            </div>
            <div className="experience__item">
              <h3>Frontend Developer [2023 - current]</h3>
              <span>
                at <a href="#">Codepros</a>
              </span>
              <p> Kathmandu, Nepal</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
