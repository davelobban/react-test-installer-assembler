import React, { useState} from "react";
import "./App.css";

const data = {
  //TODO: From Marketing. Need to get an API set up
  products: [
    {
      name: "PipeWizard",
      productId: "001PW",
      versionsAvailable: [2013, 2014, 2015, 2016, 2017, 2018, 2019]
    },
    {
      name: "PipeWizardPro",
      productId: "001PWPro",
      versionsAvailable: [2014, 2015, 2016, 2017, 2018, 2018.1]
    },
    {
      name: "PipeWizardProPlus",
      productId: "001PWProPlus",
      versionsAvailable: [2015, 2016, 2017, 2018.1]
    },
    {
      name: "PipeWizardLite",
      productId: "001PWLite",
      versionsAvailable: [2016, 2017, 2018, 2019, 2019.1, 2019, 2]
    },
    {
      name: "PipeWizardLite2",
      productId: "001PWLite",
      versionsAvailable: [2019.1, 2019.2, 2019.3, 2019.4]
    }
  ]
};

function App() {
  const [selection, setSelection] = useState({ "001PW": true });

  function handleInputChange(event) {
    setSelection({
      ...selection,
      [event.target.name]: event.target.checked
    });
  }

  const buildInstaller = () => {
    alert("Todo!");
  };

  return (
    <div className="App">
      <h1> Installer Assembler</h1>
      <div style={{ border: "2px solid green" }}>
        <p>
          Select the products that you wish to build an installer for. You can
          select any valid combination of products but please obey the rules in
          red. Then click OK
        </p>
        <hr />
        <p>
          For each product select the version according to the rules in red.
        </p>
      </div>
      <div>
        <form onSubmit={buildInstaller}>
          {data.products.map((elem, index) => {
            return (
              <div key={index}>
                <label>
                  {elem.name}
                  <input
                    name={elem.productId}
                    type="checkbox"
                    checked={selection[elem.productId]}
                    onChange={event => handleInputChange(event)}
                  />
                </label>
              </div>
            );
          })}
          <input type="submit" />
        </form>
      </div>
      <div style={{ border: "20px solid red" }}>
        <p>
          You must only create an installer with PipeWizard ( & optionally
          PipeWizardPro ( & optionally PipeWizardProPlus )){" "}
        </p>
        <p>OR</p>
        <p>You must only create an installer with PipeWizardLite </p>
        <p>OR</p>
        <p>You must only create an installer with PipeWizardLite2. </p>
        <hr />
        <p>ProPlus cannot be a higher version than Pro.</p>
        <p>ProPlus cannot be selected without Pro.</p>
        <p>Pro cannot be a higher version than PipeWizard.</p>
      </div>
    </div>
  );
}


//A former member of staff built this just before he left. Could you give it some attention please?
//Task 1: Implement the rules so that a use can only select combinations of products and versions that satisfy the rules. 
// NB: It is possible that a user may wish to create an installer with historic (ie, not the latest versions).
// Extract out whatever components you think will best achieve this. 
//Task 2: Make this more attractive to the user to improve the image of the Software team.
//Task 3: Call a InstallerCompiler API with output in the format:
/*
{
  customerName: "(from user)",
  customerCurrentVersion: "(from user)",
  requestedTimestamp: "(now as ISO timestamp)",
  userName: "(username)"
  products: [
    {
      productId: (from user selection),
      versionNumber:(from user selection),
    }
  ]
}
 */
//Task 4a: Introduce a new data format for the data (if time I will wire up to an Azure Function to see how the candidate consumes an API/ uses Promises, etc)
// The API might have some delays/issues (the same former member of staff wrote it).
//OR
// Task 4b: Introduce upgrade paths, eg, if a customer is on 2017 they cannot select 2018; they must select 2019(.x).


export default App;
