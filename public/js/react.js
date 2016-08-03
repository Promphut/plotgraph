class ShowUser extends React.Component{
    constructor(){
      super()
      this.data = []            
    }
    popup1(d){
      popup(d)
    }
    ready(data){
            this.data = this.props.data
            this.setState({})
            }     
    render(){
      var user=[]
      for(var i=0; i < this.data.length; i++){
        user.push((
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
          <div className='img' key={i} onClick={() => this.popup1(this.data[a]) }>
            <img src={ this.data[i].photo } width="300" height="300"/> 
            <div className="desc">{ this.data[i].fullname }</div>
            <div className="desc">{ this.data[i].email }</div>
          </div></div>
          ))
          let a=i
      }
      
      return(
        <div className="container" >
          
            { user }
          
        </div>
      )
    }
  }
  ReactDOM.render(<ShowUser data="userInfo"/>,document.getElementById('show'))