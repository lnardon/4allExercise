import React from 'react';

import Card from '../../Components/DinerCard/DinerCard';
import './DinerList.css';

export default function DinerList(props) {
  return (
    <div className={"dinersListContainer"} >
      <div className={"headerdinerListDiv"} >
        <h2>share eat</h2>
      </div> 
        <div className={"headerDiv"} >
            <h2>
                Lugares
            </h2>
            <h3>
                {props.info.length} lugares cadastrados
            </h3>
        </div>
        <div className={"listDiv"} >
          {props.info.map((diner) => {
            return  <Card key={diner.name} dinerName={diner.name} dinerProducts={diner.menuItems} />
          })}
        </div>
    </div>
  );
}
