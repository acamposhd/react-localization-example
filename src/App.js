import React from "react";
import us from "./assets/images/us.png";
import mx from "./assets/images/mx.png";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const username = "Beto";
  const { i18n, t } = useTranslation();
  const changeLaguage = (language) => {
    i18n.changeLanguage(language);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={i18n.language === "es" ? mx : us}
          className="flags"
          alt="mxlogo"
        />
        <p>{t("welcome")}</p>
        <p>{`${t("name")} : ${username}`}</p>
        <p>{t("thanks")}</p>
        <p>{t("select")}</p>
        <div className="link-container">
          <p
            className={`App-link ${
              i18n.language === "es" ? "selected" : "unselected"
            }`}
            onClick={() => changeLaguage("es")}
          >
            π²π½
          </p>
          <p
            className={`App-link ${
              i18n.language === "en" ? "selected" : "unselected"
            }`}
            onClick={() => changeLaguage("en")}
          >
            πΊπΈ
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
