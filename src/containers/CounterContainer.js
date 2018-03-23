import Counter from '../components/Counter'
import {addAction, minusAction,addStep, minusStep} from '../actions'
import {connect} from 'react-redux'
// const mapStateToProps = (state) => ({
//   counter: state.counter
// })
const mapStateToProps = (state) => ({
  counter: state.counter,
  step: state.step,
})
const mapDispatchToProps = (dispatch) => ({
  onAdd: () => dispatch(addAction()),
  onMinus: ()=> dispatch(minusAction()),
  addStep: () => dispatch(addStep()),
  minusStep: () => dispatch(minusStep())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
