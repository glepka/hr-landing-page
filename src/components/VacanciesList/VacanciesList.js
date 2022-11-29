import React, { useState } from "react";
import "./VacanciesList.css";
import Vacancy from "../Vacancy/Vacancy";
import { Link } from "react-scroll";

function VacanciesList({ vacancies, reviews }) {
  const [activeTab, setActiveTab] = useState("mentors");
  const [shownCards, setShownCards] = useState(6);

  return (
    <section className="vacancies" id="vacansy">
      <h2 className="vacancies__title">Открытые предложения</h2>
      <button
        className={
          activeTab === "mentors"
            ? "vacancies__btn vacancies__btn_active"
            : "vacancies__btn "
        }
        onClick={() => setActiveTab("mentors")}
      >
        Для наставников
      </button>
      <button
        className={
          activeTab === "reviews"
            ? "vacancies__btn vacancies__btn_active"
            : "vacancies__btn"
        }
        onClick={() => setActiveTab("reviews")}
      >
        Для ревьюеров
      </button>

      <ul className="vacancies__list">
        {activeTab === "mentors" &&
          vacancies
            .slice(0, shownCards)
            .map((vacancy, index) => <Vacancy vacancy={vacancy} key={index} />)}
        {activeTab === "reviews" &&
          reviews
            .slice(0, shownCards)
            .map((review, index) => <Vacancy vacancy={review} key={index} />)}
      </ul>
      {shownCards === 6 ? (
        <button
          type="button"
          className="vacancies__see-all"
          onClick={() => setShownCards(100)}
        >
          Посмотреть все
        </button>
      ) : (
        <Link
          to="vacansy"
          className="vacancies__see-all"
          smooth={true}
          duration={600}
          onClick={() => setShownCards(6)}
        >
          Свернуть
        </Link>
      )}
    </section>
  );
}

export default VacanciesList;
