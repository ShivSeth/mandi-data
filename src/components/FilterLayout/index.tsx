import {
  IonIcon,
} from '@ionic/react';
import {closeOutline  } from "ionicons/icons";
import './filter-layout.css';

const FilterLayout = (props: any) => {
   
    return (
       <div className="filter-layout">
       		<div className="filter-head">
	       		<h2>Filter</h2>
	       		<a href="" className="f-close" onClick={(e)=>props.filterClose(e)}>
	       			<IonIcon icon={closeOutline} size="large"></IonIcon>
	       		</a>
       		</div>
       		<div className="filter-value">
       			
       		</div>

      </div>
    );
};

export default FilterLayout;