import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'


class Taskbar extends React.Component{
  render(){
    return(
      <div id='taskbar'>
       <i id="save" class='fa fa-save' onClick={this.props.save}></i>
       <i id="info" onClick={this.props.toggleInfo} class='fa fa-info-circle'></i>
       <i id="bold" onClick={this.props.onClick} className='fa fa-bold'></i>
       <i id="italic" onClick={this.props.onClick} className='fa fa-italic'></i>
       <i id="quote" onClick={this.props.onClick} className='fa fa-quote-left'></i>
       <i id="link" onClick={this.props.onClick} className='fa fa-link'></i>
       <i id="picture" onClick={this.props.onClick} className='fa fa-image'></i>
       <i  onClick={this.props.onClick} className="fa fa-list"/>
       <i  onClick={this.props.onClick} className="fa fa-list-ol"/>
       <i  onClick={this.props.onClick} className="fa fa-code"/>
       <i id="theme-switch" class='fa fa-toggle-on' onClick={this.props.switchTheme}></i>
      </div>
    )
  }
}

export default Taskbar;