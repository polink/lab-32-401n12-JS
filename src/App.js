import React from 'react';
import {connect} from 'react-redux';
import {createCategory} from "./action/category-action";

import CategoryForm from './component/CategoryForm/CategoryForm'

class App extends React.Component{
  render() {
    return (
      <div>
        <CategoryForm onComplete={this.props.mappedCategoryCreate}/>
        {this.props.categories.map(current => <p>{current.name}</p>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    mappedCategoryCreate: (category) => {
      dispatch(createCategory(category.title));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);