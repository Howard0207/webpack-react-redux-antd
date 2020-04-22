import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Button, Tooltip, Rate } from 'antd';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 15,
    };
  }

  setName() {
    const { setHomeName } = this.props;
    setHomeName('home Name');
  }

  render() {
    const { name } = this.props;
    const { age } = this.state;
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="/">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <Tooltip title="search">
          <Button type="primary" shape="circle" onClick={() => this.setName}>
            AA
          </Button>
        </Tooltip>
        <Rate allowHalf defaultValue={2.5} />
        <Button type="primary" shape="circle" onClick={() => this.setName}>
          AA
        </Button>
        <div>
          this is home Component ass
          {name + age}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string.isRequired,
  setHomeName: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.getIn(['home', 'name']),
});

const mapDispatchToProps = (dispatch) => ({
  setHomeName(name) {
    const action = actionCreators.setName(name);
    dispatch(action);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
