import {connect} from 'react-redux'
import {addStep, minusStep} from '../actions'
import StepPanel from '../components/StepPanel'
const mapStateToProps = (state) => ({
  step: state.step
})

const mapDispatchToProps = (dispatch) => ({
  addStep: () => dispatch(addStep()),
  minusStep: () => dispatch(minusStep())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepPanel)
