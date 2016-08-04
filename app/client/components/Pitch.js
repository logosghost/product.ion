import React from 'react';
import { Link } from 'react-router';

const Pitch = React.createClass({
  handleSubmit(event) {
    event.preventDefault();
    var pitch = {
      name: this.refs.projectName.value,
      numAssets: this.refs.numberOfAssets.value,
      type: this.refs.videoType.value,
      reqBudget: this.refs.requestedBudget.value,
      needs: this.refs.studioNeeds.value,
      startDate: this.refs.startDate.value,
      endDate: this.refs.endDate.value
    }

    this.props.postNewProject(pitch);
  },

  render() {
    return (
      <div className="Pitch">
        <h2 className="form-page__form-heading">Pitch</h2>
        <form className="form" onSubmit={this.handleSubmit}>

           <div className="form__error-wrapper">
             <p className="form__error form__error--username-not-registered">This username does not exist!</p>
             <p className="form__error form__error--field-missing">Please fill out the entire form!</p>
             <p className="form__error form__error--failed">Something went wrong, please try again!</p>
           </div>

           <div className="form__field-wrapper">
             <label
               className="form__field-label"
               htmlFor="projectName">
                 Project Name
             </label>
             <input
               className="form__field-input"
               type="text" id="projectName"
               placeholder="Please fill me out!"
               ref="projectName" onChange={this.props.projectName}
               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
           </div>

           <div className="form__field-wrapper">
             <label
               className="form__field-label"
               htmlFor="numberOfAssets">
                 Number of Assets
             </label>
             <input
               className="form__field-input"
               type="text" id="numberOfAssets"
               placeholder="Please fill me out!"
               ref="numberOfAssets" onChange={this.props.numberOfAssets}
               autoCorrect="off" autoCapitalize="off" spellCheck="false"/>
           </div>

           <div className="form__field-wrapper">
             <label
               className="form__field-label"
               htmlFor="videoType">
                 Video Type
             </label><br></br>
             <select className="form__field-input" ref="videoType" onChange={this.props.videoType}>
               <option value="feature">Feature</option>
               <option value="short">Short</option>
               <option value="television">Television</option>
               <option value="web">Web</option>
               <option value="episode">Episode</option>
             </select>
           </div>

           <div className="form__field-wrapper">
             <label className="form__field-label"
             htmlFor="requestedBudget">
               Requested Budget
             </label>
             <input
               className="form__field-input"
               type="text" id="requestedBudget"
               placeholder="Please fill me out"
               ref="requestedBudget" onChange={this.props.requestedBudget}
               autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>

           <div className="form__field-wrapper">
             <label
               className="form__field-label"
               htmlFor="studioNeeds">
                 Studio Needs
             </label>
             <input
               className="form__field-input"
               type="text" id="studioNeeds"
               placeholder="Please fill me out"
               ref="studioNeeds" onChange={this.props.studioNeeds}
               autoCorrect="off" autoCapitalize="off" spellCheck="false" />
           </div>

           <div className="form__field-wrapper">
             <label
               className="form__field-label"
               htmlFor="startDate">
                 Start Date
             </label>
             <input
             className="form__field-input"
             type="date" id="startDate"
             ref="startDate" onChange={this.props.startDate}
             />
           </div>

           <div className="form__field-wrapper">
             <label
             className="form__field-label"
             htmlFor="endDate">
               End Date
             </label>
             <input
             className="form__field-input"
             type="date" id="endDate"
             ref="endDate" onChange={this.props.endDate} />
           </div>
           <div className="form__submit-btn-wrapper">
             <button className="form__submit-btn" type="submit">
               <Link to={`/dashboard/${this.props.organization.orgName.split(" ").join("")}`}>
                 Submit your Pitch!
               </Link>
             </button>
           </div>
         </form>
      </div>
    );
  }
});

export default Pitch;
