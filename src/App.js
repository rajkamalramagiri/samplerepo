import "./styles.css";
import * as React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";


class App extends React.Component {
  state = {
    showMainDropDown: false,
    showSubDropDown: false,
    showSubDropDownIndex: null,
    selectedItem:"Select an Item",
    items : [
      {
        id:1,
        name: "Animals & Pet supplies",
        subval: [{ name: "Collar" }, { name: "Dog Food" }, { name: "Cat Food" }],
      },
      {
        id:2,
        name: "Apparel & Accessories",
        subval: [
          { name: "Clothing" },
          { name: "Clothing accessories" },
          { name: "Handbags & Wallets" },
          { name: "Jewelry" },
          { name: "Shoes" }
        ],
    
      },
      {
        id:3,
        name: "Arts & Entertainment",
        subval: [
          { name: "Games" },
          { name: "Movies" },
          { name: "Musics" },
          { name: "Painting" }
        ],
      },
      {
        id:4,
        name: "Baby & Toddler",
        subval: [
          { name: "Milk Bottle" },
          { name: "Baby Car" },
          { name: "Nappkins" }
        ],
    
      },
      {
        id:5,
        name: "Business & Industrial",
        subval: [
          { name: "Presentation" },
          { name: "Charts & Graphs" },
          { name: "Portfolios" },
          { name: "Equipments" }
        ],
      }
    ]

  };
  toggleDropDown = () => {
    this.setState({ showMainDropDown: !this.state.showMainDropDown });
  };
  openSubDropDown = (index) => {
    console.log('index',index)
    this.setState({ showSubDropDown: !this.state.showSubDropDown,showSubDropDownIndex:index });
  };
  closeSubDropDown = () => {
    this.setState({ showSubDropDown: !this.state.showSubDropDown,showSubDropDownIndex:null });
  }
  selectItem = (itemSelected) => {
        this.setState({showMainDropDown:false,showSubDropDown:false,showSubDropDownIndex: null,
          selectedItem: itemSelected})
    
  }
  render() {
    return (
      <div>
        <div className="input-box">
          <span>{this.state.selectedItem}</span>
          <span className="dropdown-arrow">
            <ArrowDropDownIcon onClick={this.toggleDropDown} />
          </span>
        </div>
        {this.state.showMainDropDown && (
          <div className="dropdown-container-outer">
            <div className="dropdown-container">
              {this.state.items.map((data, index) => (
                <div>
                  {(this.state.showSubDropDown && index == this.state.showSubDropDownIndex) ? (<>
                    <div className="item-title-expanded" onClick={this.closeSubDropDown}>
                      <div className="dropdown-next" >
                      <NavigateBeforeRoundedIcon />
                      </div>
                      <label className="txt-title">{data.name}</label>

                    </div>
                    <div className="dropDown">
                    {data.subval.map(subItem =><div onClick={()=>this.selectItem(subItem.name)}  className="item-title">
                    
                    <label className="txt-title"> {subItem.name}</label></div>)}
                    </div>
                  
                  </>
                    
                  ) :  (!this.state.showSubDropDown &&
                      
                    <div
                    key={index}
                    className="item-title"
                    onClick={() => this.openSubDropDown(index)}
                  >
                    <label className="txt-title">{data.name}</label>
                    <div className="dropdown-next">
                      <NavigateNextRoundedIcon />
                    </div>
                  </div>
                   
                  )}

                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default App;
