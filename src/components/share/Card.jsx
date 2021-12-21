import { reverse } from 'lodash'
import PropTypes from 'prop-types'
Card.defaultProps={
    reverse:false,

}
Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool.isRequired
}


function Card({children,reverse}) {
    return (
        <div className="card" style={{
            backgroundColor:reverse?'black':'white',
        textColor:reverse?'#fff':'#000'}}>
        {children}
        </div>
    )
}

export default Card
