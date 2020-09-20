import React from 'react';


//--------------- TYPES
export interface KMDCheckboxProps{
  id: string;
  handleCheck?(checked:boolean): void;
  className?: string;
}

//--------------- COMPONENT
class KMDCheckbox extends React.Component<KMDCheckboxProps> {

  //ATTRS


  //FUNCS

  //----- constructor
  constructor(props:KMDCheckboxProps){
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }


  //----- handleInputChange
  private handleInputChange(event:React.ChangeEvent<HTMLInputElement>){
    const target = event.target;
    if (target.name === 'checkbox'){
      this.props.handleCheck != undefined?this.props.handleCheck(target.checked):{}
    }
  }


  //------------ render
  public render() {
    return (
      <div className={"md-checkbox " + (this.props.className?this.props.className:"")}>
        <input id={this.props.id} type="checkbox" name="checkbox" onChange={this.handleInputChange} />
        <label htmlFor={this.props.id}>{this.props.children}</label>
      </div>
    );
  }

}

export default KMDCheckbox;