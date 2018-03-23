import Counter from '../components/Counter'
import {addAction, minusAction} from '../actions'
import {connect} from 'react-redux'
// const mapStateToProps = (state) => ({
//   counter: state.counter
// })
const mapStateToProps = (state) => ({
  counter: state.counter
})
const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch(addAction()),
  onMinus: ()=> dispatch(minusAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
