import React from 'react';
import { connect } from 'react-redux';
import { ContextMenuProvider } from 'react-contexify';
import PropTypes from 'prop-types';

import MixMenu from './mixMenu';

class ValueHeaderRenderer extends React.Component {
  renderHeaderText() {
    return (
      <div className="ag-header-cell-label">
        {this.props.column.colDef.headerName}
      </div>
    );
  }

  render() {
    if (this.props.gridData.length === 0) {
      return this.renderHeaderText();
    }
    return (
      <div>
        <ContextMenuProvider id="value_menu_id" event="onContextMenu">
          {this.renderHeaderText()}
        </ContextMenuProvider>
        <MixMenu isMixHeader={false} />
      </div>
    );
  }
}

ValueHeaderRenderer.propTypes = {
  column: PropTypes.object.isRequired,
  gridData: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    ...state.allocationGrid,
  };
};

export default connect(mapStateToProps, null)(ValueHeaderRenderer);
