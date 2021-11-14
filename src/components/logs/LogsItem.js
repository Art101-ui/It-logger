import React from 'react'
import Moment from 'react-moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { deleteLogs } from '../../actions/logActions'

import { setCurrent } from '../../actions/logActions'
import M from 'materialize-css/dist/js/materialize.min.js'


const LogsItem = ({log,deleteLogs,setCurrent})=> {
    const {id,message,date,tech} = log

    const onDelete = () => {
        deleteLogs(id)
        M.toast({html:'Log Deleted'})
    }
    return (
        
           <li className="collection-item">
               <div>
                   <a href="#edit-log-modal" className={`modal-trigger ${log.attention?'red-text':'blue-text'}`} onClick={()=> setCurrent(log)}>{message}</a>
                   <br />
                   <span className="grey-text">
                       <span className="black-text">ID #{id}</span> last updated by{' '}
                       <span className="black-text">{tech}</span> on{' '}
                       <Moment format = 'MMMM Do YYYY,h:mm:ss a'>{date}</Moment>
                   </span>
                   <a href="#!" className="secondary-content"onClick={onDelete}> <i className="material-icons grey-text">delete</i> </a>
               </div>
           </li> 
        
    )
}

LogsItem.propTypes = {
  log:PropTypes.object.isRequired,
  deleteLogs: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
}

export default connect(null,{deleteLogs,setCurrent})(LogsItem)
