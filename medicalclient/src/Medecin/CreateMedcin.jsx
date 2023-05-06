import { useState, useEffect } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import { ReactComponent as Loader } from "../Loader.svg";
const CreateMedcin = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [adresse, setAdresse] = useState("");
  const [cin, setCin] = useState("");
  const [login, setLogin] = useState();
  const [selectedCabinet, setSelectedCabinet] = useState("");
  const [password, setPassword] = useState();
  const [inp, setInp] = useState();
  const [specialite, setSpecialite] = useState();
  const [cabinetData, setCabinetData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submitText, setSubmitText] = useState("Save");
  const [saveResult, setSaveResult] = useState("Medecin a ete ajoute ! ");
  const [isSaveSucces, setSaveSucces] = useState(false);
  const [isRequestFinished, setIsRequestFinished] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
    setIsLoading(true);

    axiosInstance
      .post("/medcin", {
        firstName: name,
        lastName: prenom,
        age: age,
        adress: adresse,
        cin: cin,
        login: login,
        password: password,
        inp: inp,
        specialite: specialite,
        cabinet: {
          id: selectedCabinet,
        },
      })
      .then((response) => {
        console.log("Data created successfully");
        setIsLoading(false);
        setSaveSucces(true);
        setSaveResult("Medecin a ete ajoute");
        setIsRequestFinished(true);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setSaveResult(error);
        setSaveSucces(false);
        setIsRequestFinished(true);
      });
  };

  const handleOptionChange = (event) => {
    setSelectedCabinet(event.target.value);
  };

  useEffect(() => {
    axiosInstance
      .get("/cabinet?pageSize=10")
      .then((response) => {
        setCabinetData(response.data.cabinetList);
        console.log(response.data.cabinetList);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Add listing</li>
          </ol>
          <form onSubmit={handleSubmit}>
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-file" />
                  Medecin informations
                </h2>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nom</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="form-control"
                      placeholder="Nom"
                    />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label>Prenom</label>

                    <input
                      type="text"
                      value={prenom}
                      onChange={(event) => setPrenom(event.target.value)}
                      className="form-control"
                      placeholder="Prenom"
                    />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Age</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(event) => setAge(event.target.value)}
                      className="form-control"
                      placeholder="Age"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Adresse</label>
                    <input
                      type="text"
                      value={adresse}
                      onChange={(event) => setAdresse(event.target.value)}
                      className="form-control"
                      placeholder="Adresse"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cin</label>
                    <input
                      type="text"
                      value={cin}
                      onChange={(event) => setCin(event.target.value)}
                      className="form-control"
                      placeholder="Cin"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Login</label>
                    <input
                      type="text"
                      className="form-control"
                      value={login}
                      onChange={(event) => setLogin(event.target.value)}
                      placeholder="Login"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Mot de passe</label>
                    <input
                      type="text"
                      className="form-control"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder="mot de passe"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Inp</label>
                    <input
                      type="number"
                      className="form-control"
                      value={inp}
                      onChange={(event) => setInp(event.target.value)}
                      placeholder="Inp"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>specialite</label>
                    <input
                      type="text"
                      value={specialite}
                      onChange={(event) => setSpecialite(event.target.value)}
                      className="form-control"
                      placeholder="specialite"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cabinet</label> <br></br>
                    {}
                    <select
                      className="form-select w-50"
                      aria-label="Default select example"
                      value={selectedCabinet}
                      onChange={handleOptionChange}
                    >
                      <option disabled={true} value="">
                        --select a cabinet--
                      </option>
                      {cabinetData.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.denomination}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              {/* /row*/}

              {/* /row*/}
            </div>
            <p className="text-center">
              <button className="btn_1 medium" type="submit">
                {!isLoading ? submitText : <Loader className="spinner" />}
              </button>{" "}
              <br />
              {isRequestFinished && (
                <span className={isSaveSucces ? "text-success" : "text-danger"}>
                  {saveResult.message ? saveResult.message : saveResult}
                </span>
              )}
            </p>
          </form>
        </div>
        {/* /.container-fluid*/}
      </div>
    </>
  );
};

export default CreateMedcin;
