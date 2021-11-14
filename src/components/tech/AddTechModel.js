import React,{useState} from 'react'
import { connect } from 'react-redux'
import { addTech } from '../../actions/techActions'
import PropTypes from 'prop-types'

import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({addTech}) => {
    const [firstName,setfirstName] = useState('')
    const [lastName,setlastName] = useState('')
    

    const onSubmit = ()=>{
        if(firstName ===''||lastName===''){
            M.toast({html:'Please enter the first and last name'})
        }else{
            const newTech={
                firstName,lastName
            }
            addTech(newTech)
            setfirstName('')
            setlastName('')
            M.toast({html:`${firstName} ${lastName} was added to Tech`})
        }
       
    }

    return (
        <div id='addtech-tech-modal' className='modal' style={modalStyle}>
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange = {e=>setfirstName(e.target.value)}/>
                        <label htmlFor="firstName" className = 'active'>FirstName</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange = {e=>setlastName(e.target.value)}/>
                        <label htmlFor="lastName" className = 'active'>LastName</label>
                    </div>
                </div>
            </div>

            <div className="modal-footer">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue btn">Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width : '75%',
    height:  '75%'
}

AddTechModal.propTypes={
    addTech: PropTypes.func.isRequired,
}
export default connect(null,{addTech})(AddTechModal)