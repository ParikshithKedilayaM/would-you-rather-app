import React, { Component } from 'react'
import Card from './Card'
import Header from './Header'
import { connect } from 'react-redux'

class Poll extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="col-md-6 col-md-offset-3">
                    <Card 
                        id={this.props.id}
                        q={true}
                    />
                </div>
            </div>
        )
    }
}
function mapStateToProps({users, questions}, props) {
    const { id } = props.match.params
    return {
        id, 

    }
}
export default connect(mapStateToProps)(Poll)
