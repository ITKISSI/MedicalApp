import { useState, useEffect } from "react";
import Navbar from "../adminComponents/Navbar";
import axiosInstance from "../services/apiClient";
import FrenchDayPicker from "../components/FrenchDayPicker";
import TimeRangePicker from "../components/TimeRangePicker";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateMedcin = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");
  const [adresse, setAdresse] = useState("");
  const [cin, setCin] = useState("");
  const [login, setLogin] = useState("");
  const [selectedCabinet, setSelectedCabinet] = useState("");
  const [password, setPassword] = useState("");
  const [inp, setInp] = useState("");
  const [specialite, setSpecialite] = useState("");
  const [cabinetData, setCabinetData] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [timeRanges, setTimeRanges] = useState({});
  const [errors, setErrors] = useState({});

  const handleOptionChange = (event) => {
    setSelectedCabinet(event.target.value);
  };

  useEffect(() => {
    const fetchCabinets = async () => {
      const pageSize = 10;
      let pageNumber = 0;
      let allCabinets = [];

      while (true) {
        try {
          const response = await axiosInstance.get(
            `/cabinet?pageSize=${pageSize}&pageNumber=${pageNumber}`
          );
          const { cabinetList, isLast } = response.data;

          if (!cabinetList || cabinetList.length === 0) {
            break;
          }
          allCabinets = allCabinets.concat(cabinetList);

          if (isLast) {
            break;
          }
          pageNumber++;
        } catch (error) {
          console.error(error);
          break;
        }
      }

      setCabinetData(allCabinets);
    };

    fetchCabinets();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    let errors = {};

    if (!name) errors.name = "Le nom ne peut pas être vide.";
    if (!prenom) errors.prenom = "Le prénom ne peut pas être vide.";
    if (!age) errors.age = "L'âge ne peut pas être vide.";
    if (!adresse) errors.adresse = "L'adresse ne peut pas être vide.";
    if (!cin) errors.cin = "Le numéro CIN ne peut pas être vide.";
    if (!login) errors.login = "Le login ne peut pas être vide.";
    if (!password) errors.password = "Le mot de passe ne peut pas être vide.";
    if (!inp) errors.inp = "Le champ 'inp' ne peut pas être vide.";
    if (!specialite) errors.specialite = "La spécialité ne peut pas être vide.";
    if (!selectedCabinet)
      errors.selectedCabinet = "La cabinet ne peut pas etre vide";
    if (!selectedDays || selectedDays.length === 0)
      errors.days = "Veuillez sélectionner au moins un jour.";

    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      axiosInstance
        .post("/medcin/" + selectedCabinet + "/cabinet", {
          firstName: name,
          lastName: prenom,
          age: age,
          adress: adresse,
          cin: cin,
          login: login,
          password: password,
          inp: inp,
          specialite: specialite,
        })
        .then((response) => {
          const medecinId = response.data.id; // Get the created medecin's ID from the response
          // Create the disponibilite for the medecin
          // create payload for each selected day
       
          const daysPayload = selectedDays.map((dayName, idx) => ({
            jour: dayName,
            startTime: timeRanges[dayName]?.startTime,
            endTime: timeRanges[dayName]?.endTime,
          }));
          console.log('====================================');
          console.log(medecinId);
          console.log(daysPayload);
          console.log('====================================');
          axiosInstance
            .post(`/disponibilite/medecin/${medecinId}`,daysPayload)
            .then((response) => {
              toast("Médecin a été créé");
            })
            .catch((error) => {
              console.error(error.message);
            });

        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs */}
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
                    {errors.name && (
                      <p className="text-danger">{errors.name}</p>
                    )}
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
                    {errors.prenom && (
                      <p className="text-danger">{errors.prenom}</p>
                    )}
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
                    {errors.age && <p className="text-danger">{errors.age}</p>}
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
                    {errors.adresse && (
                      <p className="text-danger">{errors.adresse}</p>
                    )}
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
                    {errors.cin && <p className="text-danger">{errors.cin}</p>}
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
                    {errors.login && (
                      <p className="text-danger">{errors.login}</p>
                    )}
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
                    {errors.password && (
                      <p className="text-danger">{errors.password}</p>
                    )}
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
                    {errors.inp && <p className="text-danger">{errors.inp}</p>}
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
                    {errors.specialite && (
                      <p className="text-danger">{errors.specialite}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Cabinet</label> <br />
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
                    {errors.selectedCabinet && (
                      <p className="text-danger">{errors.selectedCabinet}</p>
                    )}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Disponibilite</label>
                    {errors.days && (
                      <p className="text-danger">{errors.days}</p>
                    )}

                    <FrenchDayPicker
                      selectedDays={selectedDays}
                      setSelectedDays={setSelectedDays}
                      timeRanges={timeRanges}
                      setTimeRanges={setTimeRanges}
                    />
                  </div>
                </div>
              </div>
              {/* /row*/}
            </div>
            <p className="text-center">
              <button className="btn_1 medium" type="submit">
                Ajouter
              </button>
              <br />
            </p>
          </form>
        </div>

        <ToastContainer
          toastStyle={{ backgroundColor: "#05b30c", color: "white" }}
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
};

export default CreateMedcin;
