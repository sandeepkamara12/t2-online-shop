import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../App';

const CountryDropdown = () => {
    const context = useContext(myContext);
    const [allCountry, setAllCountry] = useState([]);
    useEffect(()=>{
        if(context?.countryList?.length>0) {
            setAllCountry(context?.countryList)
        }
    },[context?.countryList])
    console.log(allCountry,'lela')
    const searchCountry = (e) => {
        let keyword = e.target.value.toLowerCase();
        if(keyword !=="") {
            let filteredCountry = context.countryList?.filter(country=>country.country.toLowerCase() == keyword);
            setAllCountry(filteredCountry);
        }
        else {
            setAllCountry(context?.countryList);
        }
    }

    
    return (
        <div className="modal fade" id="countryList" tabIndex="-1" aria-labelledby="countryListLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="countryListLabel">Select Country</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <input type="text" name="searchCountry" onChange={searchCountry} />
        {
            allCountry?.length >0 ? allCountry?.map((country, index)=>
                <div key={index} className={`${context.selectedCountry == country?.country ? 'active':''}`} onClick={()=>context.setSelectedCountry(country?.country)}>
                    {country.country}
                </div>
            )
            :
            <div>No country found</div>
        }        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default CountryDropdown