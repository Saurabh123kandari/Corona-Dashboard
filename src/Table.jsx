import React from "react";

import { MDBDataTable } from "mdbreact";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function Table(props) {
  console.log(props.data);
  const newdata = props.data.Countries;
  console.log(newdata);
  let itemToRender;
  if (newdata) {
    console.log("newdata ");
    console.log(newdata);
    itemToRender = newdata.map((item) => {
      return (
        <tr>
          <td>{item.Country}</td>
          <td>{item.TotalConfirmed}</td>
          <td>{item.NewConfirmed}</td>
          <td>{item.NewDeaths}</td>
          <td>{item.TotalDeaths}</td>
        </tr>
      );
    });
    console.log("itemToRender ");
    console.log(itemToRender);
  }
  const data = {
    columns: [
      {
        label: "Country",
        field: "Country",
        sort: "asc",
        width: "150",
      },
      {
        label: "TotalConfirmed",
        field: "TotalConfirmed",
        sort: "asc",
        width: "150",
      },
      {
        label: "NewConfirmed",
        field: "NewConfirmed",
        sort: "asc",
        width: "150",
      },
      { label: "NewDeaths", field: "NewDeaths", sort: "asc", width: "150" },
      { label: "TotalDeaths", field: "TotalDeaths", sort: "asc", width: "150" },
      {
        label: "TotalRecovered",
        field: "TotalRecovered",
        sort: "asc",
        width: "150",
      },
    ],
    rows: newdata,
  };

  return (
    <>
      <table className="table table-striped"></table>
      <MDBDataTable striped bordered small data={data} />
    </>
  );
}

export default Table;
