var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className={'contactForm'}>
        <input type={'text'} placeholder={'Fitst name'} value={'this.props.contact.firstName'}></input>
        <input type={'text'} placeholder={'Last name'} value={'this.props.contact.lastName'}></input>
        <input type={'email'} placeholder={'Email'} value={'this.props.contact.email'}></input>
        <button type={'Submit'}>Add contact</button>
      </form>
    )
  },
})