// import React, { useEffect, useState } from "react";
// import Display from "./Display";

// // import styles from "./App.module.css";
// // import Display from "./components/Display";
// import Cards from "./Cards";

// import Table from "./Table";

// const App = () => {
//   const [data, setData] = useState({});

//   // console.log("TotalConfirmed");
//   // console.log(TotalConfirmed);
//   // console.log("TotalNewDeaths");
//   // console.log(TotalDeaths);
//   // console.log("TotalRecovered");
//   // console.log(TotalRecovered);

//   useEffect(() => {
//     fetch("https://api.covid19api.com/summary")
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, []);
//   console.log("dataappppp");
//   console.log(data);

//   const newdata = data.Global;
//   console.log("show new dataaaaaaaaaaa");
//   console.log(newdata);

//   // function activeCase() {
//   //   const datasub = newdata.TotalConfirmed - newdata.TotalRecovered;

//   //   return datasub;
//   // }

//   // const cardInfo = [
//   //   { id: 1, title: "Current Active Case", text: "GBGJ  " },
//   //   { id: 2, title: "Total Confirmed", text: "NBNB" },
//   // ];
//   // const rend = cardInfo.map((cardprop, index) => {
//   //   return (
//   //     <Cards
//   //       key={cardInfo[index].id}
//   //       title={cardInfo[index].title}
//   //       text={cardInfo[index].text}
//   //     />
//   //   );
//   // });

//   return (
//     <div className="main-div">
//       <div className="container container1240">
//         <div className="cardwrapper">
//           <div className="row">
//             <div className="col-md-12">
//               <div className="row">
//                 {/* {rend} */}
//                 <Cards key="1" title="adssa" text="asdsad" />
//                 <Cards key="1" title="asdd" text="adsasd" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="display_row">
//           <div className="display_col">
//             <Display data={data} />
//           </div>
//         </div>
//         <div className="table_row">
//           <div className="table_col">
//             <Table data={data} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import Display from "./Display";
import CardDemo from "./CardDemo";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import "./App.css";
import Footer from "./Footer";

// import styles from "./App.module.css";
// import Display from "./components/Display";
import Cards from "./Cards";

import Table from "./Table";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  console.log("dataappppp");
  console.log(data);

  const newdata = data.Global;
  console.log("show new dataaaaaaaaaaa");
  console.log(newdata);

  return (
    <React.Fragment>
      <div className="main-div">
        <Header />
        <div className="container container1240">
          <div className="display_row">
            <div className="display_col">
              <Display data={data} />
            </div>
          </div>
          <div className="cardwrapper">
            <div className="row">
              <div className="col-md-12">
                <div className="card_row">
                  <Cards data={data} />
                </div>
              </div>
            </div>
          </div>

          <div className="table_row">
            <div className="table_col">
              <Table data={data} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
